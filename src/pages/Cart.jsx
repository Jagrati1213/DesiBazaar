import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { Avatar, Col,List, Steps, Row, Table, Image, Card, Button } from 'antd';
import { DeleteFilled,PlusCircleOutlined,MinusCircleOutlined } from "@ant-design/icons";
import { userDecrementItems, calculatePrice, userIncrementItems, removeCartItem } from '../Store/AuthReducer';
import style from '../style/cart.module.scss';


function Cart() {

  //____ Get current User
  const { userDetails } = useSelector(state => state.user);
  const currentUser = userDetails.find((i) => i.isUser === true);

  //_____ Get Methods Reducre 
  const dispatch = useDispatch();

  //____ Decrement the Items
  const decrement = useCallback((itemId) =>{
        dispatch(userDecrementItems(itemId))
        dispatch(calculatePrice());
  },[dispatch]);

  //_____ Increment the Items 
  const increment = useCallback((itemId) =>{
        dispatch(userIncrementItems(itemId));
        dispatch(calculatePrice());
  },[dispatch]);

  //____Delete item
  const deletItem = useCallback((itemId)=>{
        dispatch(removeCartItem(itemId));
        dispatch(calculatePrice());
  },[dispatch]);


  const dataSource = currentUser?.userCart.map((ele) => {
    return {
      img: ( <Image src={ele.cartItem?.image} alt="img"className="priviewImg" style={{ width: "50px", height: "50px" }}/>),
      poduct: `${ele.cartItem?.title}`,
      price: `${Math.ceil(ele.cartItem?.price)}`,
      quantity:<>
              <span className='text-xl text-slate md:ml-3 cursor-pointer' onClick={()=>decrement(ele.cartItem?.id)}><MinusCircleOutlined /></span>
              <span className='text-semibold'> {ele.quantity} </span>
              <span className='text-xl text-slate md:mr-3 cursor-pointer' onClick={()=>increment(ele.cartItem?.id)}><PlusCircleOutlined /></span> 
              </>,
      dump: <DeleteFilled   onClick={()=>deletItem(ele.cartItem?.id)} className='text-slate cursor-pointer text-lg text-center'/>,
      key: `${ele.cartItem.id}`
    };
  });

  const columns = [
    { title: "Image",dataIndex: "img",key: "img",},
    { title: "Product", dataIndex: "poduct",key: "poduct",},
    { title: "Price", dataIndex: "price", key: "price",},
    { title: "Quantitiy", dataIndex: "quantity", key: "quantity",},
    { title: "Delete ",dataIndex: "dump",key: "dump",},
  ];


  return (
    <main className='cart'>
      <Row className='w-full lg:flex-row flex-col justify-center' gutter={[16,16]}>
        { currentUser?.userCart.length > 0?
        (
          <>
             {/* Cart Step */}
             <Col  xs={{span: 24 }} xl={{span: 24}} className='md:p-8 p-3 flex justify-center items-center mb-10 ml-2'>
                <div className='w-[90%]'>
                    <Steps size="small"current={0}items={[{title: 'Cart',},{title: 'Payment',},{title: 'Sussess',},]}/>
                </div>
             </Col>  
            
            {/* Cart items */}
            <Col xl={{span:15}} sm={{span:24}} className='md:mr-0 mr-4 ml-4 overflow-x-auto'>
              <Table 
                    dataSource={dataSource} 
                    columns={columns} 
                    pagination={false} 
                    scroll={{
                      x:440,
                      y: 440,
                    }}
                    className={`${style.table}` }/>
            </Col>

            {/* Cart total */}
            <Col xl={{span:8}} sm={{span:24}} className='ml-4'>
              <Card title="Cart totals"
                bordered={false}
                style={{ width: "100%" }}
                className="text-center">
                  <div>
                    <Row>
                      <Col span={12}><h1>SubTotal</h1></Col>
                      <Col span={12}><h1>₹{currentUser.subTotal}</h1></Col>
                    </Row>
                    <br/>
                    <Row>
                      <Col span={12}><h1>Dilevery</h1></Col>
                      <Col span={12}><h1>₹ {currentUser.delivery}</h1></Col>
                    </Row>
                    <br /><hr />

                    <Row className="mt-1">
                      <Col span={12}><h1>total</h1></Col>
                      <Col span={12}><h1>₹{currentUser.total}</h1></Col>
                    </Row>

                    <Link to="/checkout">
                      <Button className="mt-3 w-full p-0 btn bg-slate text-whiteSmoke">
                        <h3>Checkout</h3>
                      </Button>
                    </Link>
                  </div>
              </Card>
            </Col>
          </>
        ):
        (
        <div className='p-10 w-[90%] px-10 rounded mx-auto'>
            <List
                itemLayout="horizontal"
                dataSource={currentUser?.userCart}
                renderItem={(item)=>
                    (
                    <List.Item key={item.cartItem.id}>
                        <List.Item.Meta
                            avatar={<Avatar src={item.cartItem.image} />}
                            title={item.cartItem.title}
                            description={`${Math.ceil(item.cartItem.price)}`}
                        />
                    </List.Item>
                )}/> 
        </div>
        )
      }
      </Row>
        
    </main>
  )
}

export default Cart