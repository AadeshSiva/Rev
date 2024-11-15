import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Review from './Review';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Review />} />
      </Routes>
    </Router>
  );
}

export default App;
