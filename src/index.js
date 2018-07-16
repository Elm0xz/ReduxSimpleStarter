import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyCkkasFx90fwnyH4gd2hzxwjuU4nATagNI';

//searching on yt
//parameters & callback function
YTSearch({key: API_KEY, term: 'surfboards'}, function(data) {
    console.log(data);
});

//Create a new component -> creating HTML
const App = () => {
    return <div>
        <SearchBar/>
        <br/>
        Ble
    </div>; //JSX
}


//Take this component's generated HTML and put it in the DOM
ReactDOM.render(<App/>, document.querySelector('.container'));