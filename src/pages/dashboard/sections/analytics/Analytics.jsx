import { RevenueChart } from "./charts/RevenueChart"
import { CategoryChart } from "./charts/CategoryChart"
import { PriceChart } from "./charts/PriceChart"    

export const Analytics = ({ products, carts }) => {
   
  return (
    <section className="analytics">
        <h2>Analytics</h2>  
        <div className="analytics-charts">
            <div className="chart-container">
                <h3>Revenue by Month</h3>
                <RevenueChart  products={products} carts={carts}/>    
            </div>
            <div className="chart-container">
                <h3>Products by Category</h3>
                <CategoryChart products={products} />    
            </div>
            <div className="chart-container">
                <h3>Price Distribution</h3>
                <PriceChart products={products} />    
            </div>  
        </div>

    </section>
  )
}