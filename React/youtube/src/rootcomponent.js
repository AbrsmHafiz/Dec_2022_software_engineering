import React from 'react';
import HeadingComponent from './components/heading';
import MainComponent from './components/main';
import './components/style.css'
function RootComponent() {
    return (  
        <div style={{
            backgroundColor: "#706A74", // #7dcfb6
            borderRadius: "25px",
            padding: "5px",
            paddingBottom: "100000px",     
            
        }}>
            <h1 title='this is the root component' className='centre' >My Youtube App Experiment</h1>
            
            <HeadingComponent></HeadingComponent>
            <MainComponent></MainComponent>
        </div>
    );
}

export default RootComponent;