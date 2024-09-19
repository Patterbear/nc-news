import { Link } from "react-router-dom";

const TopicsBar = ({ topics }) => {
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
