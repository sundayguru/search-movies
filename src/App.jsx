import React from 'react'
import {hot} from "react-hot-loader";
import "./App.css";
import Movies from  "./search/Movies";


class App extends React.Component {
    render() {
        return (
            <div className="app">
                <Movies />
            </div>
        )
    }
}


export default hot(module)(App)