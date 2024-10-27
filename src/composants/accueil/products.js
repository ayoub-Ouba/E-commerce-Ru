import Product from "./product";
export default function Products(props){
return(<>
    <div className=" max-w-[1200px] mx-auto pb-10 ">
        <h2 className="text-black text-xl font-bold text-center mt-10 pb-10">{props.description}</h2>
        <div className="container grid grid-cols-4 gap-5 max-lg:grid-cols-3 max-xl:gap-2 max-md:grid-cols-2 max-md:gap-5 max-sm:gap-1 mx-auto">
        {props.products.map((p,i)=>{return <Product product={p} key={p.id}/>}
        )}
    
        </div>
    </div>

    </>
    )
}