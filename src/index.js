import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

const API_KEY = 'AIzaSyCkkasFx90fwnyH4gd2hzxwjuU4nATagNI';

//Create a new component -> creating HTML
class App extends Component {
    constructor(props) {
        super(props);

        this.state = { videos: []};

        //searching on yt
        //parameters & callback function
        YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
            this.setState({ videos });
            //this,setState({ videos : videos}) is alternative syntax here 
        });
    }
    render() {
        return (
        <div>
            <SearchBar/>
            <VideoList videos={this.state.videos}/>
        </div>);
    }
}

//Take this component's generated HTML and put it in the DOM
ReactDOM.render(<App/>, document.querySelector('.container'));