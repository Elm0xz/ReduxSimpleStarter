import React from 'react';
import ReactDOM from 'react-dom';

//Create a new component -> creating HTML
const App = () => {
    return <div>Hi!</div>; //JSX
}

//Take this component's generated HTML and put it in the DOM
ReactDOM.render(<App/>, document.querySelector('.container'));