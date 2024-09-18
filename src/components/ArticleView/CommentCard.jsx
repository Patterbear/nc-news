import { useState } from "react";
import { removeCommentById } from "../../../api";

const CommentCard = ({ comment, hasDeleteButton, onCommentDeleted }) => {
    const [deleteButtonPressed, setDeleteButtonPressed] = useState(false);

    function handleDeleteComment() {
        setDeleteButtonPressed(true);
        removeCommentById(comment.comment_id)
        .then(() => {
            onCommentDeleted();
        })
    }

    return (
        <div className="comment-card">
            <p><b>{comment.author}</b>: {comment.body}</p>
            {hasDeleteButton ? (
                <button onClick={handleDeleteComment} disabled={deleteButtonPressed}>Delete</button>
            ) : null}
        </div>
    );
}

export default CommentCard;