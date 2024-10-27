import Navbar from "../Navbar/Navbar"
import Detail_product from "./detail_product"
import {products} from "../../data"
import Products from "../accueil/products";
import Footer from "../../footer/footer";


const products_data=products.slice(0,4)
export default function Page_Detail_Product(){
    return( <div className="bg-gray-50">
                <Navbar/>
                <Detail_product/>
                <div className="max-w-[1200px] mx-auto  border-t mt-24">
                    <Products description="Related products" products={products_data}/>
                </div>
                <Footer/>
            </div>

    )
}