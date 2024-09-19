import { useState, useEffect } from 'react';
import { fetchArticles } from '../../../api';
import ArticleCard from './ArticleCard';
import TopicsBar from './TopicsBar';
import { useParams } from 'react-router-dom';

const ArticlesView = () => {
    const [articles, setArticles] = useState([]);
    const [currentTopic, setCurrentTopic] = useState(null);

    const { topic_slug } = useParams();

    useEffect(() => {
        fetchArticles(currentTopic)
            .then((responseArticles) => {
                setArticles(responseArticles);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [currentTopic]);

    useEffect(() => {
        if(topic_slug !== null && topic_slug !== 'all') {
            setCurrentTopic(topic_slug);
        } else {
            setCurrentTopic(null);
        }
    }, [topic_slug]);

    return (
        <section>
            <TopicsBar />
            {articles.map((article) => {
                return <ArticleCard article={article} key={article.article_id} />;
            })}
        </section>
    );
};

export default ArticlesView;
