import './App.css'
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import ArticlesView from './components/ArticlesView/ArticlesView';
import ArticleView from './components/ArticleView/ArticleView';
import ErrorPage from './components/ErrorPage/ErrorPage';

function App() {

  return (
    <div>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <ArticlesView />
          }
        />
        <Route
          path="/topic/:topic_slug"
          element={
            <ArticlesView />
          }
        />
        <Route
          path="/article/:article_id"
          element={
            <ArticleView/>
          }
        />
        <Route
          path="*"
          element={
            <ErrorPage errorMessage={'Page not found'}/>
          }
        />
      </Routes>
    </div>
  )
}

export default App
