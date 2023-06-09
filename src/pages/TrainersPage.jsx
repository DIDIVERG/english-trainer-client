import React, { useState } from 'react';
import '../App.css'
import PreviewCard from "../components/PreviewCard";
export const TrainersPage = () => {
    const trainers = [
        {
            id: 1,
            name: 'John Doe',
            image: 'https://picsum.photos/id/237/200/200',
        },
        {
            id: 2,
            name: 'Jane Doe',
            image: 'https://picsum.photos/id/238/200/200',
        },
        {
            id: 3,
            name: 'Bob Smith',
            image: 'https://picsum.photos/id/239/200/200',
        },
        {
            id: 3,
            name: 'Bob Smith',
            image: 'https://picsum.photos/id/239/200/200',
        },
        {
            id: 3,
            name: 'Bob Smith',
            image: 'https://picsum.photos/id/239/200/200',
        },
        {
            id: 3,
            name: 'Bob Smith',
            image: 'https://picsum.photos/id/239/200/200',
        },
    ];
    return (
        <div className="container">
            <PreviewCard trainers={trainers} />
        </div>

    );
}