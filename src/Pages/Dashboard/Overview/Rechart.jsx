import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
} from "recharts";
import { useAxiosSecure } from "../../../api/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";
import PieChartCategory from "./PieChartCategory";

const Rechart = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axiosSecure.get(`/chart-by-car?email=${user?.email}`).then((res) => {
      console.log(res);
      setCategories(res.data);
    });
  }, [axiosSecure, user]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
      <div>
        <h4 className="text-xl mb-2 text-gray-400">
          Car price compare with category
        </h4>

        <BarChart
          style={{
            width: "100%",
            maxWidth: "100%",
            maxHeight: "70vh",
            aspectRatio: 1.618,
          }}
          responsive
          data={categories}
          margin={{
            top: 5,
            right: 0,
            left: 0,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="carName" />
          <YAxis width="auto" />
          <Tooltip />
          <Legend />
          <Bar
            dataKey="pricePerDay"
            fill="#8884d8"
            activeBar={{ fill: "pink", stroke: "blue" }}
            radius={[10, 10, 0, 0]}
          />
          <Bar
            dataKey="total"
            fill="#82ca9d"
            activeBar={{ fill: "gold", stroke: "purple" }}
            radius={[10, 10, 0, 0]}
            width={5}
          />

          {/* <RechartsDevtools /> */}
        </BarChart>
      </div>

      <PieChartCategory />
    </div>
  );
};

export default Rechart;
