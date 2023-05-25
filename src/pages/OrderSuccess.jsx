import React from 'react';
import { Result,Steps, Col } from 'antd';
import { useNavigate } from 'react-router-dom';


function OrderSuccess() {

    const navigate = useNavigate();
    const handlerHome =()=>{
          navigate('/');
    }
  return (
    <main className='order'>

        {/* Cart Step */}
        <Col  xs={{span: 24 }} xl={{span: 24}} className='p-8 border-b-2 flex justify-center items-center mb-20'>
            <div className='sm:w-3/5'>
                <Steps size="small"current={2}items={[{title: 'Cart',},{title: 'Payment',},{title: 'Waiting',},]}/>
            </div>
        </Col>
         <Result status="success" title="Successfully Order Placed!" subTitle="we'll get your order soon"
           extra={[ <button key="buy" className='text-whiteSmoke px-6 py-2 rounded bg-slate' onClick={handlerHome}>Buy Again</button>,]}
        />
    </main>
  )
}

export default OrderSuccess