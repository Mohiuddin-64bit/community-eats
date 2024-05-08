import Loading from "../components/Loading";
import { TSuppliesTypes } from "../types/supplies.types";
import { useGetAllSuppliesQuery } from "../redux/features/supplies/suppliesApi";
import { Link } from "react-router-dom";

const AllSupplies = () => {
  const { data, isLoading, isError } = useGetAllSuppliesQuery({});


  // Function to render individual donation cards
  const renderSuppliesCard = (supplies: TSuppliesTypes) => {
    return (
      <div className="w-full p-4">
        <div className="bg-white rounded-lg overflow-hidden shadow-md">
          <img
            src={supplies.imageLink}
            alt={supplies.title}
            className="w-full h-64 object-cover object-center"
          />
          <div className="p-4">
            <h3 className="text-lg font-bold text-primary mb-2 font-primary">
              {supplies.title}
            </h3>
            <p className="text-tertiary font-secondary mb-2">
              Category: {supplies.category}
            </p>
            <p className="text-secondary font-primary font-semibold mb-2">
              Amount: $ {supplies.amount}
            </p>
            <div className="w-full flex justify-between">
              <div className="w-4/5 mr-4">
                <p className="text-tertiary font-seconday">
                  {supplies.description?.slice(0, 80) +
                    (supplies.description.length > 80 ? "..." : "")}
                </p>
              </div>
              <div className="w-1/5">
                <Link to={`/donations/${supplies._id}`}>
                  <button className="btn text-light bg-secondary border-0">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="container mx-auto mt-5 lg:mt-10 mb:8 lg:mb-16">
      <h2 className="text-2xl lg:text-4xl text-center font-primary text-primary font-bold mb-4">
        All Supplies
      </h2>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {isError ? (
            <p className="text-red-500 text-center">Error fetching data!</p>
          ) : (
            data?.map((supplies: TSuppliesTypes) =>
              renderSuppliesCard(supplies)
            )
          )}
        </div>
      )}
    </div>
  );
};

export default AllSupplies;
