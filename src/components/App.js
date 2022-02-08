import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {

    state = {
        images: []
    }

    onFormSubmit = async (searchTerm) => {
        const response = await unsplash.get('search/photos', {
            params: {query: searchTerm}
        })

        this.setState({
            images: response.data.results
        })
    }

    // onFormSubmitUsingThen (searchTerm) {
    //     axios.get('https://api.unsplash.com/search/photos', {
    //         params: {query: searchTerm},
    //         headers: {
    //             Authorization: "Client-ID nQFGWSugBopM6xiXJB4qZpDM7067GVT-nAmN4k2wfWM"
    //         } 
    //     }).then((res)=>{console.log("Axios response: ", res.data.results)})
    // }

    render(){
        return (
            <div className="ui container" style={{marginTop: "10px"}}>
                <SearchBar onFormSubmit={this.onFormSubmit}/>
                <p>Found {this.state.images.length} images. </p>
                <ImageList images={this.state.images}/>
            </div>
        )
    }
}

export default App;