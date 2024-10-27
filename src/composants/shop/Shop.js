import Pagination from "./pagination";
import Product from "../accueil/product";
import { products } from "../../data";
import { useState ,useEffect } from 'react';
import Navbar from "../Navbar/Navbar";
import Footer from "../../footer/footer";
export default function Shop() {
    const [currentPage, setCurrentPage] = useState();
   const nbrPages = Math.ceil(products.length/12);
   useEffect(() => {
      setCurrentPage(1);
    }, []);
   function handlePageChange(newPage) {
      setCurrentPage(newPage);
    }
   const begin = (currentPage-1)*12;
   const end = currentPage * 12;
   console.log(products.length);
   return <div className="bg-gray-50">
            <Navbar/>
            <div>
        
                <div className="container pt-24 max-w-[1300px] grid max-[350px]:grid-cols-1 min-[351px]:grid-cols-2 min-[351px]:gap-1 min-[550px]:grid-cols-3 min-[550px]:gap-1 min-[1024px]:grid-cols-4 
                    min-[1024px]:gap-1 xl:grid-cols-4 xl:gap-3 mx-auto mb-10">
                    {products.slice(begin,end).map((p,i)=>{return <Product key={i} product={p}/>})}
                </div>
            </div>

            <div>
                <Pagination totalPages={nbrPages} onPageChange={handlePageChange} currentPage={currentPage} />
            </div>
            <Footer/>
</div>
}