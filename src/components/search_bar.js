import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        //explicit setting of component state only in constructor
        this.state = { term: 'Placeholder' };
    }
    render() {
        //implicit setting of component state
        return (
            <div>
                <input 
                value={this.state.term}
                onChange={event => this.setState({
                    term: event.target.value
                })} />
            </div>
        );
    }
}

export default SearchBar;