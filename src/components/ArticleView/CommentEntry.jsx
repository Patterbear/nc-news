import { useState } from 'react';
import { postCommentByArticleId } from '../../../api';

const CommentEntry = ({ article_id, refreshComments }) => {
    const [userComment, setUserComment] = useState('');
    const [error, setError] = useState(null);

    function handlePostComment() {
        if (userComment.length === 0) {
            document.getElementById('comment-post-error').innerText = 'Comment can not be empty';
            return;
        }

        postCommentByArticleId(article_id, {
            username: 'cooljmessy',
            body: userComment,
        })
        .then(() => {
            document.getElementById('comment-post-error').innerText = '';
            setUserComment('');
            refreshComments();
        })
        .catch(() => {
            document.getElementById('comment-post-error').innerText = 'Comment could not be posted';
        });
    }

    return (
        <section>
            <p>Post comment as cooljmessy:</p>
            <input
                id="comment-entry"
                value={userComment}
                onChange={(e) => setUserComment(e.target.value)}
            />
            <p id="comment-post-error"></p>
            <button onClick={handlePostComment}>Post</button>
        </section>
    );
};

export default CommentEntry;
