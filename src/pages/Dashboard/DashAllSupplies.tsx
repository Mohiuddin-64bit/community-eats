import Swal from "sweetalert2";
import { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdTrash } from "react-icons/io";
import { RiEditFill } from "react-icons/ri";

import {
  useDeleteSuppliesMutation,
  useGetAllSuppliesQuery,
} from "../../redux/features/supplies/suppliesApi.ts";
import Loading from "../../components/Loading.tsx";
import { TSuppliesTypes } from "../../types/supplies.types.ts";

const DashAllSupplies = () => {
  const {
    data,
    isLoading: dataLoading,
    isError: dataError,
  } = useGetAllSuppliesQuery({});

  const [deleteDonation, { isLoading: deleteDonationLoading }] =
    useDeleteSuppliesMutation();

  const [deletingItemId, setDeletingItemId] = useState<string | null>(null);

  const handleDelete = (id: string) => {
    setDeletingItemId(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteDonation(id);
      }
    });
  };

  return (
    <div className="container mx-auto">
      {dataLoading ? (
        <Loading />
      ) : dataError ? (
        <div>Error loading data</div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-[500px] lg:min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 2plg:px-6 percase tracking-wider lg:w-1/3"
                >
                  Title
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 2plg:px-6 percase tracking-wider lg:w-1/3"
                >
                  Category
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 2plg:px-6 percase tracking-wider lg:w-1/3"
                >
                  Amount
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 2plg:px-6 percase tracking-wider lg:w-1/3"
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200 w-full">
              {data?.map((item: TSuppliesTypes) => (
                <tr key={item?._id}>
                  <td className="px-2 lg:px-6 py-4 whitespace-nowrap lg:w-1/3">
                    {item?.title}
                  </td>
                  <td className="px-2 lg:px-6 py-4 whitespace-nowrap lg:w-1/3">
                    {item?.category}
                  </td>
                  <td className="px-2 lg:px-6 py-4 whitespace-nowrap lg:w-1/3">
                    {item?.amount}
                  </td>
                  <td className="px-2 lg:px-6 py-4 whitespace-nowrap lg:w-1/3">
                    <button
                      className="btn btn-square btn-outline mr-4"
                      onClick={() => handleDelete(item?._id)}
                    >
                      {deletingItemId === item?._id && deleteDonationLoading ? (
                        <span className="loading loading-spinner loading-md"></span>
                      ) : (
                        <IoMdTrash className="text-red-500 text-lg" />
                      )}
                    </button>
                    <Link
                      to={`/dashboard/edit-supplies/${item?._id}`}
                      className="btn btn-square btn-outline"
                    >
                      <RiEditFill className="text-info text-lg" />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default DashAllSupplies;
