import React from "react";
import "./App.css";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">UD CISC275, Hello World</header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Devin Cummings
            </p>
        </div>
    );
}

export function App(): JSX.Element {
    return <h1>This is header text</h1>;
}

export default App;
