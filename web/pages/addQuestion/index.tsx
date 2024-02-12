import React, { useState } from "react";
import axios from "axios";
import cookie from "js-cookie";
import styles from "./styles.module.css";
import Header from "../../components/Header/Header";
import Footer from "@/components/Footer/Footer";
import PageTemplate from "@/components/PageTemplate/PageTemplate";
import Link from "next/link";

const AddQuestion = () => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const [errorMessage, setErrorMessage] = useState<string>("");
  const [successMessage, setSuccessMessage] = useState<string>("");

  const addQuestion = async () => {
    setErrorMessage("")
    if (!title || !description ) {
      setErrorMessage("Please fill all the inputs");
      return;
    }

    const headers = {
      authorization: cookie.get("jwt_token"),
    };

    const question = {
      title: title,
      description: description,
    };

    try {
      const response = await axios.post(
        "http://localhost:3001/questions",
        question,
        {
          headers: headers,
        }
      );
      setTitle("")
      setDescription("")
      setSuccessMessage("Success!");

    } catch (err) {
      setErrorMessage("Something went wrong");
      console.log(err);
    }
  };

  return (
    <PageTemplate>
      <div className={styles.form}>
        <input
          placeholder="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          placeholder="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button onClick={addQuestion}>Add question</button>

        {successMessage ? <div>{successMessage} <Link href="/">Go back</Link></div>: ''}
        <h4>{errorMessage}</h4>
      </div>
    </PageTemplate>
  );
};

export default AddQuestion;
