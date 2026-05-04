import { FiUsers, FiShoppingCart, FiDollarSign, FiBarChart, FiBox } from 'react-icons/fi';
import { StatCards } from './Statcards';
import { getTotalRevenue, getConversionRate } from '../../../../utils/statsUtils';

export const Statistics = ({ products, users, carts }) => {

   const totalProducts = products.length;
   const totalRevenue = getTotalRevenue(products, carts);
   const totalUsers = users.length;
   const totalCarts = carts.length; 
   const conversionRate = getConversionRate(totalCarts,totalUsers);
    return (
    <section className="statistics">
      <h2>Statistics</h2>
      <div className='stat-container'>
            <StatCards icon={<FiUsers  className='icon'/>} title="Total Users" value={totalUsers} />
            <StatCards icon={<FiBox className='icon' />} title="Total Products" value={totalProducts} />
            <StatCards icon={<FiShoppingCart className='icon'/>} title="Total Orders" value={totalCarts} />
            <StatCards icon={<FiDollarSign className='icon' />} title="Total Revenue" value={`$${totalRevenue}`} />
            <StatCards icon={<FiBarChart className='icon' />} title="Conversion Rate" value={`${conversionRate}%`} />
      </div>
    </section>
  )
}