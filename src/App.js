import { InputPage, RepoPage, UserPage } from './pages';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<InputPage />} />
        <Route path='/user/:login' element={<UserPage/>} />
        <Route path='/user/:login/:repo' element={<RepoPage/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
