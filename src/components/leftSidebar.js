import React from 'react';
import './leftSidebar.css';

function LeftSideBar(){
    return (
        <div className="feed_bar"> 
            <a className="feed_icons">
                <p>Feed</p>
            </a>
            <a className="feed_icons">
                <p>Science</p>
            </a>
            <a className="feed_icons">
                <p>Physics</p>
            </a>
            <a className="feed_icons">
                <p>Anything</p>
            </a>
        </div>
    );
}

export default LeftSideBar;