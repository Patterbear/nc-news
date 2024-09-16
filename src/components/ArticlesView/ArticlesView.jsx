import { useState } from "react";
import api from "../../../api";
import ArticleCard from "./ArticleCard";

const ArticlesView = () => {
    const [articles, setArticles] = useState([]);

    api.get('/articles?sort_by=comment_count')
    .then((response) => {
        setArticles(response.data.articles);
    })
    .catch((err) => {
        console.log(err);
    });

    return (
        <section>
            {articles.map((article) => {
                return <ArticleCard article={article} key={article.article_id}/>
            })}
        </section>
    );
}

export default ArticlesView;