import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer
} from "recharts";

import { getRevenueByMonth } from "../../../../../utils/chartUtils";

export const RevenueChart = ({ products, carts  }) => {

    const data = getRevenueByMonth(products, carts);
    
  return (
    
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="revenue" stroke="#4f46e5" />
        </LineChart>
      </ResponsiveContainer>
    
  );
}