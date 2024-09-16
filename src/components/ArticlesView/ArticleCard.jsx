const ArticleCard = ({article}) => {
    return (
        <article className="article-card" aria-label="read article">
            <img src={article.article_img_url} alt="article image"/>
            <div className="article-details">
                <h2><b>{article.title}</b></h2>
                <h3>By {article.author}</h3>
            </div>
            <h3>Comments: {article.comment_count}</h3>
        </article>
    );
}

export default ArticleCard;