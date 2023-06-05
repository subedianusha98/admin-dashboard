import React from "react";
import BarChart from "../admin/chart";
import Piechart from "../admin/Piechart";
import { Link } from "react-router-dom";
import { RiHandbagLine, RiNotification3Fill } from "react-icons/ri";
import { BsFillBarChartLineFill } from "react-icons/bs";
import { CiDeliveryTruck } from "react-icons/ci";
const Dashboard = () => {
  return (
    <>
      <div className="flex-col">
        <div className="flex flex-wrap mx-2 ">
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-2">
            <div className="bg-blue-400 rounded-lg p-4">
              <div className="text-white">
                <p className="text-lg">Total Sales</p>
                <h3 className="text-3xl font-bold">200</h3>
              </div>
              <div className="mt-4">
                <RiHandbagLine className=" text-white text-4xl" />
              </div>
            </div>
          </div>

          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-2">
            <div className="bg-green-400 rounded-lg p-4">
              <div className="text-white">
                <p className="text-lg">Profit</p>
                <h3 className="text-3xl font-bold">
                  53<sup className="text-xl">%</sup>
                </h3>
              </div>
              <div className="mt-4">
                <BsFillBarChartLineFill className=" text-white text-4xl" />
              </div>
            </div>
          </div>

          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-2">
            <div className="bg-red-400 rounded-lg p-4">
              <div className="text-white">
                <p className="text-lg">Notifications</p>
                <h3 className="text-3xl font-bold">44</h3>
              </div>
              <div className="mt-4">
                <RiNotification3Fill className=" text-white text-4xl" />
              </div>
            </div>
          </div>
          

          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-2">
            <div className="bg-cyan-600 rounded-lg p-4">
              <div className="text-white">
                <p className="text-lg">Deliveries</p>
                <h3 className="text-3xl font-bold">65</h3>
              </div>
              <div className="mt-4">
                <CiDeliveryTruck className=" text-white text-4xl" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-row mt-10">
          <div className=" w-50">
            <BarChart />
          </div>
          <div className="w-[375px] pl-20">
            <Piechart />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
