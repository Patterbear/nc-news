import './App.css'
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import ArticlesView from './components/ArticlesView/ArticlesView';

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
      </Routes>
    </div>
  )
}

export default App
