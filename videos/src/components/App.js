import React from 'react';
import SearchBar from './SearchBar';

class App extends React.Component {
    onTermSubmit = (term) => {

    }

    render() {
        return (
            <div className="ui container">
                <SearchBar onTermSubmit={this.onTermSubmit} />
            </div>
        )
    }
}

export default App;