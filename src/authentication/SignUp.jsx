import React, { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { sigIn } from "../Store/AuthReducer";
import { Input } from "antd";
import { toast } from "react-hot-toast";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

function SignIn() {
  //_____ Make userObject
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    email: "",
  });

  //_____ Get userDetails methods from reducer
  const dispatch = useDispatch();

  // _____ Set the input values to data
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    // Validation logic
    let error = "";
    if (name === "username") {
      // Check if name contains numbers
      if (/\d/.test(value)) {
        error = "Name cannot contain numbers";
      }
    }
    if (name === "email") {
      // Simple email format validation
      if (!/\S+@\S+\.\S+/.test(value)) {
        error = "Invalid email address.";
      }
    }
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error,
    }));
  };

  //_____ Store User Details
  const handlerSubmit = useCallback(
    async (event) => {
      event.preventDefault();
      const { username, email, password } = data;

      // Validation check before submission
      if (errors.name || errors.email) {
        return;
      }
      if (username === "" || email === "" || password === "") {
        return toast.error("fill all fields");
      } else {
        try {
          const userCredential = await createUserWithEmailAndPassword(
            auth,
            email,
            password
          );
          const user = userCredential.user;
          console.log(user);
        } catch (error) {
          console.log(error);
        }

        //  dispatch(
        //  sigIn({
        //     name: username.trim(),
        //     email: email.trim(),
        //     password: password.trim(),
        //   })
        // );
      }
      setData({
        username: "",
        email: "",
        password: "",
      });
    },
    [dispatch, errors, data]
  );

  return <></>;
}

export default SignIn;
