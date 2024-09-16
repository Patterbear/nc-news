import { useParams } from "react-router-dom";
import { useState } from "react";
import api from '../../../api';
import Comments from './Comments';

const ArticleView = () => {
    const { article_id } = useParams();
    const [article, setArticle] = useState({});

    api.get('/articles/' + article_id)
    .then((response) => {
        setArticle(response.data.article);
    })
    .catch((err) => {
        console.log(err);
    });

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