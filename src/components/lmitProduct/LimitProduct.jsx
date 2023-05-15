import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Card,Col,Row,Spin } from 'antd';
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
    <main className='p-4 md:p-10 w-full py-10 site-card-wrapper'>
        <h1 className='w-full text-center font-bold text-3xl text-slate uppercase my-10 py-4'> {title}</h1>
        <Row gutter={{ xs: 8, sm: 16, lg: 17 }} justify="space-center">

            {
                limitProduct ?(
                        limitProduct.map(i=>{
                            return <Col className="gutter-row"  xs={{span: 24, }} lg={{span: 6}} md={{span: 8}} key={i.id} style={{cursor:'pointer'}}> 
                                   <Link to={`/product/${i.id}`}>
                                        <Card style={{overflow:'hidden', marginBottom:'2rem',textAlign:'center'}} 
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
                                        <Meta title={i.title} description={`₹${Math.ceil(i.price)}`}/>
                                        </Card>
                                   </Link>
                                 </Col>
                        })
                ):(
                    <div className='w-full p-10 flex justify-center items-center'>
                            <Spin  size="large">
                                 <div className="content" />
                            </Spin>
                    </div>
                )
            }
        </Row>

    </main>
  )
}

export default LimitProduct