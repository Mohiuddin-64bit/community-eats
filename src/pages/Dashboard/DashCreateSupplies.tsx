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
  const donationId = useParams().id;
  const location = useLocation();
  const navigate = useNavigate();
  const [request, setRequest] = useState(false);

  // Check if form is in edit mode
  const editPage = location.pathname.includes("edit-donation");

  const [
    createDonation,
    { isLoading: createDonationLoading, error: createDonationError },
  ] = useCreateSuppliesMutation();
  
  const {
    data: donationData,
    isLoading: singleDonationLoading,
    isError: singleDonationError,
  } = useGetSingleSuppliesQuery(donationId, {
    skip: request,
  });

  const [
    editDonation,
    { isLoading: editDonationLoading, isError: editDonationError },
  ] = useEditSuppliesMutation();

  //fetch edited data if it is edit page
  useEffect(() => {
    if (editPage && donationId) {
      setRequest(true);
    }
  }, [editPage, donationId]);  

  const [formData, setFormData] = useState({
    title: "",
    category: "",
    imageLink: "",
    amount: "",
    description: "",
  });

  // Set form data if in edit mode and donation data is available
  useEffect(() => {
    if (editPage && donationData) {
      setFormData({
        title: donationData.title,
        category: donationData.category,
        imageLink: donationData.imageLink,
        amount: donationData.amount,
        description: donationData.description,
      });
    } else {
      setFormData({
        title: "",
        category: "",
        imageLink: "",
        amount: "",
        description: "",
      });
    }
  }, [editPage, donationData]);

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      if (editPage) {
        await editDonation({ id: donationId, data: formData });
        // Display success message using Swal
        Swal.fire({
          icon: "success",
          title: "Donation updated successfully",
          showConfirmButton: false,
          timer: 2000,
          toast: true,
          position: "top-end",
        });
        navigate("/dashboard/all-donation");
      } else {
        await createDonation(formData);
        // Display success message using Swal
        Swal.fire({
          icon: "success",
          title: "Donation created successfully",
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
        amount: "",
        description: "",
      });
    } catch (error) {
      console.error("Error handling donation:", error);
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

  return singleDonationLoading && singleDonationError ? (
    <Loading />
  ) : (
    <div className="container mt-4 mx-auto max-w-screen-lg p-4">
      <h2 className="text-center mb-4 font-primary font-bold text-2xl text-primary">
        Create Donation
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
        {/* Amount */}
        <div className="md:col-span-1 mb-3">
          <label
            htmlFor="amount"
            className="block text-sm font-medium text-gray-700 mb-1 mt-2"
          >
            Amount
          </label>
          <input
            type="number"
            id="amount"
            name="amount"
            value={formData.amount}
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
            disabled={createDonationLoading && editDonationLoading}
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
              ? "Edit Donation"
              : editDonationLoading
              ? "Submitting"
              : createDonationLoading
              ? "Submitting"
              : "Submit"}
          </button>
          {createDonationError && <p>Donation creation failed!</p>}
          {editDonationError && <p>Donation editing failed!</p>}
        </div>
      </form>
    </div>
  );
};

export default DashCreateSupplies;
