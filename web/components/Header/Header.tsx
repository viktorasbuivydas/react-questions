import React, { useEffect, useState } from "react";
import cookie from "js-cookie";
import { useRouter } from "next/router";
import styles from "./styles.module.css";

const Header = () => {
  const router = useRouter();

  const [isLogin, setLogin] = useState<boolean>();

  const setLogoutButtonStatus = () => {
    const token = cookie.get("jwt_token");

    setLogin(!!token);
  };

  const logout = () => {
    cookie.remove("jwt_token");
    router.push("/login");
  };

  useEffect(() => {
    setLogoutButtonStatus();
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.logo}>Logo</div>

      {isLogin && (
        <button onClick={logout} className={styles.logout}>
          Logout
        </button>
      )}
    </div>
  );
};

export default Header;
