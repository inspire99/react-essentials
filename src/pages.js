import React from 'react';
import {Link, useLocation, Outlet} from 'react-router-dom';

export function Home(){
    return(
        <div>
            <h1>[Company Website]</h1>
            <nav>
                <Link to="about">About</Link>
                <Link to="contact">Contact</Link>
            </nav>
        </div>
    );
}

export function About(){
    return(
        <div>
            <h1>[About]</h1>
            <Outlet />
        </div>
    );
}

export function Events(){
    return(
        <div>
            <h1>[Events]</h1>
        </div>
    );
}


export function Contact(){
    return(
        <div>
            <h1>[Contact]</h1>
        </div>
    );
}

export function Whoops404(){
    const location = useLocation();
    return(
        <div>
            <h1>This resource at {location.pathname} does not exist</h1>
        </div>
    );
}

export function Services(){
    
    return(
        <div>
            <h1>[Company Services]</h1>
        </div>
    );
}