import React, { useState } from 'react'
import {products} from "../../data"
import "../../assets/shop.css"
import { useParams } from 'react-router-dom';
export default function Detail_product() {
    const [amount, setAmount] = useState(1);
    const [size, setsize] = useState("");
    const [color, setcolor] = useState("");
    const {id_produit}=useParams();
    const product=products.find((pr)=>{return pr.id==Number(id_produit)});
    const [activeImg, setActiveImage] = useState(product.image[0])
    return (<div className='container flex flex-col min-[900px]:flex-row gap-5 min-[900px]:pt-40 max-[900px]:my-[11%]   max-w-[1200px] mx-auto '>
                <div className='flex flex-col min-[600px]:flex-row min-[900px]:w-[70%]'>
                    <div className='activ_image'>
                        <img src={activeImg} alt="" />
                    </div>
                    <div className='no_activs_images'>
                        {product.image.map((p, i) => {
                            return <img key={i} src={p} alt=""
                            onClick={() => setActiveImage(p)} />
                        })}
                    </div>
                </div>
                <div className='flex flex-col gap-4 lg:w-2/4 max-lg:h-auto max-[666px]:ml-5 max-[900px]:ml-5'>
                    <div>
                        <span className='text-black font-semibold'>Rufs Stor</span>
                        <h1 className='nom_produit_detail'>{product.nom}</h1>
                        <div className='flex mb-5 '>
                        <h6 className='text-2xl font-semibold mr-2 '>{product.prix_préce} dh</h6>
                        <del className='text-gray-500'>
                            <p className="text-xl text-gray-500 mt-1">{product.prix_novel} dh</p>
                        </del>
                    </div>
                    <div className='mt-2 mb-5'>
                            <h5 className='mb-1'>COLOR : {color}</h5>
                            {product.color.map((c, i) => {
                                return <span className={" border-2 mr-2 px-3 rounded-full cursor-pointer bg-"+c } onClick={() => { setcolor(c) }}></span>
                            })}
                    </div>
                    <div className='mt-2 mb-5'>
                            <h5 className='mb-1'>TAILLE : {size}</h5>
                            {product.size.map((p, i) => {
                                return <span key={i} className={size==p? "bg-black text-white size" : "size"} onClick={() => { setsize(p) }}>{p}</span>
                            })}
                    </div>  
                    <div className='mt-2 mb-3'>
                            <h5 className='mb-1'>QUANTITER:</h5>
                            <div className='flex flex-row items-center gap-10  mb-1 max-[666px]:gap-6 '>
                                <div className='flex flex-row items-center border border-white  '>
                                    <button className='border border-white bg-black py-1 px-5  text-white text-2xl max-[666px]:text-xl rounded-s-2xl' onClick={() => setAmount((prev) => prev - 1)}>-</button>
                                    <span className='border  border-white py-1 px-5 '>{amount}</span>
                                    <button className='border border-white bg-black py-1 px-4  text-white text-2xl max-[666px]:text-xl rounded-e-2xl' onClick={() => setAmount((prev) => prev + 1)}>+</button>
                                </div>
                            
                            </div>
                    </div>    
                </div>
                <button className='bg-black text-white font-semibold py-3 px-5 rounded-lg max-[666px]:px-10 '>Add to Cart</button> 
        </div>
    </div>)
        
    }