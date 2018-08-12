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
            <div className="search-bar">
                <input
                    value={this.state.term}
                    onChange={event => this.onInputChange(event.target.value)} />
            </div>
        );
    }

    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
}

export default SearchBar;