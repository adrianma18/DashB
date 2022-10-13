import React from "react";
import { Stacked, Button } from "../components";
import { earningData, pieChartData } from "../data/dummy";
import { Pie as PieChart } from "../components";

const Dashboard = () => {
  return (
    <div className="mt-12">
      <div className="flex flex-wrap lg:flex-nowrap justify-center">
        <div className="flex m-3 flex-wrap justify-center gap-1 items-center">
          {earningData.map((item) => (
            <div
              key={item.title}
              className="bg-white md:w-40 p-4 pt-9 rounded-2xl">
              <button
                type="button"
                style={{
                  color: item.iconColor,
                  backgroundColor: item.iconBg,
                }}
                className="text-2xl rounded-md p-4 hover:drop-shadow-xl">
                {item.icon}
              </button>
              <p className="mt-3">
                <span className="text-lg font-semibold">{item.amount}</span>
                <span className={`text-sm text-${item.pcColor} ml-2`}>
                  {item.percentage}
                </span>
              </p>
              <p className="text-sm text-slate-600 mt-1">{item.title}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-1 flex-wrap justify-center">
        <div className="bg-white m-3 p-4 rounded-2xl md:w-680">
          <div className="flex justify-between">
            <p className="font-semibold text-xl">Revenue Updates</p>
            <div className="flex items-center gap-4"></div>
          </div>
          <div className="mt-10 flex gap-10 flex-wrap justify-center">
            <div className="border-r-1 border-color m-4 pr-10">
              <div>
                <p>
                  <span className="text-3xl font-semibold">70,000</span>
                  <span className="p-1.5 hover:drop-shadow-xl cursor-pointer rounded-md text-white bg-green-500 ml-3 text-xs">
                    20%
                  </span>
                </p>
                <p className="text-slate-700 mt-1">Budget</p>
              </div>

              <div className="mt-8">
                <p>
                  <span className="text-3xl font-semibold">40,000</span>
                </p>
                <p className="text-slate-700 mt-1">Expense</p>
              </div>
              <div className="mt-10">
                <Button
                  color="white"
                  bgColor="#1e293b"
                  text="Download"
                  size="md"
                  borderRadius="10px"
                />
              </div>
            </div>
            <div>
              <Stacked width="320px" height="360px" />
            </div>
          </div>
        </div>

        <div className="bg-white m-3 p-4 rounded-2xl md:w-680">
          <div className="w-full">
            <PieChart
              id="chart-pie"
              data={pieChartData}
              legendVisiblity
              height="full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
