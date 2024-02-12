import { useEffect, useState } from "react";
import cookie from "js-cookie";
import { useRouter } from "next/router";
import axios from "axios";
import Card from "@/components/Card/Card";

import PageTemplate from "@/components/PageTemplate/PageTemplate";
import styles from "../styles/Home.module.css";
import Link from "next/link";

type QuestionType = {
  _id: string;
  description: string;
  title: string;
  likes: number;
  dislikes: number;
};

const Home = () => {
  const router = useRouter();

  const [questions, setQuestions] = useState<QuestionType[]>([]);

  const checkUserToken = () => {
    const token = cookie.get("jwt_token");

    if (!token) {
      router.push("/login");
    }
  };

  const fetchQuestions = async () => {
    const headers = {
      authorization: cookie.get("jwt_token"),
    };

    try {
      const response = await axios.get("http://localhost:3001/questions", {
        headers: headers,
      });
      setQuestions(response.data.questions);
    } catch (err) {
      console.log(err);
      router.push("/login");
    }
  };

  useEffect(() => {
    checkUserToken();
    fetchQuestions();
  }, []);

  return (
    <PageTemplate>
      <>
        <Link href="/addQuestion">
          <h4 className={styles.addTutorial}>Add question</h4>
        </Link>

        <div className={styles.cards}>
          {questions.map((question) => {
            return (
              <Card
                key={question._id}
                _id={question._id}
                likes={question.likes}
                dislikes={question.dislikes}
                description={question.description}
                title={question.title}
              />
            );
          })}
        </div>
      </>
    </PageTemplate>
  );
};

export default Home;
