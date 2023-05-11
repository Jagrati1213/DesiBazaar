import { Col,Row, } from 'antd';
import React from 'react';



function Cart() {
  return (
    <main className='mt-[90px] p-10 min-h-screen'>
       <Row className='md:w-[80%] w-full mx-auto'>
       <Col span={12} className='p-8 border-r-2'>
          <ul className=' overflow-y-scroll h-5/6'>
             <li className='flex my-10'>
                  <div className='p-4 w-[200px] '>
                       <img src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" alt="product " className='w-full object-cover'/>
                  </div>
                  <div className='p-4'>
                     <h3 className='text-lg text-slate font-bold'>title</h3>
                     <p className='text-base text-gray-600 whitespace-nowrap overflow-hidden text-ellipsis'>description</p>
                     <div className='flex items-center my-6'> 
                         <span className='mx-2 text-gray-400'>Rating :00</span>
                         <span className='mx-2 text-gray-400'>count :00</span>
                     </div>
                  </div>
             </li>
          </ul>
       </Col>
       <Col span={12} className='p-8 flex justify-center'>
            <aside className='rounded'>
                <div class=" bg-zinc-200 border p-6 w-[500px] text-[18px]">

                  <div class="item_total mt-4 overflow-hidden py-2 flex justify-between">
                    <div class="itemtotal-title">Item Total</div>
                    <div class="itemtotal-value">130</div>
                  </div>

                  <div class="delivertotal my-2 overflow-hidden py-2 flex justify-between">
                    <div class="delivertotal-title">Delivery Charge</div>
                    <div class="delivertotal-value">130</div>
                  </div>

                  <div class="total border-t-2 border-black my-4 overflow-hidden py-2 flex justify-between pt-4">
                    <div class="total-title"> Grand Total</div>
                    <div class="total-value">130</div>
                  </div>

                  <div class="checkout w-full bg-slate hover:bg-black text-whiteSmoke py-4 px-8 text-center rounded">
                    <button class="checkout-cta">Order Now</button>
                  </div>

                </div>
            </aside>
       </Col>
       </Row>
        
    </main>
  )
}

export default Cart