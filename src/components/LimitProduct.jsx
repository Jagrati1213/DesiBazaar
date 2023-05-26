import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Card,Col,Row,Avatar,Skeleton } from 'antd';
import {Link} from 'react-router-dom';
import style from '../style/limitproduct.module.scss';

const { Meta } = Card;

function LimitProduct({baseurl,title}) {

    const [limitProduct, setLimitProduct] = useState(null);
    
    useEffect(()=>{

        let controller = new AbortController();
        
        //____ fetching fakestore products
        const fetchingData = async()=>{
            try{
                const { data } = await axios.get(baseurl);
                setLimitProduct(data);
                controller = null;
            }catch(err){
            console.error(err);
            }
        }
        fetchingData();
        
        // clean up 
        return () => controller?.abort();
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
                                            actions={[<h1>${i.price}</h1>]}>
                                            <Meta title={i.title}/>
                                        </Card>
                                   </Link>
                                 </Col>
                        })
                ):(
                    Array(4).fill(null).map((_,i)=>{
                     return <Col className="gutter-row my-3"  xs={{span: 24, }} lg={{span: 6}} md={{span: 8}} key={i} style={{cursor:'pointer'}}> 

                            <Card key={i}
                            loading={true}
                            cover={
                                <div className={`${style.skeleton_parent}`}>
                                    <Skeleton.Image active={true}/>
                               </div>
                            }>
                            <Skeleton loading={true} avatar active={true}>
                                    <Meta
                                        avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=2" />}
                                        title="Card title"
                                        description="This is the description"/>
                            </Skeleton>
                        </Card>
                    </Col>
                    })
                )
            }
        </Row>

    </main>
  )
}

export default LimitProduct