import {useState} from 'react';
import { Header } from '../components';
import { ButtonHeader } from '../components/buttons';
import { MySwiper } from '../components/Carousel';
import React from 'react';

const colectionMenuItems123 = [
    'POPULAR GAMES',
    'TOP DEALS',
    'NEW RELEASE',
    'FREE TO PLAY',
    'COLLECTION',
];

const Main = () => {
    const [isLoggedIn, setLoggedIn] = useState(false);

    const toggleLogin = () => setLoggedIn(!isLoggedIn);

    const onItemClick = () => console.log(`it's a click!!!`);

    const styles = {
        background: `linear-gradient(180deg, rgba(16,25,36,1) 5%, rgba(16,25,36,0.4) 50%, rgba(16,25,36,1) 85%), url(https://images2.alphacoders.com/976/976068.jpg) no-repeat center center `,
        ObjectFit: 'cover',
        backgroundSize: 'cover',
      };

    return (
        <>
            <div className="home-page">  
                <Header 
                    toggleLogin={toggleLogin}
                    onItemClick={onItemClick}
                    setLoggedIn={setLoggedIn} 
                    isLoggedIn={isLoggedIn}
                    colectionMenuItems={colectionMenuItems123}
                />
                <div className="topElements " style={styles}>
                    <img src="/public/media/images/gow.jpg" alt="" />
                    <div className="wrapper">
                        <div className="topGame">
                            <h1>God of War</h1>
                            <p>Free</p>
                            <ButtonHeader/>
                        </div>
                    </div>
                    <MySwiper />
                </div>
                <div className="anth-el"></div>
            </div>
        </>
    );
};

export default Main;