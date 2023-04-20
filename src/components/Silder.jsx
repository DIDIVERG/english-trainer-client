import React, { useState, useRef, useEffect } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import Countdown from 'react-countdown';

const Slider = ({ words }) => {
    const [index, setIndex] = useState(0);
    const [inputValue, setInputValue] = useState('');
    const [results, setResults] = useState([]);
    const timeOutRef = useRef(false);
    const timerStartDateRef = useRef(Date.now());

    useEffect(() => {
        timerStartDateRef.current = Date.now(); // сбросить значение таймера при изменении индекса
    }, [index]);

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleCheckAnswer();
        }
    };

    const handleCheckAnswer = () => {
        const currentWord = words[index].translation.toLowerCase();
        const isCorrect = currentWord === inputValue.toLowerCase();
        const newResults = [...results, { word: currentWord, isCorrect, userAnswer: inputValue }];
        setResults(newResults);
        setInputValue('');
        setIndex(index + 1);
        timeOutRef.current = false;
    };

    const handleNextWord = () => {
        setIndex(index + 1);
        timeOutRef.current = false;
    };

    const handleTimeOut = () => {
        const currentWord = words[index].translation.toLowerCase();
        const newResults = [...results, { word: currentWord, isCorrect: false }];
        setResults(newResults);
        setInputValue('');
        timeOutRef.current = true;
        setIndex(index + 1);
        timerStartDateRef.current = Date.now(); // сбросить значение таймера
    };

    const renderSlide = () => {
        const word = words[index].word;
        return (
            <Card
                className="mx-auto mt-5 p-3 d-flex align-items-center"
                style={{ maxWidth: '700px', width: '75%' }}
            >
                <div className="timer-wrapper">
                    <Countdown
                        date={timerStartDateRef.current + 5000}
                        onComplete={handleTimeOut}
                        key={index}
                        className="timer"
                        renderer={({ completed, total }) => {
                            if (completed) {
                                return <Button variant="danger" disabled={true}>0</Button>;
                            } else {
                                const seconds = Math.ceil((timerStartDateRef.current + 5000 - Date.now()) / 1000);
                                return <Button variant="danger" >{seconds}</Button>;
                            }
                        }}
                    />
                </div>
                <h3>{word}</h3>
                <Form.Control
                    type="text"
                    placeholder="Введите перевод"
                    value={inputValue}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                />
                <Button onClick={handleCheckAnswer} className="mt-3">
                    Отправить
                </Button>
            </Card>
        );
    };
    const renderResults = () => {
        return (
            <Card className="mx-auto mt-5 p-3 results">
                <h3>Результаты</h3>
                <div className="d-flex flex-wrap justify-content-center">
                    {results.map((result, i) => (
                        <Card
                            key={i}
                            className="m-2"
                            bg={result.isCorrect ? 'success' : 'danger'}
                            text="white"
                            style={{ width: '18rem' }}
                        >
                            <Card.Body>
                                <Card.Title>{words[i].word}</Card.Title>
                                <Card.Text>
                                    Правильный ответ: {result.word}
                                </Card.Text>
                                <Card.Text>
                                    Ваш ответ: {result.userAnswer}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    ))}
                </div>
            </Card>
        );
    };



    if (index < words.length) {
        return renderSlide();
    } else {
        return renderResults();
    }
};

export default Slider;
