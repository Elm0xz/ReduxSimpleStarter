import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyCkkasFx90fwnyH4gd2hzxwjuU4nATagNI';

//Create a new component -> creating HTML
class App extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            videos: [],
            selectedVideo: null 
        };

        //searching on yt
        //parameters & callback function
        YTSearch({key: API_KEY, term: 'ufo'}, (videos) => {
            //this.setState({ videos }); is alternative syntax here
            this.setState({
                 videos : videos,
                 selectedVideo : videos[0]
                });  
        });
    }
    render() {
        return (
        <div>
            <SearchBar/>
            <VideoDetail video={this.state.selectedVideo}/>
            <VideoList 
                onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                videos={this.state.videos}/>
        </div>);
    }
}

//Take this component's generated HTML and put it in the DOM
ReactDOM.render(<App/>, document.querySelector('.container'));