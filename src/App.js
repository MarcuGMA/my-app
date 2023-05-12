import './scss/index.scss';
import {BrowserRouter,Route,Routes} from 'react-router-dom';

import Main from './pages/Main';
import Login from './pages/Login';
import Register from './pages/Register';

// const router = createBrowserRouter([
//   {path: '/', element : <Main/>},
//   {path: '/login', element : <Login/>},
//   {path: '/register', element : <Register/>},
// ]);

function App() {

  return (
    <BrowserRouter>
    <main>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes> 
    </main>
    </BrowserRouter>
  )
  
}

export default App;
