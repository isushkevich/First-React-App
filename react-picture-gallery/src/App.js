import React from 'react';
import backgroundImg from './img/background_tile.png';
import galleryImg01 from './img/01.jpg';
import galleryImg02 from './img/02.jpg';
import galleryImg03 from './img/03.jpg';
import galleryImg04 from './img/04.jpg';
import galleryImg05 from './img/05.jpg';
import galleryImg06 from './img/06.jpg';
import galleryImg07 from './img/07.jpg';

import './App.css';

function App() {
    return (
        <div className="container">
            <div className="centered_block">
                <h2 className="main_title">Picture Gallery</h2>
            </div>
            <div class="slider">
                <div className="slide">
                    <img src={galleryImg01} />
                </div>
                <div className="slide">
                    <img src={galleryImg02} />
                </div>
                <div className="slide">
                    <img src={galleryImg03} />
                </div>
                <div className="slide">
                    <img src={galleryImg04} />
                </div>
                <div className="slide">
                    <img src={galleryImg05} />
                </div>
                <div className="slide">
                    <img src={galleryImg06} />
                </div>
                <div className="slide">
                    <img src={galleryImg07} />
                </div>
            </div>
        </div>
    );
}

export default App;
