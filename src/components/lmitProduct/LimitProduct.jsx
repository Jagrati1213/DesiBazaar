import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Card,Col,Row } from 'antd';
import {Link} from 'react-router-dom';

const { Meta } = Card;

function LimitProduct({baseurl,title}) {

    const [limitProduct, setLimitProduct] = useState(null);

 useEffect(()=>{
    const fetchingData = async()=>{
        try{
            const { data } = await axios.get(baseurl);
            setLimitProduct(data);
        }catch(err){
         console.log(err);
        }
    }
    fetchingData(); 
 },[]);

  return (
    <main className='p-4 md:p-10 w-full my-10 site-card-wrapper'>
        <h1 className='w-full text-center font-bold text-3xl text-slate my-10'> {title}</h1>
        <Row gutter={{  xs: 8, sm: 16, md: 24, lg: 32 }} justify="space-center">

            {
                limitProduct ?(
                        limitProduct.map(i=>{
                            return <Col className="gutter-row" span={6} key={i.id} style={{cursor:'pointer'}}> 
                                   <Link to={`/product/${i.id}`}>
                                        <Card style={{overflow:'hidden', marginBottom:'2rem'}} 
                                            cover={
                                                <div style={{ overflow: "hidden", height: "250px" , width:'100%'}}>
                                                <img
                                                alt="item"
                                                style={{width:'100%',objectFit:'contain',height:'100%',padding:'12px' }}
                                                src={i.image}
                                                />
                                            </div>
                                            }
                                            actions={[]}
                                            >
                                        <Meta title={i.title} description={`₹${i.price}`}/>
                                        </Card>
                                   </Link>
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

export default LimitProduct