

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import DictionaryPage from './pages/DictionaryPage'
import {TrainersPage} from './pages/TrainersPage'
import {VideosPage} from './pages/VideosPage'
import Header from './components/Header'
import { useLocation } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from "./components/Silder";
import SliderWrapper from "./pages/SliderWrapper";
import StartSlide from "./components/StartSlide";
import StartSlidePage from "./pages/StartSlidePage";
function App() {
    const words = [
        { id: 1, word: 'Hello', translation: 'Привет' },
        { id: 2, word: 'Goodbye', translation: 'Пока' },
        { id: 3, word: 'Thank you', translation: 'Спасибо' },
        { id: 4, word: 'water', translation: 'Вода' },
    ];
    const words2 = [
        { id: 1, translation: 'Hello', word: 'Привет' },
        { id: 2, translation: 'Goodbye', word: 'Пока' },
        { id: 3, translation: 'Thank you', word: 'Спасибо' },
    ];


  return (
    <div className="App">
      <Router>
        <Header/>

          <Routes>
      <Route path="/main"> </Route>
      <Route path="/dictionary" element={<DictionaryPage/>}> </Route>
      <Route path="/trainers" element={<TrainersPage/>}> </Route>
      <Route path="/trainers/1" element={<StartSlidePage />}> </Route>
      <Route path="/trainers/1/train" element={<SliderWrapper words={words}/>}> </Route>
      <Route path="/trainers/2" element={<StartSlidePage />}> </Route>
      <Route path="/trainers/2/train" element={<SliderWrapper words={words2}/>}> </Route>
      <Route path="/trainers/3" element={<Slider words={words2}/>}> </Route>
      <Route path="/trainers/4" element={<Slider words={words2}/>}> </Route>
      <Route path="/videos" element={<VideosPage />}> </Route>
    </Routes>
    </Router>
    </div>
  );
}

export default App;
