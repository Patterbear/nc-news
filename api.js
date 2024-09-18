import axios from "axios";

const api = axios.create({
    baseURL: "https://nc-news-ch8f.onrender.com/api"
});

export const fetchArticles = () => {
    return api.get('/articles')
        .then((response) => {
            return response.data.articles;
        });
}

export const fetchArticleById = (article_id) => {
    return api.get('/articles/' + article_id)
        .then((response) => {
            return response.data.article;
        });
}

export const fetchCommentsByArticleId = (article_id) => {
    return api.get('/articles/' + article_id + '/comments')
        .then((response) => {
            return response.data.comments;
        });
}

export const patchArticleById = (article_id, articleUpdate) => {
    return api.patch('/articles/' + article_id, articleUpdate);
};

export const postCommentByArticleId = (article_id, comment) => {
    return api.post('/articles/' + article_id + '/comments', comment);
}

export const removeCommentById = (comment_id) => {
    return api.delete('/comments/' + comment_id);
}
