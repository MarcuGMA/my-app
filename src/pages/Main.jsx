import {useState} from 'react';
import { Header } from '../components';

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
        <Header 
            toggleLogin={toggleLogin}
            onItemClick={onItemClick}
            setLoggedIn={setLoggedIn} 
            isLoggedIn={isLoggedIn}
            colectionMenuItems={colectionMenuItems123}
        />
    );
};

export default Main;