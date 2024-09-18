import { useState, useEffect } from 'react';
import { fetchArticles, fetchTopics } from '../../../api';
import ArticleCard from './ArticleCard';
import TopicsBar from './TopicsBar';

const ArticlesView = () => {
    const [articles, setArticles] = useState([]);
    const [topics, setTopics] = useState([]);
    const [currentTopic, setcurrentTopic] = useState(null);

    useEffect(() => {
        fetchTopics()
        .then((responseTopics) => {
            setTopics(responseTopics);
        })
        .catch((err) => {
            console.log(err);
        });
    }, []);

    useEffect(() => {
        fetchArticles(currentTopic)
        .then((responseArticles) => {
            setArticles(responseArticles);
        })
        .catch((err) => {
            console.log(err);
        });
    }, [currentTopic]);

    const selectTopic = (topic) => {
        setcurrentTopic(topic);
    };

    return (
        <section>
            <TopicsBar topics={topics} selectTopic={selectTopic} />
            {articles.map((article) => {
                return <ArticleCard article={article} key={article.article_id} />
            })}
        </section>
    );
}

export default ArticlesView;
