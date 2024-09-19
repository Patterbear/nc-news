import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchTopics } from "../../../api";

const TopicsBar = () => {
    const [topics, setTopics] = useState([]);

    useEffect(() => {
        fetchTopics()
            .then((responseTopics) => {
                setTopics(responseTopics);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div>
            <Link to={"/topic/all"} className="topic-button">all</Link>
            {topics.map((topic, index) => {
                return (
                    <Link key={index} to={`/topic/${topic.slug}`} className="topic-button">{topic.slug}</Link>
                );
            })}
        </div>
    );
};

export default TopicsBar;
