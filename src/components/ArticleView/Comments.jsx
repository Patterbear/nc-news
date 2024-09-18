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
            {(() => {
                if (comments.length === 0) {
                    return <p>No comments yet.</p>;
                } else {
                    return comments.map((comment) => (
                        <CommentCard comment={comment} key={comment.comment_id} hasDeleteButton={comment.author === 'cooljmessy'} onCommentDeleted={loadComments}/>
                    ));
                }
            })()}
        </section>
    );
};

export default Comments;
