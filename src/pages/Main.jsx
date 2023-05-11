import {useState} from 'react';
import { Header } from '../components';
import { ButtonHeader } from '../components/buttons';
import { MySwiper } from '../components/Carousel';

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

    return (
        <>
            <Header 
                toggleLogin={toggleLogin}
                onItemClick={onItemClick}
                setLoggedIn={setLoggedIn} 
                isLoggedIn={isLoggedIn}
                colectionMenuItems={colectionMenuItems123}
            />

            <div className="topElements">
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
        </>
    );
};

export default Main;