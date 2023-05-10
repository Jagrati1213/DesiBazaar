import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Card,Col,Row,Skeleton } from 'antd';

const { Meta } = Card;

function LimitProduct() {

    const [limitProduct, setLimitProduct] = useState(null);

 useEffect(()=>{
    const fetchingData = async()=>{
        try{
            const { data } = await axios.get(`https://fakestoreapi.com/products/category/jewelery`);
            setLimitProduct(data);
            console.log(data);
        }catch(err){
         console.log(err);
        }
         
    }
    fetchingData();
 },[]);
  return (
    <main className='px-4 md:px-10 w-full my-10 site-card-wrapper'>
        <h1 className='w-full text-center font-bold text-3xl text-slate my-10'> Jewelery</h1>
        <Row gutter={{  xs: 8, sm: 16, md: 24, lg: 32 }} justify="space-evenly">

            {
                limitProduct ?(
                        limitProduct.map(i=>{
                            return <Col className="gutter-row" span={5} key={i.id}> 
                                        <Card style={{width: 300, height:'400px', overflow:'hidden', marginBottom:'2rem'}} 
                                            cover={
                                                <div style={{ overflow: "hidden", height: "200px" , width:'100%'}}>
                                                <img
                                                  alt="example"
                                                  style={{width:'100%',objectFit:'contain',height:'100%' }}
                                                  src={i.image}
                                                />
                                              </div>
                                            }>
                                        <Meta title={i.title} description={i.description} />
                                        </Card>
                                    </Col>
                        })
                ):(
                    <Skeleton avatar paragraph={{rows: 4,}}/>
                )
            }
        </Row>

    </main>
  )
}

export default LimitProduct