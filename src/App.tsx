import React from "react";
import "./App.css";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">UD CISC275, Hello World</header>
            <h1>This is header text</h1>
            <p> Devin Cummings </p>
            List of my classes:
            <ul>
                <li>CISC275</li>
                <li>CISC304</li>
                <li>CISC437</li>
            </ul>
            List of my favorite movies:
            <ol>
                <li>Star Wars</li>
                <li>2001: A Space Odyssey</li>
                <li>The Grand Budapest Hotel</li>
            </ol>
        </div>
    );
}

export default App;
