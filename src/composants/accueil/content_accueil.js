import Slider from "./slider";
import Products from "./products";
import {products} from "../../data";
import Footer from "../../footer/footer";
import Prst_dsgn from "./prst_dsgn";

import "../../assets/content_accueil.css";
export default function Content_accueil(){
  const products_data=products.slice(0,4)
    
return(<div className="bg-gray-50">
            <Slider/>
            <Products description="New Arrivals" products={products_data}/>
            <Prst_dsgn/>
            <Footer/>
        </div>
    )
}