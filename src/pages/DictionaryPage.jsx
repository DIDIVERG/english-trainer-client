import React, { useState } from 'react';
import '../App.css';
import  TranslationList  from '../components/TranslationList'

const words = [
    { id: 1, word: 'hank yossss', translation: 'Привет' },
    { id: 2, word: 'Goodbye', translation: 'Пока' },
    { id: 3, word: 'Thank you', translation: 'Спасибо' },
    { id: 3, word: 'Thank you', translation: 'Спасибо' },
    { id: 3, word: 'Thank you', translation: 'Спасибо' },
    { id: 3, word: 'Thank you', translation: 'Спасибо' },
    { id: 3, word: 'Thank you', translation: 'Спасибо' },
    { id: 3, word: 'Thank you', translation: 'Спасибо' },
    { id: 3, word: 'Thank you', translation: 'Спасибо' },
    { id: 3, word: 'Thank you', translation: 'Спасибо' },
    { id: 3, word: 'Thank you', translation: 'Спасибо' },
    { id: 3, word: 'Thank you', translation: 'Спасибо' },
    { id: 3, word: 'Opportunity was ont found but we can addthis ', translation: 'Спасибо' },
    { id: 3, word: 'Thank you', translation: 'Спасибо' },
    { id: 3, word: 'Not at all', translation: 'Спасибо' },
];

const DictionaryPage = () => {
    return (
        <div className="container">
            <TranslationList translations={words} />
        </div>
    );
};

export default DictionaryPage;