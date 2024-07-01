import DashboardTable from "../../components/DashboardTable";
import LineChartComponent from "../../components/LineChartComponent";
import OrderSummary from "../../components/OrderSummary";

const DashHome = () => {
  return (
    <div className="container mx-auto px-12">
      <div className="grid grid-cols-1 sm:grid-cols-3 items-center gap-6">
        <div className="bg-white shadow-lg rounded-xl p-4 py-8">
          <h2 className="text-sm font-semibold">Total Supplies</h2>
          <p className="text-3xl font-bold">18,748</p>
        </div>
        <div className="bg-white shadow-lg rounded-xl p-4 py-8">
          <h2 className="text-sm font-semibold">Total Users</h2>
          <p className="text-3xl font-bold">18,748</p>
        </div>
        <div className="bg-white shadow-lg rounded-xl p-4 py-8">
          <h2 className="text-sm font-semibold">Total Orders</h2>
          <p className="text-3xl font-bold">18,748</p>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-12">
        <div className="bg-white shadow-lg rounded-xl p-4 ">
          <div>
            <p className="font-semibold">Total Supply</p>
            <LineChartComponent />
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-xl p-4 ">
          <div>
            <p className="font-semibold">Order Summary</p>
            <p className="text-gray-500 py-3">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi
              eveniet, odit, repellat eaque tempore quis iste maxime quo, illum
              ab repudiandae consequuntur?
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 ">
              <OrderSummary />
              <div>
                <div>
                  <progress
                    className="progress progress-primary w-100"
                    value="40"
                    max="100"
                  ></progress>
                  <div className="flex justify-between">
                    <p className="text-sm text-gray-500">Total Orders</p>
                    <p className="text-sm font-semibold">40%</p>
                  </div>
                </div>
                <div>
                  <progress
                    className="progress progress-accent  w-100"
                    value="40"
                    max="100"
                  ></progress>
                  <div className="flex justify-between">
                    <p className="text-sm text-gray-500">Total Donation</p>
                    <p className="text-sm font-semibold">40%</p>
                  </div>
                </div>
                <div>
                  <progress
                    className="progress progress-error  w-100"
                    value="40"
                    max="100"
                  ></progress>
                  <div className="flex justify-between">
                    <p className="text-sm text-gray-500">Supply Failed</p>
                    <p className="text-sm font-semibold">40%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-6 mt-12 ">
        <div className="col-span-12 sm:col-span-8 bg-white shadow-lg rounded-xl py-8">
          <DashboardTable />
        </div>
        <div className="col-span-12 sm:col-span-4 h-[430px] overflow-auto bg-white shadow-lg rounded-xl py-8">
          <div className="">
            <h2 className="font-semibold px-4 mb-5">Recent Supply</h2>
            <div className="bg-slate-50 ">
              <div className="border-b"></div>
              <div className="flex justify-between items-center px-4 py-3">
                <div>
                  <p className="text-sm">100 Packet Biscuits</p>
                  <p className="text-sm text-gray-500">12/12/2021</p>
                </div>
                <p className="text-sm font-semibold">$120</p>
              </div>
              <div className="border-b"></div>
              <div className="flex justify-between items-center px-4 py-3">
                <div>
                  <p className="text-sm">100 Packet Biscuits</p>
                  <p className="text-sm text-gray-500">12/12/2021</p>
                </div>
                <p className="text-sm font-semibold">$120</p>
              </div>
              <div className="border-b"></div>
              <div className="flex justify-between items-center px-4 py-3">
                <div>
                  <p className="text-sm">100 Packet Biscuits</p>
                  <p className="text-sm text-gray-500">12/12/2021</p>
                </div>
                <p className="text-sm font-semibold">$120</p>
              </div>
              <div className="border-b"></div>
              <div className="flex justify-between items-center px-4 py-3">
                <div>
                  <p className="text-sm">100 Packet Biscuits</p>
                  <p className="text-sm text-gray-500">12/12/2021</p>
                </div>
                <p className="text-sm font-semibold">$120</p>
              </div>
              <div className="border-b"></div>
              <div className="flex justify-between items-center px-4 py-3">
                <div>
                  <p className="text-sm">100 Packet Biscuits</p>
                  <p className="text-sm text-gray-500">12/12/2021</p>
                </div>
                <p className="text-sm font-semibold">$120</p>
              </div>
              <div className="border-b"></div>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashHome;
