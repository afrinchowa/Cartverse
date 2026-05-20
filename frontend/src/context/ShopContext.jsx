import React from 'react'
export const shopDataContext=createContext();
function ShopContext() {
  return (
    <div>
        <shopDataContext.Provider value={{}}>
            <LatestCollection/>
            <BestSeller/>
            <Title/>
        </shopDataContext.Provider> 
    </div>
  )
}

export default ShopContext