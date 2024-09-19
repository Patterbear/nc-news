import { useState, useEffect } from 'react';
import { fetchArticles } from '../../../api';
import ArticleCard from './ArticleCard';
import TopicsBar from './TopicsBar';
import { useParams } from 'react-router-dom';
import SortByDropdown from './SortByDropdown';
import OrderDropdown from './OrderDropdown';

const ArticlesView = () => {
    const [articles, setArticles] = useState([]);
    const [currentTopic, setCurrentTopic] = useState(null);
    const [order, setOrder] = useState(null);
    const [sortedBy, setSortedBy] = useState(null);

    const { topic_slug } = useParams();

    useEffect(() => {
        fetchArticles(currentTopic, sortedBy, order)
            .then((responseArticles) => {
                setArticles(responseArticles);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [currentTopic, order, sortedBy]);

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
            <SortByDropdown setSortedBy={setSortedBy}/>
            <OrderDropdown setOrder={setOrder}/>
            {articles.map((article) => {
                return <ArticleCard article={article} key={article.article_id} />;
            })}
        </section>
    );
};

export default ArticlesView;
