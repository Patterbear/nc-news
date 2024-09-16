import './App.css'
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import ArticlesView from './components/ArticlesView/ArticlesView';
import ArticleView from './components/ArticleView/ArticleView';

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
          path="/article/:article_id"
          element={
            <ArticleView/>
          }
        />
      </Routes>
    </div>
  )
}

export default App
