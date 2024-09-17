import React, { useState, useEffect } from 'react';
import { patchArticleById, fetchArticleById } from '../../../api';

const VotesSection = ({ article }) => {
  const [votes, setVotes] = useState(article.votes);
  const [upVoted, setUpVoted] = useState(false);
  const [downVoted, setDownVoted] = useState(false);

  useEffect(() => {
    if(article.article_id) {
        fetchArticleById(article.article_id).then((fetchedArticle) => {
            setVotes(fetchedArticle.votes);
        }).catch((err) => {
            console.log(err);
        });
    }
  }, [article.article_id]);

  function handleUpVote() {
    if(downVoted) {
        setDownVoted(false);
        setUpVoted(false);
    } else {
        setUpVoted(true);
    }
    
    setVotes((oldVotes) => oldVotes + 1);
    
    patchArticleById(article.article_id, { inc_votes: 1 })
    .catch((err) => {
      setVotes((oldVotes) => oldVotes - 1);
      console.log(err);
    });
  }

  function handleDownVote() {
    if(upVoted) {
        setUpVoted(false);
        setDownVoted(false);
    } else {
        setDownVoted(true);
    }
    setVotes((oldVotes) => oldVotes - 1);
    
    patchArticleById(article.article_id, { inc_votes: -1 })
    .catch((err) => {
      setVotes((oldVotes) => oldVotes + 1);
      console.log(err);
    });
  }

  return (
    <div>
      <h3>{votes} votes</h3>
      <button onClick={handleUpVote} disabled={upVoted}>+</button>
      <button onClick={handleDownVote} disabled={downVoted}>-</button>
    </div>
  );
};

export default VotesSection;
