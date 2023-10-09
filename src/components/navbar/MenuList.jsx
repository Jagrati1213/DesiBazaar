import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import { Avatar, Badge, Button, Space } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../firebase";
import {
  UserOutlined,
  HeartOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { Dropdown } from "antd";
import { sigOut, setUser, removeToLocal } from "../../Store/AuthReducer";
import { signUp } from "../../Store/helpers/signUp";
import { signOut } from "../../Store/helpers/signOut";

function MenuList({ navbarOpen }) {
  //____ Get the current user
  const { userDetails } = useSelector((state) => state.user);
  //   const currentUser = userDetails.find((i) => i.isUser === true);
  //____ Set the quantity as header
  const [count, setCount] = useState(0);
  const [wish, setWish] = useState(0);
  let bagCount = 0;

  //____ Get user's details
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleSignIn = () => {
    dispatch(signUp());
    dispatch(removeToLocal());
  };

  const handleSignOut = () => {
    dispatch(signOut());
  };

  const onClick = ({ key }) => {
    // handleSignOut();
  };
  const items = [
    {
      label: (
        <Space align="center">
          <Avatar
            size="large"
            src={currentUser?.photoURL}
            alt="avatar"
            icon={<UserOutlined />}
            className="leading-none"
          />
          <Space direction="vertical" className="leading-none">
            <p className="text-amber-950 font-semibold">
              {currentUser?.displayName}
            </p>
            <small className="text-slate"> {currentUser?.email}</small>
          </Space>
        </Space>
      ),
      key: "1",
    },
    {
      type: "divider",
    },
    {
      label: <p>Orders </p>,
      key: "2",
    },
    {
      type: "divider",
    },
    {
      label: (
        <p className="text-gray-400 hover:text-slate" onClick={handleSignOut}>
          Log Out
        </p>
      ),
      key: "3",
    },
  ];
  const signUpItems = [
    {
      label: (
        <Space direction="vertical">
          <p className="text-xs p-3">
            <b>Welcome</b>, <br />
            To access account and manage orders
          </p>
          <Button className="text-slate" onClick={handleSignIn}>
            Login/SignUp
          </Button>
        </Space>
      ),
      key: "1",
    },
  ];
  return (
    <>
      <div
        className={`hidden w-full md:block md:w-auto z-50 menu${
          navbarOpen ? " show-menu" : ""
        } `}
      >
        <ul className="flex flex-col p-4 md:p-0 bg-gray-50 md:flex-row md:space-x-8 md:bg-white text-slate font-semibold hover:text-black text-lg  items-center">
          <Space>
            <li>
              <Link
                to="/"
                className="block py-4 px-3 text-slate hover:text-black md:p-0 text-sm"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/product"
                className="block py-4 px-3 text-slate hover:text-black md:p-0 text-sm"
              >
                Product
              </Link>
            </li>
          </Space>

          <li className="md:my-0 my-4 ">
            {currentUser ? (
              <Dropdown
                menu={{
                  items,
                  onClick,
                }}
                placement="bottom"
              >
                <Space direction="vertical">
                  <IconContext.Provider value={{ size: "26px" }}>
                    <UserOutlined className="block text-slate text-xl" />
                    <small>profile</small>
                  </IconContext.Provider>
                </Space>
              </Dropdown>
            ) : (
              <Dropdown
                menu={{
                  items: signUpItems,
                  onClick,
                }}
                placement="bottom"
              >
                <Space direction="vertical">
                  <IconContext.Provider value={{ size: "26px" }}>
                    <UserOutlined className="block text-slate text-xl" />
                    <small>profile</small>
                  </IconContext.Provider>
                </Space>
              </Dropdown>
            )}
          </li>
          <li className="md:my-0 my-4">
            <Badge count={count} showZero className="block text-slate">
              <IconContext.Provider value={{ size: "26px" }}>
                <Link to="/wishlist">
                  <Space direction="vertical">
                    <HeartOutlined className="block text-slate text-xl" />
                    <small>profile</small>
                  </Space>
                </Link>
              </IconContext.Provider>
            </Badge>
          </li>
          <li className="md:my-0 my-4">
            <Badge count={count} showZero className="block text-slate">
              <IconContext.Provider value={{ size: "26px" }}>
                <Link to="/cart">
                  <Space direction="vertical">
                    <ShoppingCartOutlined className="block text-slate text-xl" />
                    <small>profile</small>
                  </Space>
                </Link>
              </IconContext.Provider>
            </Badge>
          </li>
        </ul>
      </div>
    </>
  );
}

export default MenuList;
