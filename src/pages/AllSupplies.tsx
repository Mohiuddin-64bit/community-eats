import Loading from "../components/Loading";
import { TSuppliesTypes } from "../types/supplies.types";
import { useGetAllSuppliesQuery } from "../redux/features/supplies/suppliesApi";
import { Link } from "react-router-dom";

const RenderSuppliesCard = (supplies: TSuppliesTypes) => {
  return (
    <div className="w-full p-4">
      <div className="bg-primary rounded-lg overflow-hidden shadow-md">
        <img
          src={supplies.imageLink}
          alt={supplies.title}
          className="w-full h-64 object-cover object-center"
        />
        <div className="p-4">
          <h3 className="text-lg font-bold text-white mb-2 font-primary">
            {supplies.title}
          </h3>
          <p className="text-white font-secondary mb-2">
            Category: {supplies.category}
          </p>
          <p className="text-white font-primary font-semibold mb-2">
            Quantity: {supplies.quantity}
          </p>
          <div className="w-full flex justify-between">
            <div className="w-4/5 mr-4">
              <p className="text-white font-seconday">
                {supplies.description?.slice(0, 80) +
                  (supplies.description.length > 80 ? "..." : "")}
              </p>
            </div>
            <div className="w-1/5">
              <Link to={`/supplies/${supplies._id}`}>
                <button className="btn text-light border-0">
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

const AllSupplies = () => {
  const { data, isLoading, isError } = useGetAllSuppliesQuery({});

  return (
    <div className="container mx-auto lg:pt-32 md:pt-24 pt-20">
      <h2 className="text-2xl lg:text-4xl text-center font-primary text-white font-bold pb-4">
        All Supplies
      </h2>
      {isLoading && <Loading />}
      {!isLoading && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {isError && (
              <p className="text-red-500 text-center">Error fetching data!</p>
            )}
            {!isError &&
              !isLoading &&
              data.length > 0 &&
              data
                .slice(0, 6)
                .map((supplies: TSuppliesTypes) =>
                  RenderSuppliesCard(supplies)
                )}
          </div>
        </>
      )}
    </div>
  );
};

export default AllSupplies;
