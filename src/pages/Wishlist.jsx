import React, { useCallback } from "react";
import { Avatar, Card, Col, List, Row } from "antd";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  calculatePrice,
  removeListItem,
  userCartList,
} from "../Store/AuthReducer";
import { CloseCircleFilled } from "@ant-design/icons";
import style from "../style/wishlist.module.scss";

const { Meta } = Card;

function Wishlist() {
  //___Find current user
  const { userDetails } = useSelector((state) => state.user);
  const currentUser = userDetails.find((i) => i.isUser === true);

  //_____ For Calling reducer methods
  const dispatch = useDispatch();

  //_____ Set Product To Bag
  const getItemId = useCallback(
    (id) => {
      /* find out that Id is exit in array if yes then return the element */
      const getItem = currentUser.userWish.find((k) => k.cartItem.id === id);
      dispatch(userCartList(getItem.cartItem));
      dispatch(calculatePrice());
    },
    [dispatch, currentUser?.userWish]
  );

  //_____ Delete wishlist item
  const deleteList = useCallback(
    (itemId) => {
      dispatch(removeListItem(itemId));
    },
    [dispatch]
  );

  return (
    <main className="wishlist">
      <Row
        gutter={[16, 16]}
        justify="space-center"
        className="xl:justify-start justify-center p-4"
      >
        {currentUser?.userWish.length > 0 ? (
          currentUser.userWish.map((ele) => {
            return (
              <Col
                xl={{ span: 5 }}
                md={{ span: 8 }}
                xs={{ span: 24 }}
                key={ele.cartItem?.id}
                className={`${style.wishCart} gutter-row rounded py-4 relative`}
              >
                <span
                  className="text-zinc-400 hover:text-slate absolute right-2 top-0 z-30 text-2xl"
                  onClick={() => deleteList(ele.cartItem?.id)}
                >
                  <CloseCircleFilled />
                </span>
                <Link to={`/product/${ele.cartItem.id}`}>
                  <Card
                    cover={
                      <div>
                        <img alt="item" src={ele.cartItem.image} />
                      </div>
                    }
                  >
                    <Meta
                      title={ele.cartItem.title}
                      description={`₹${Math.ceil(ele.cartItem.price)}`}
                    />
                  </Card>
                </Link>
                <button
                  className="w-full py-4 px-6 text-slate border-t-2 uppercase text-md font-bold"
                  onClick={() => getItemId(ele.cartItem.id)}
                >
                  Add to bag
                </button>
              </Col>
            );
          })
        ) : (
          <div className="p-10 w-[90%] px-10 rounded mx-auto">
            <List
              itemLayout="horizontal"
              dataSource={currentUser?.userWish}
              renderItem={(item) => (
                <List.Item>
                  <List.Item.Meta
                    avatar={<Avatar src={item.cartItem.image} />}
                    title={item.cartItem.title}
                    description={`${Math.ceil(item.cartItem.price)}`}
                  />
                </List.Item>
              )}
            />
          </div>
        )}
      </Row>
    </main>
  );
}

export default Wishlist;
