import { useState, useEffect } from 'react';
import CommentCard from './CommentCard';
import { fetchCommentsByArticleId } from '../../../api';
import CommentEntry from './CommentEntry';

const Comments = ({ article_id }) => {
    const [comments, setComments] = useState([]);

    const loadComments = () => {
        if (article_id) {
            fetchCommentsByArticleId(article_id)
                .then((responseComments) => {
                    setComments(responseComments);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    };

    useEffect(() => {
        loadComments();
    }, [article_id]);

    return (
        <section>
            <CommentEntry article_id={article_id} onCommentPosted={loadComments} />
            {comments.length === 0 ? (
                <p>No comments yet.</p>
            ) : (
                comments.map((comment) => (
                    <CommentCard comment={comment} key={comment.comment_id} />
                ))
            )}
        </section>
    );
};

export default Comments;
