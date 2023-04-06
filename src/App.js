

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Sidebar from "./components/Sidebar";
import './App.css';
import {DictionaryPage} from './pages/DictionaryPage'
import {TrainersPage} from './pages/TrainersPage'
import {VideosPage} from './pages/VideosPage'

function App() {
  return (
    <div className="App">
      <Router>
        <div className="container">
        <Sidebar></Sidebar>
    <Routes>
      <Route path="/" > </Route>
      <Route path="/dictionary" element={<DictionaryPage/>}> </Route>
      <Route path="/trainers" element={<TrainersPage/>}> </Route>
      <Route path="/videos" element={<VideosPage/>}> </Route>
    </Routes>
        </div>
    </Router>
    </div>
  );
}

export default App;
