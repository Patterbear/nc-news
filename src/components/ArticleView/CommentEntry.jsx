import { useState } from 'react';
import { postCommentByArticleId } from '../../../api';

const CommentEntry = ({ article_id, onCommentPosted }) => {
    const [userComment, setUserComment] = useState('');

    function handlePostComment() {
        postCommentByArticleId(article_id, {
            username: 'cooljmessy',
            body: userComment,
        })
        .then(() => {
            setUserComment('');
            onCommentPosted();
        })
        .catch(err => {
            console.error('Failed to post comment:', err);
        });
    }

    return (
        <section>
            <p>Add comment:</p>
            <input
                id="comment-entry"
                value={userComment}
                onChange={(e) => setUserComment(e.target.value)}
            />
            <button onClick={handlePostComment}>Post</button>
        </section>
    );
};

export default CommentEntry;
