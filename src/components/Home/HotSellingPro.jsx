import React,{ useState } from 'react'
import Data from '../../SliderImages/Data';


export default function HotSellingPro({producctItems}) {
  const [data] = useState(Data.productItems);
  return (
    <div>
    <section class="text-gray-600 body-font">
      <div class="first-letter:container px-5  mx-auto">
        <div class="  flex flex-wrap -m-4">
  
        {data.map((product) => {
          return (
            <div class="lg:w-1/4 md:w-1/2 md:p-2 p-4 w-full">
     
            <div className="  product mtop ">
            <div className="overflow-hidden  "   key={product.id}>
              <div className=" border-b-2  border-orange">
                <img src={product.cover} alt="" />
                <div className="product-like">
                  <i className="fa-regular fa-heart"></i>
                </div>
              </div>
              <div className="product-details  ">
                <h3 className="underline " >{product.name}</h3>
                <div className="rate">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
                <div className="price font-semibold ">
                  <h4>RS {product.price}</h4>
                </div>
                <div className="flex mt-3 text-sm  ">
                <div className="pr-6 ">
                  <p>bids: {product.bids}</p>
                </div>
                <div >
                  <p>time-left: {product.time}</p>
                </div>
                </div>
                
              </div>
            </div>
            </div>
     
     </div>
          );
        })}
  
 
       
      </div>
    </div>
  </section></div>
  )
}