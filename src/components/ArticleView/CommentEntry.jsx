import { useState } from 'react';
import { postCommentByArticleId } from '../../../api';

const CommentEntry = ({ article_id, refreshComments }) => {
    const [userComment, setUserComment] = useState('');

    function handlePostComment() {
        if (userComment.length === 0) {
            document.getElementById('comment-post-error').innerText = 'Comment can not be empty';
            return;
        }

        if(userComment.length > 200) {
            document.getElementById('comment-post-error').innerText = 'Comment must be less than 200 characters';
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
            <p id="comment-post-error" className="error"></p>
            <button onClick={handlePostComment}>Post</button>
        </section>
    );
};

export default CommentEntry;
