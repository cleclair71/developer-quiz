import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Quiz from './components/Quiz';
import HighScores from './components/HighScores';
import Home from './components/Home';
import { cssQuestions } from './arrays/CSS';
import { htmlQuestions } from './arrays/HTML';
import { jsQuestions } from './arrays/JavaScript';
import { jqQuestions } from './arrays/JQuery';

export default function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/highscores" element={<HighScores />} />
                <Route path="/quiz/css" element={<Quiz questions={cssQuestions} />} />
                <Route path="/quiz/html" element={<Quiz questions={htmlQuestions} />} />
                <Route path="/quiz/js" element={<Quiz questions={jsQuestions} />} />
                <Route path="/quiz/jquery" element={<Quiz questions={jqQuestions} />} />
                <Route path="/" element={<Home />} />
            </Routes>
        </Router>
    );
}