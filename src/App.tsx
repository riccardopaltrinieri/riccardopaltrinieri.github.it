import 'App.css';
import { NavBar } from 'components/header';
import { Body } from 'components/landing/body';
import {useState} from "react";

export default function App() {
    const [showResume, setShowResume] = useState(false);

    const handleResumeClick = (shouldShowResume: boolean) => {
        setShowResume(shouldShowResume);
    };

    return (
        <div className="App">
            <NavBar handleResumeClick={handleResumeClick}/>
            <Body showResume={showResume}/>
        </div>
    );
}
