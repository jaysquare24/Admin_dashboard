import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer
} from "recharts";

import { getPriceDistribution } from "../../../../../utils/chartUtils";

export const PriceChart = ({products}) => {
  const data = getPriceDistribution(products);

  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="range" />
        <YAxis />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="count"
          stroke="#f97316"
          fill="#fdba74"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};