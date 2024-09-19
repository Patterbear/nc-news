import { useState, useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { fetchArticles } from '../../../api';
import ArticleCard from './ArticleCard';
import TopicsBar from './TopicsBar';
import SortByDropdown from './SortByDropdown';
import OrderDropdown from './OrderDropdown';
import ErrorPage from '../ErrorPage/ErrorPage';

const ArticlesView = () => {
    const [articles, setArticles] = useState([]);
    const [currentTopic, setCurrentTopic] = useState(null);
    const [error, setError] = useState(null);
    const { topic_slug } = useParams();
    const [searchParams, setSearchParams] = useSearchParams();

    const sort_by = searchParams.get('sort_by') || 'created_at';
    const order = searchParams.get('order') || 'desc';

    useEffect(() => {
        fetchArticles(currentTopic, sort_by, order)
            .then((responseArticles) => {
                setArticles(responseArticles);
            })
            .catch((err) => {
                setError(err);
            });
    }, [currentTopic, sort_by, order]);

    useEffect(() => {
        if (topic_slug && topic_slug !== 'all') {
            setCurrentTopic(topic_slug);
        } else {
            setCurrentTopic(null);
        }
    }, [topic_slug]);

    const handleSelectSortBy = (newSortBy) => {
        setSearchParams({ sort_by: newSortBy, order });
    };

    const handleSelectOrder = (newOrder) => {
        setSearchParams({ sort_by, order: newOrder });
    };

    if (error) {
        return <ErrorPage errorMessage={'Topic does not exist'} />;
    }

    return (
        <section>
            <div id="filter-section">
                <TopicsBar id="topics-bar"/>
                <div id="dropdown-section">
                    <SortByDropdown handleSelectSortBy={handleSelectSortBy} />
                    <OrderDropdown handleSelectOrder={handleSelectOrder} />
                </div>
            </div>
            {articles.map((article) => (
                <ArticleCard article={article} key={article.article_id} />
            ))}
        </section>
    );
};

export default ArticlesView;
