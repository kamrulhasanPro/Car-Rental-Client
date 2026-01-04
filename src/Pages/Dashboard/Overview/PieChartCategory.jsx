import { useEffect, useState } from "react";
import {
  Pie,
  PieChart,
  Sector,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import useAuth from "../../../Hooks/useAuth";
import { useAxiosSecure } from "../../../api/useAxiosSecure";

const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042"];

export default function PieChartCategory() {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [data, setData] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    axiosSecure.get(`/chart-by-category?email=${user?.email}`).then((res) => {
      console.log(res);
      setData(res.data);
    });
  }, [axiosSecure, user]);

  // 🔹 Active slice renderer
  const renderActiveShape = (props) => {
    const {
      cx,
      cy,
      innerRadius,
      outerRadius,
      startAngle,
      endAngle,
      fill = "#8884d8",
      payload,
      value,
    } = props;

    return (
      <g>
        <text
          x={cx}
          y={cy - 8}
          textAnchor="middle"
          fill="#333"
          className="text-sm font-semibold"
        >
          {payload?.category}
        </text>

        <text
          x={cx}
          y={cy + 12}
          textAnchor="middle"
          fill="#666"
          className="text-xs"
        >
          {value} Cars
        </text>

        {/* main active sector */}
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
        />

        {/* outer highlight */}
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={outerRadius + 4}
          outerRadius={outerRadius + 10}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
          opacity={0.3}
        />
      </g>
    );
  };

  // 🔢 Total cars
  const totalCars = data.reduce(
    (sum, item) => Number(sum) + Number(item.total),
    0
  );

  return (
    <div className="bg-base-200 p-4 rounded-xl">
      <h2 className="text-lg font-semibold mb-4">
        My Car Listings (Category Wise)
      </h2>

      <ResponsiveContainer width="100%" height={320}>
        <PieChart>
          <Pie
            activeIndex={activeIndex}
            activeShape={renderActiveShape}
            data={data}
            cx="50%"
            cy="50%"
            innerRadius="60%"
            outerRadius="80%"
            dataKey="total"
            onMouseEnter={(_, index) => setActiveIndex(index)}
          />
          {data.map((_, index) => (
            <Cell key={index} fill={COLORS[index % COLORS.length]} />
          ))}

          {/* Center total */}
          <text
            x="50%"
            y="50%"
            dy={4}
            textAnchor="middle"
            className="text-xl font-bold fill-current"
          >
            {totalCars}
          </text>
          <text
            x="50%"
            y="50%"
            dy={22}
            textAnchor="middle"
            className="text-xs fill-gray-500"
          >
            Total Cars
          </text>

          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
