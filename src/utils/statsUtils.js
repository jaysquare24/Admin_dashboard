import { getRevenueByMonth } from "./chartUtils"

export const getTotalRevenue = (products, carts) => {
    const revenueByMonth = getRevenueByMonth(products, carts);

    return revenueByMonth.reduce((sum, rev) => sum + rev.revenue, 0).toFixed(2);
}

export const getConversionRate = (orders, visitors) => {
  if (!visitors) return 0;
  return ((orders / visitors) * 100).toFixed(2);
};