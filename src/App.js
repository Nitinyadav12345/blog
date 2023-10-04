import { Route,Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/home/HomePage';
import ArticleDetailPage from './pages/articlesDetail/ArticleDetailPage';

function App() {
  return (
    <div className=' font-opensans'>
      <Routes>
        <Route index path='/' element={<HomePage/>}/>
        <Route index path='/blog/:id' element={<ArticleDetailPage/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
