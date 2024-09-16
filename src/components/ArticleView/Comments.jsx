import { useState } from "react";
import api from '../../../api';
import CommentCard from './CommentCard';

const Comments = ({article_id}) => {
    const [comments, setComments] = useState([]);

    api.get('/articles/' + article_id + '/comments')
    .then((response) => {
        setComments(response.data.comments);
    })
    .catch((err) => {
        console.log(err);
    });

    return (
        <section>
            {comments.map((comment) => {
                return <CommentCard comment={comment} key={comment.comment_id}/>
            })}
        </section>
    );
}

export default Comments;