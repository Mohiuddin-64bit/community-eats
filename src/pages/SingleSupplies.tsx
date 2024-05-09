import { useParams } from "react-router-dom";
import { useGetSingleSuppliesQuery } from "../redux/features/supplies/suppliesApi";
import Loading from "../components/Loading";

const SingleSupplies = () => {
  const suppliesId = useParams().id;

  const { data, isLoading, isError } = useGetSingleSuppliesQuery(suppliesId);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <p className="text-red-500 text-center">Error fetching supplies data!</p>;
  }

  return (
    <div className="container mx-auto lg:pt-32 md:pt-24 pt-20">
      <div className="mx-auto">
        <div className="w-full lg:flex lg:items-center lg:justify-between">
          <div className="lg:w-1/2 p-3">
            <img
              src={data?.imageLink}
              alt={data?.title}
              className="w-full rounded-md h-auto mb-4 lg:mb-0 lg:mr-4 object-cover object-center"
            />
          </div>

          <div className="lg:w-1/2 p-3">
            <h2 className="text-xl lg:text-5xl font-primary text-white font-semibold lg:font-bold mb-4">
              {data?.title}
            </h2>
            <p className="text-tertiary text-xl lg:text-2xl font-secondary mb-2">
              Category: {data?.category}
            </p>
            <p className="text-secondary lg:text-2xl font-secondary font-bold mb-2">
              Amount: $ {data?.amount}
            </p>
            <p className="text-tertiary font-secondary lg:text-xl">{data?.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleSupplies;
