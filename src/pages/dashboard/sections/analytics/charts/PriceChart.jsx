import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer
} from "recharts";

const data = [
  { product: "A", price: 120 },
  { product: "B", price: 300 },
  { product: "C", price: 250 },
  { product: "D", price: 400 }
];

export const PriceChart = () => {
  return (
   
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="product" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="price" stroke="#f97316" fill="#fdba74" />
        </AreaChart>
      </ResponsiveContainer>
    
  );
}