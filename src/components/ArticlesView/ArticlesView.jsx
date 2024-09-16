import { useState, useEffect } from "react";
import { fetchArticles } from "../../../api";
import ArticleCard from "./ArticleCard";

const ArticlesView = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        fetchArticles()
        .then((responseArticles) => {
            setArticles(responseArticles);
        })
        .catch((err) => {
            console.log(err);
        });
    }, []);

    return (
        <section>
            {articles.map((article) => {
                return <ArticleCard article={article} key={article.article_id}/>
            })}
        </section>
    );
}

export default ArticlesView;