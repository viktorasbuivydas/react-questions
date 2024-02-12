import React, { useEffect, useState } from "react";
import axios from "axios";
import cookie from "js-cookie";
import styles from "./styles.module.css";
import { useRouter } from "next/router";
import PageTemplate from "@/components/PageTemplate/PageTemplate";

const Login = () => {
  const router = useRouter();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const onClickButton = async () => {
    if (!email || !password) {
      console.log("please fill all the fields");

      return;
    }

    try {
      const data = {
        email: email,
        password: password,
      };

      const response = await axios.post(
        "http://localhost:3001/users/login",
        data
      );

      if (response.status === 200) {
        cookie.set("jwt_token", response.data.jwt);
        router.push("/");
      }
    } catch (err) {
      console.log(err);
    }
  };

  // useEffect(() => {
  //   const jwt = cookie.get("jwt_token");
  //   if (jwt) {
  //     router.push("/");
  //   }
  // }, []);

  return (
    <PageTemplate>
      <div>
        <div className={styles.form}>
          <h1>Login</h1>
          <input
            placeholder="email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
          <input
            placeholder="password"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
          <button onClick={onClickButton}>Login</button>
        </div>
      </div>
    </PageTemplate>
  );
};

export default Login;
