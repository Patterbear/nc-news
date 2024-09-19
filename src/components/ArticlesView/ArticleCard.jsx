import { Link } from "react-router-dom";

const ArticleCard = ({article}) => {
    return (
        <Link to={`/article/${article.article_id}`} className="article-card" aria-label="read article">
            <img src={article.article_img_url} alt="article image"/>
            <div className="article-details">
                <h2><b>{article.title}</b></h2>
                <h3>By {article.author}</h3>
            </div>
            <div>
                <h4>{new Date(article.created_at).toLocaleDateString('en-GB')}</h4>
                <h4>Votes: {article.votes}</h4>
                <h4>Comments: {article.comment_count}</h4>
            </div>
        </Link>
    );
}

export default ArticleCard;