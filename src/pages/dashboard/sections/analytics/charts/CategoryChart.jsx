import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer
} from "recharts";

const data = [
  { category: "Electronics", products: 20 },
  { category: "Clothing", products: 35 },
  { category: "Shoes", products: 15 },
  { category: "Accessories", products: 10 }
];

export const CategoryChart = () => {
  return (

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="category" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="products" fill="#22c55e" />
        </BarChart>
      </ResponsiveContainer>
   
  );
}