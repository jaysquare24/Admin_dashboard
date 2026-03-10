import { FiUsers, FiShoppingCart, FiDollarSign, FiBarChart, FiBox } from 'react-icons/fi';
import { StatCards } from './Statcards';

export const Statistics = () => {
  
    return (
    <section className="statistics">
      <h2>Statistics</h2>
      <div className='stat-container'>
            <StatCards icon={<FiUsers  className='icon'/>} title="Total Users" value="1,234" />
            <StatCards icon={<FiBox className='icon' />} title="Total Products" value="567" />
            <StatCards icon={<FiShoppingCart className='icon'/>} title="Total Orders" value="567" />
            <StatCards icon={<FiDollarSign className='icon' />} title="Total Revenue" value="$89,012" />
            <StatCards icon={<FiBarChart className='icon' />} title="Conversion Rate" value="2.5%" />
      </div>
    </section>
  )
}