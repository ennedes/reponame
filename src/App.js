import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './styles/App.css';
import LandingPage from './routes/landing-page/landing-page';
import NewMoviePage from './routes/movie/new-movie-page';
import NewActorPage from './routes/actor/new-actor-page';

function App() {
  return (
    <div className="App">

        <BrowserRouter>

          <Routes>
            <Route path='/' element={<LandingPage />}></Route>
            <Route path='/movies/new' element={<NewMoviePage />}></Route>
            <Route path='/actors/new' element={<NewActorPage />}></Route>
          </Routes>

        </BrowserRouter>

    </div>
  );
}

export default App;
