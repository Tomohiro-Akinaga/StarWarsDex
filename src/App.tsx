import React from "react";
import { useState } from "react";
import "./App.css";

const App: React.FC = () => {
    const [questionCard, setQuestionCard] = useState<boolean>(false);
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        setQuestionCard(true);
    };
    return (
        <div className="App">
            <h1 className="heading">Star wars matching</h1>
            {!questionCard && <h2 className="subHeading">Find Your Best Star Wars Series</h2>}
            {!questionCard && <button className="button" onClick={handleClick}>
                Start Now
            </button>}
        </div>
    );
};

export default App;
