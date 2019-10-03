import React from 'react';
import logo from '../quora.png';
import './background.css';

function Background(){
    return (
        <div className="home_bar">
            <a className="home_icons">
                <img className="logo" src={logo} alt="quoraKr" />
            </a>
            <a className="home_icons">
                <p>Home</p>
            </a>
            <a className="home_icons">
                <p>Answer</p>
            </a>
            <a className="home_icons">
                <p>Spaces</p>
            </a>
            <a className="home_icons">
                <p>Notification</p>
            </a>
            <a className="home_icons">
                <p>search</p>
            </a>
            <a className="home_icons">
                <p>profile</p>
            </a>
            <a className="home_icons">
                <p>Add question</p>
            </a>
        </div>
    );
}

export default Background;