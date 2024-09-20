import { useState, useEffect } from 'react';
import CommentCard from './CommentCard';
import { fetchCommentsByArticleId } from '../../../api';
import CommentEntry from './CommentEntry';
import LoadingImage from '../../assets/loading.gif';

const Comments = ({ article_id }) => {
    const [comments, setComments] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);

    const refreshComments = () => {
        if (article_id) {
            fetchCommentsByArticleId(article_id)
                .then((responseComments) => {
                    setComments(responseComments);
                    setIsLoading(false);

                })
                .catch((err) => {
                    setError(err);
                });
        }
    };

    useEffect(() => {
        refreshComments();
    }, [article_id]);

    if(isLoading) {
        return <img src={LoadingImage}/>
    }

    if(error) {
        return <p className="error">Failed to load comments</p>
    }

    return (
        <div>
            <CommentEntry article_id={article_id} refreshComments={refreshComments} id="comment-entry" />
            <section id="comments">
                {(() => {
                    if (comments.length === 0) {
                        return <p>No comments yet.</p>;
                    } else {
                        return comments.map((comment) => (
                            <CommentCard comment={comment} key={comment.comment_id} hasDeleteButton={comment.author === 'cooljmessy'} refreshComments={refreshComments}/>
                        ));
                    }
                })()}
            </section>
        </div>
    );
};

export default Comments;
