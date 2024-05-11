import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

import {
  useCreateSuppliesMutation,
  useEditSuppliesMutation,
  useGetSingleSuppliesQuery,
} from "../../redux/features/supplies/suppliesApi";
import Loading from "../../components/Loading";

const DashCreateSupplies = () => {
  const suppliesId = useParams().id;
  const location = useLocation();
  const navigate = useNavigate();
  const [request, setRequest] = useState(false);

  // Check if form is in edit mode
  const editPage = location.pathname.includes("edit-supplies");

  const [
    createSupplies,
    { isLoading: createSuppliesLoading, error: createSuppliesError },
  ] = useCreateSuppliesMutation();
  
  const {
    data: suppliesData,
    isLoading: singleSuppliesLoading,
    isError: singleSuppliesError,
  } = useGetSingleSuppliesQuery(suppliesId, {
    skip: request,
  });

  const [
    editSupplies,
    { isLoading: editSuppliesLoading, isError: editSuppliesError },
  ] = useEditSuppliesMutation();

  //fetch edited data if it is edit page
  useEffect(() => {
    if (editPage && suppliesId) {
      setRequest(true);
    }
  }, [editPage, suppliesId]);  

  const [formData, setFormData] = useState({
    title: "",
    category: "",
    imageLink: "",
    quantity: "",
    description: "",
  });


  // Set form data if in edit mode and Supplies data is available
  useEffect(() => {
    if (editPage && suppliesData) {
      setFormData({
        title: suppliesData.title,
        category: suppliesData.category,
        imageLink: suppliesData.imageLink,
        quantity: suppliesData.quantity,
        description: suppliesData.description,
      });
    } else {
      setFormData({
        title: "",
        category: "",
        imageLink: "",
        quantity: "",
        description: "",
      });
    }
  }, [editPage, suppliesData]);

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      if (editPage) {
        await editSupplies({ id: suppliesId, data: formData });
        // Display success message using Swal
        Swal.fire({
          icon: "success",
          title: "Supplies updated successfully",
          showConfirmButton: false,
          timer: 2000,
          toast: true,
          position: "top-end",
        });
        navigate("/dashboard/all-supplies");
      } else {
        await createSupplies(formData);
        // Display success message using Swal
        Swal.fire({
          icon: "success",
          title: "Supplies created successfully",
          showConfirmButton: false,
          timer: 2000,
          toast: true,
          position: "top-end",
        });
      }

      setFormData({
        title: "",
        category: "",
        imageLink: "",
        quantity: "",
        description: "",
      });
    } catch (error) {
      console.error("Error handling Supplies:", error);
    }
  };

  // Handle input changes and update the form data state
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return singleSuppliesLoading && singleSuppliesError ? (
    <Loading />
  ) : (
    <div className="container mt-4 mx-auto max-w-screen-lg p-4">
      <h2 className="text-center mb-4 font-primary font-bold text-2xl text-primary">
        Create supplies
      </h2>
      <form className="md:grid md:grid-cols-2 md:gap-4" onSubmit={handleSubmit}>
        {/* Title */}
        <div className="md:col-span-1 mb-3">
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700 mb-1 mt-2"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            placeholder="Type here"
            className="input input-bordered w-full bg-white text-black"
            onChange={handleChange}
          />
        </div>
        {/* Category */}
        <div className="md:col-span-1 mb-3">
          <label
            htmlFor="category"
            className="block text-sm font-medium text-gray-700 mb-1 mt-2"
          >
            Category
          </label>
          <input
            type="text"
            id="category"
            name="category"
            value={formData.category}
            placeholder="Type here"
            className="input input-bordered w-full bg-white text-black"
            onChange={handleChange}
          />
        </div>
        {/* Image Link */}
        <div className="md:col-span-2 mb-3">
          <label
            htmlFor="imageLink"
            className="block text-sm font-medium text-gray-700 mb-1 mt-2"
          >
            Image Link
          </label>
          <input
            type="text"
            id="imageLink"
            name="imageLink"
            value={formData.imageLink}
            placeholder="Type here"
            className="input input-bordered w-full bg-white text-black"
            onChange={handleChange}
          />
        </div>
        {/* quantity */}
        <div className="md:col-span-1 mb-3">
          <label
            htmlFor="quantity"
            className="block text-sm font-medium text-gray-700 mb-1 mt-2"
          >
            Quantity
          </label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            value={formData.quantity}
            placeholder="Type here"
            className="input input-bordered w-full bg-white text-black"
            onChange={handleChange}
          />
        </div>
        {/* Description */}
        <div className="md:col-span-1 mb-3">
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700 mb-1 mt-2"
          >
            Description
          </label>
          <input
            type="text"
            id="description"
            name="description"
            value={formData.description}
            placeholder="Type here"
            className="input input-bordered w-full bg-white text-black"
            onChange={handleChange}
          />
        </div>
        {/* Submit button */}
        <div className="md:col-span-2">
          <button
            type="submit"
            disabled={createSuppliesLoading && editSuppliesLoading}
            className="btn bg-primary border-0 text-light hover:bg-secondary w-full"
            onClick={() => {
              Swal.fire({
                position: "top-end",
                title: "Wait a moment, please",
                showConfirmButton: false,
                icon: "info",
                timer: 1500,
                toast: true,
              });
            }}
          >
            {editPage
              ? "Edit Supplies"
              : editSuppliesLoading
              ? "Submitting"
              : createSuppliesLoading
              ? "Submitting"
              : "Submit"}
          </button>
          {createSuppliesError && <p>Supplies creation failed!</p>}
          {editSuppliesError && <p>Supplies editing failed!</p>}
        </div>
      </form>
    </div>
  );
};

export default DashCreateSupplies;
