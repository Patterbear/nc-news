import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Comments from './Comments';
import { fetchArticleById } from "../../../api";
import VotesSection from './VotesSection';
import ErrorPage from "../ErrorPage/ErrorPage";

const ArticleView = () => {
    const { article_id } = useParams();
    const [article, setArticle] = useState({});
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchArticleById(article_id)
        .then((responseArticle) => {
            setArticle(responseArticle);
        })
        .catch((err) => {
            setError(err);
        });
    }, []);

    if(error) {
        return <ErrorPage errorMessage={'Article not found'}/>
    }

    return (
        <article>
            <h1>{article.title}</h1>
            <h2>by {article.author}</h2>
            <img src={article.article_img_url} alt="article image"/>
            <VotesSection article={article}/>
            <p>{article.body}</p>
            <hr/>
            <h3>Comments</h3>
            <Comments article_id={article.article_id}/>
        </article>
    );
}

export default ArticleView;