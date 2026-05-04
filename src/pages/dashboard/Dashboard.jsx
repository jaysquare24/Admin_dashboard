import { Statistics } from "./sections/statistics/Statistics"
import { Analytics } from "./sections/analytics/Analytics"
import { getProducts } from "../../services/productService";
import { getCarts } from "../../services/cartServices";
import {getUsers} from "../../services/userService";
import { useEffect, useState } from "react" ;
import { Loader } from "../../components/common/Loader";
import { ErrorState } from "../../components/common/ErrorState";
export const Dashboard = () => {
    const [products, setProducts] = useState([]);
    const [users, setUsers] = useState([]);
    const [carts, setCarts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect( ()=> {
        const fetchProducts = async () => {
            try {
                const data = await getProducts();
                setProducts(data);
                if(data.length > 0){
                    setLoading(false);  
                }
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };
        const fetchUsers = async () => {
            try {
              const data = await getUsers();
             setUsers(data);
            } catch (err) {
            setError(err.message);
            setLoading(false);
          }
        };
        const fetchCarts = async () => {
            try {
                const data = await getCarts();
                setCarts(data);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };
        fetchCarts();
        fetchUsers();
       fetchProducts();
    }, []);

    if(loading){
        return <Loader fullScreen={true} />
    }

    if(error){
        return <ErrorState message={error}
         onRetry={()=>window.location.reload()} />
        
    }

  return (
    <div className="dashboard">
      <Statistics products={products}  users={users} carts={carts}/>
      <Analytics  products={products} carts={carts} />

    </div>
    )   
}