const CommentCard = ({comment}) => {
    return (
        <div className="comment-card">
            <p><b>{comment.author}</b>: {comment.body}</p>
        </div>
    );
}

export default CommentCard;