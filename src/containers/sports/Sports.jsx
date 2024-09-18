import React from 'react';
import carrom from '../../assets/Carrom_frame.png';
import chess from '../../assets/Chess_frame.png';
import shuttle from '../../assets/Shuttle_frame.png';
import tennis from '../../assets/Tennis_frame.png';
import squash from '../../assets/squash_frame.png';
import sports from '../../assets/Sports_frame.png';
import tt from '../../assets/table_tennis_frame].png';
import './sports.css';

function Sports() {
    return (
        <div className='sports-container'>
            <h1>Avail Your Slots Soon !!!</h1>
            <div className='sports-grid'>
                <div className='image-container central-image'>
                    <img src={sports} alt='Central Sports' className='central-image' />
                </div>
                <div className='image-container top-left'>
                    <img src={squash} alt='Squash' className='surrounding-image' />
                    <div className='overlay'>Squash</div>
                </div>
                <div className='image-container top-right'>
                    <img src={tennis} alt='Tennis' className='surrounding-image' />
                    <div className='overlay'>Tennis</div>
                </div>
                <div className='image-container left'>
                    <img src={shuttle} alt='Shuttle' className='surrounding-image' />
                    <div className='overlay'>Shuttle</div>
                </div>
                <div className='image-container bottom-left'>
                    <img src={chess} alt='Chess' className='surrounding-image' />
                    <div className='overlay'>Chess</div>
                </div>
                <div className='image-container bottom-right'>
                    <img src={carrom} alt='Carrom' className='surrounding-image' />
                    <div className='overlay'>Carrom</div>
                </div>
                <div className='image-container right'>
                    <img src={tt} alt='Table Tennis' className='surrounding-image' />
                    <div className='overlay'>Table Tennis</div>
                </div>
            </div>
        </div>
    );
}

export default Sports;
