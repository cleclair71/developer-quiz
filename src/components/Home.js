import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className='app'>
            <div className='question-section'>
                <div className='question-count'>Welcome to the Quiz App!</div>
                <div className='question-text'>Please select a quiz to begin.</div>
            </div>
            <div className='answer-section'>
            <Link to="/quiz/css"><button>Start CSS Quiz</button></Link>
            <Link to="/quiz/html"><button>Start HTML Quiz</button></Link>
            <Link to="/quiz/js"><button>Start JavaScript Quiz</button></Link>
            <Link to="/quiz/jquery"><button>Start JQuery Quiz</button></Link>
        </div>
        </div>
    );
}