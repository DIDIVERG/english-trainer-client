

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import DictionaryPage from './pages/DictionaryPage'
import {TrainersPage} from './pages/TrainersPage'
import {VideosPage} from './pages/VideosPage'
import Header from './components/Header'
import { useLocation } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>

          <Routes>
      <Route path="/main"> </Route>
      <Route path="/dictionary" element={<DictionaryPage/>}> </Route>
      <Route path="/trainers" element={<TrainersPage/>}> </Route>
      <Route path="/videos" element={<VideosPage/>}> </Route>
    </Routes>
    </Router>
    </div>
  );
}

export default App;
