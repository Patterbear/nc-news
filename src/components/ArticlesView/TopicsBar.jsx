const TopicsBar = ({ topics, selectTopic }) => {
    return (
        <div>
            <button onClick={() => selectTopic()}>all</button>
            {topics.map((topic, index) => {
                return (
                    <button key={index} onClick={() => selectTopic(topic.slug)}>{topic.slug}</button>
                );
            })}
        </div>
    );
};

export default TopicsBar;
