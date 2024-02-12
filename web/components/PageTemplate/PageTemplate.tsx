import React from "react";
import styles from "./styles.module.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

type PageTemplate = {
  children: React.ReactNode;
};

const PageTemplate = ({ children }: PageTemplate) => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.content}>{children}</div>
      <Footer />
    </div>
  );
};

export default PageTemplate;
