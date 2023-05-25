import React,{ useEffect, useState } from 'react';
import { Steps,Radio, Form, Input } from 'antd';
import Link from 'antd/es/typography/Link';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { clearCartList, userOrderList } from '../Store/AuthReducer';


function Checkout() {

    const [value, setValue] = useState('OCD');
    const onChange = (e) => {setValue(e.target.value)};

    //___ Navigate to success page
    const navigate = useNavigate();

    //___ Calls methods from reducer
    const dispatch = useDispatch();

    //___ get current user
    const { userDetails } = useSelector(state => state.user);
    const currentUser = userDetails.find((i) => i.isUser === true);


    const onFinish = (values) => {        
        currentUser.userCart.map((i)=>{
            dispatch(userOrderList(i));
        });
        dispatch(clearCartList());
        navigate('/success');
    };
    const onFinishFailed = (errorInfo) => {};

    useEffect(()=>{},[dispatch]);

  return (
    <main className='checkout'>
        <div className="process_shop py-10 w-full flex justify-center items-center flex-col">

            <div className='sm:w-3/5 p-8'>
                <Steps size="small"current={1}items={[{title: 'Cart',},{title: 'Payment',},{title: 'Sussess',},]}/>
            </div>

            <div className="heading border-t-2 w-full border-zinc-200">
                <h2 className='text-slate text-3xl text-center font-semibold py-4'>Payment Method</h2>
            </div>

            <Form  name="payment"
                labelCol={{span: 24,}}
                wrapperCol={{span: 24,}}
                style={{maxWidth: 600, width:'100%'}}
                initialValues={{remember: true,}}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                className='my-10'
                >
                <Form.Item label="Name" name="name"
                   rules={[ {required: true,message: 'Please input your name!',},]}>
                   <Input />
                </Form.Item>

                <Form.Item label="Email" name="email"
                   rules={[ {required: true,message: 'Please input your email!',},]}>
                   <Input  type='email'/>
                </Form.Item>

                <Form.Item  label="Address" name="address" 
                    rules={[{required: true,message: 'Please input your address!',},]}>
                    <Input />
                </Form.Item>

                <Form.Item label="Pincode" name="pincode"
                   rules={[ {required: true,message: 'Please input your pincode!',},]}>
                   <Input />
                </Form.Item>

                <Form.Item label="Pay">
                    <Radio.Group onChange={onChange} value={value}>
                        <Radio value={'OCD'}>COD</Radio>
                        <Radio value={'UPI'} disabled={true}>UPI</Radio>
                    </Radio.Group>
                </Form.Item>


                <Form.Item wrapperCol={{ offset: 0,span: 24,}}>
                    <Link to='/success'>
                    <button type="submit"  className='py-2 px-6 bg-slate text-whiteSmoke rounded cursor-pointer hover:bg-black w-full'>
                        Submit
                    </button>
                    </Link>
                </Form.Item>
            </Form>
        </div>

    </main>
  )
}

export default Checkout