import React, {useEffect, useState } from 'react';
import './styles/header.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
    return (
            <div className="header container-fluid text-center">
                <span className="brand"> English Trainer </span>
            </div>
    );
}

export { Header };