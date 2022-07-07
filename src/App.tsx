import 'App.css';
import { Header } from 'common';
import { Body } from 'components/landing/body';
import {useState} from "react";

export default function App() {
    const [showResume, setShowResume] = useState(false);

    const handleResumeClick = (shouldShowResume: boolean) => {
        setShowResume(shouldShowResume);
    };

    return (
        <div className="App">
            <Header handleResumeClick={handleResumeClick}/>
            <Body showResume={showResume}/>
        </div>
    );
}
