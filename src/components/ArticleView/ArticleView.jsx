import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Comments from './Comments';
import { fetchArticleById } from "../../../api";

const ArticleView = () => {
    const { article_id } = useParams();
    const [article, setArticle] = useState({});

    useEffect(() => {
        fetchArticleById(article_id)
        .then((responseArticle) => {
            setArticle(responseArticle);
        })
        .catch((err) => {
            console.log(err);
        });
    }, []);

    return (
        <article>
            <h1>{article.title}</h1>
            <h2>by {article.author}</h2>
            <img src={article.article_img_url} alt="article image"/>
            <p>{article.body}</p>
            <hr/>
            <h3>Comments</h3>
            <Comments article_id={article.article_id}/>
        </article>
    );
}

export default ArticleView;