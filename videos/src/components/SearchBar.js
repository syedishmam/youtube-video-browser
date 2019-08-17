import React from 'react';

class SearchBar extends React.Component {
    state = { term: '' };

    //Every time textfield input changes (user adds or deletes a character in it), update state
    onInputChange = (e) => {
        this.setState({ term: e.target.value });
    };

    //When form is submitted, call onTermSubmit on the text in the textfield
    //See App.js for onTermSubmit()
    onFormSubmit = (e) => {
        e.preventDefault();

        this.props.onTermSubmit(this.state.term);
    }

    render() {
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        <input type="text" value={this.state.term} onChange={this.onInputChange} />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;