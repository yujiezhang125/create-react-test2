import logo from './logo.svg';
import './App.css';
// import route
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import LogInPage from './pages/LogIn'

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LogInPage />} />
          <Route path="login" element={<LogInPage />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
