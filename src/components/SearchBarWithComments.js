import React from 'react';


class SearchBarWithComments extends React.Component {
    state = {
        term: ""
    };

    // There are 2 ways to not lose the reference to 'this' keyword

    // 1 -> make this an arrow function
    onFormSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.term)
    }

    // 2 -> define the method as usual
    onInputChange(e) {
        this.setState({
            term: e.target.value
        },()=>{
            console.log(this.state.term);
        })
        
    }
    render(){
        return (
            <div className="ui segment">
                {/* 1 -> pass this to the function */}
                <form onSubmit = {this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Image Search</label>

                        {/* 2 -> Add an arrow function here */}
                        <input value={this.state.term} onChange={(e) => this.onInputChange(e)} type="text" placeholder="Search..."/>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;