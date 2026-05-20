import React from 'react'
import { authDataContext } from './AuthContext';
export const shopDataContext=createContext();
function ShopContext({children}) {
   let [products,setProducts]=useState([]); 
   let {serverUrl}=useContext(authDataContext);
   let currency= "$";
   let delivery_fee=5;
   const getProducts = async()=>{
    try {
        let result = await axios.get(serverUrl + "/api/product/list");
        console.log(result.data);
        setProducts(result.data);
        
    } catch (error) {
        console.error("Error fetching products:", error);
    }
   useEffect(()=>{
     getProducts();
    },[])

   
   
    let value={
        products,
        currency,
        delivery_fee,
        getProducts
    }
  return (
    <div>
        <shopDataContext.Provider value={{value}}>
            <LatestCollection/>
            <BestSeller/>
            <Title/>
            {children}
        </shopDataContext.Provider> 
    </div>
  )
}

export default ShopContext