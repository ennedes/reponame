import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './styles/App.css';
import LandingPage from './routes/LandingPage/LandingPage';
import AddMovie from './routes/AddMovie/AddMovie';
import AddActor from './routes/AddActor/AddActor';

function App() {
  return (
    <div className="App">
      <header className="App-header">

      </header>

        <BrowserRouter>
          <Routes>
            <Route path='/' element={<LandingPage />}></Route>
          </Routes>

          <Routes>
            <Route path='/addmovie' element={<AddMovie />}></Route>
          </Routes>

          <Routes>
            <Route path='/addactor' element={<AddActor />}></Route>
          </Routes>
        </BrowserRouter>

    </div>
  );
}

export default App;
