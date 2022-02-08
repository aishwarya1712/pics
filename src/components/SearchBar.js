import React from 'react';


class SearchBar extends React.Component {
    state = {
        term: ""
    };

    onSearchSubmit = (e) => {
        e.preventDefault(); // prevents page from auto-refreshing when form is submitted    
        this.props.onFormSubmit(this.state.term)
    }

    onInputChange(e) {
        this.setState({
            term: e.target.value
        })     
    }

    render(){
        return (
            <div className="ui segment">
                
                <form onSubmit={this.onSearchSubmit} className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input value={this.state.term} onChange={(e) => this.onInputChange(e)} type="text" placeholder="Search..."/>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;