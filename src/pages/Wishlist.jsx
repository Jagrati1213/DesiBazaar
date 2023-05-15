import React from 'react';
import { Card,Col,Row } from 'antd';
import {Link} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addItems, calculatePrice } from '../reduxStore/Reducer';

const { Meta } = Card;

function Wishlist() {

    const {listArr} = useSelector((state)=> state.product);

    //_____ For Calling AddToCart 
    const dispatch = useDispatch();

    //_____ Set Product To Bag 
     const getItemId = (id)=>{
      listArr.map((i)=>{
        /* find out that Id is exit in array 
        if yes then return the element */
        const getItem = listArr.find((k)=> k.item.id === id);
        if(getItem){
            dispatch(addItems(i.item));
            dispatch(calculatePrice());
        }
      })
     }


  return (
    <main className='mt-[90px] w-full min-h-screen p-10 overflow-hidden'>
        <Row gutter={{ xs: 8, sm: 16, lg: 18 }} justify="space-center" className='w-100 gap-6'>

            {
                listArr.length ?(
                    listArr.map((i)=>{
                        return <Col className="gutter-row bg-white rounded py-4 border-2" 
                                    xs={{span: 24, }} lg={{span: 6}} md={{span: 8}} 
                                    key={i.item.id} style={{cursor:'pointer'}}> 

                                <Link to={`/product/${i.item.id}`}>
                                        <Card style={{overflow:'hidden', marginBottom:'2rem', textAlign:'center', boxShadow:'none', border:'none'}} 
                                            cover={
                                                <div style={{ overflow: "hidden", height: "250px" , width:'100%'}}>
                                                <img
                                                alt="item"
                                                style={{width:'100%',objectFit:'contain',height:'100%',padding:'12px' }}
                                                src={i.item.image}
                                                />
                                            </div>
                                            }>
                                        <Meta title={i.item.title} description={`₹${Math.ceil(i.item.price)}`}/>
                                        </Card>
                                   </Link>
                                   <button className='w-full py-4 px-6 text-slate border-t-2 uppercase text-md font-bold' onClick={()=> getItemId(i.item.id)}>move to bag</button>
                                 </Col>
                        })
                ):(
                  <h1>Somthing error</h1>                    
                )
            }
        </Row>
    </main>
  )
}

export default Wishlist;