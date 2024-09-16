import { useState, useEffect } from "react";
import CommentCard from './CommentCard';
import { fetchCommentsByArticleId } from "../../../api";

const Comments = ({article_id}) => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        if(article_id) {
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
            {comments.map((comment) => {
                return <CommentCard comment={comment} key={comment.comment_id}/>
            })}
        </section>
    );
}

export default Comments;