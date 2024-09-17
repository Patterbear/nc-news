import { useState, useEffect } from "react";
import CommentCard from './CommentCard';
import { fetchCommentsByArticleId } from "../../../api";

const Comments = ({ article_id }) => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        if (article_id) {
            fetchCommentsByArticleId(article_id)
                .then((responseComments) => {
                    setComments(responseComments);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    }, [article_id]);

    return (
        <section>
            {(() => {
                if (comments.length === 0) {
                    return <p>No comments yet.</p>;
                } else {
                    return comments.map((comment) => (
                        <CommentCard comment={comment} key={comment.comment_id} />
                    ));
                }
            })()}
        </section>
    );
};

export default Comments;
