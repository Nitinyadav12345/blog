import { Route,Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/home/HomePage';
import ArticleDetailPage from './pages/articlesDetail/ArticleDetailPage';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import ProfilePage from './pages/profile/ProfilePage';

function App() {
  return (
    <div className=' font-opensans'>
      <Routes>
        <Route index path='/' element={<HomePage/>}/>
        <Route  path='/blog/:id' element={<ArticleDetailPage/>}/>
        <Route  path='/login' element={<LoginPage/>}/>
        <Route  path='/register' element={<RegisterPage/>}/>
        <Route  path='/profile' element={<ProfilePage/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
