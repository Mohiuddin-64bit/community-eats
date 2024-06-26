import { Link } from "react-router-dom";
import { useGetAllSuppliesQuery } from "../redux/features/supplies/suppliesApi";
import { TSuppliesTypes } from "../types/supplies.types";
import Loading from "./Loading";
import { PiBowlFoodLight } from "react-icons/pi";
import Title from "./Title";

const RenderSuppliesCard = (supplies: TSuppliesTypes) => {
  return (
    <div id="supplies" className="w-full">
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
          <p className="text-white font-white flex items-center gap-1 font-semibold mb-2">
            Quantity: {supplies.quantity} <PiBowlFoodLight />
          </p>
          <div className="w-full flex flex-col md:flex-row gap-5 md:gap-0 justify-between">
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

const Supplies = () => {
  const { data, isLoading, isError } = useGetAllSuppliesQuery({});

  return (
    <div className="container mx-auto mt-5 px-5 md:px-0 lg:mt-14 mb:8 lg:mb-16">
      <Title
        title="All Supplies"
        subTitle="Inventory Overview"
        description="A comprehensive list of all supplies currently in stock, including details such as quantity, supplier, and status."
      />
      {isLoading && <Loading />}
      {!isLoading && (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {isError && (
              <p className="text-red-500 text-center">Error fetching data!</p>
            )}
            {!isError &&
              !isLoading &&
              data?.length > 0 &&
              data
                .slice(0, 6)
                .map((supplies: TSuppliesTypes) =>
                  RenderSuppliesCard(supplies)
                )}
          </div>
          <div className="flex justify-center mt-5 lg:mt-10 mb-5">
            <Link to="/supplies">
              <button className="btn text-center w-3/2 bg-primary text-light">
                View All Supplies
              </button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Supplies;
