import React, { Component } from 'react';
import './Search.css';
import config from './config';
// importing the API key from the config file.

export default class Search extends Component {

    constructor() {

        super();
        this.state = {
            value: '',
            giphyImageData: [<h2 key="0">There are currently no GIFS.</h2>],
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.purgeGiphy = this.purgeGiphy.bind(this);
    }

    // purges data and resets data in giphyImageData
    purgeGiphy(){
        this.setState({ giphyImageData: [<h2 key="0">There are currently no GIFS.</h2>] });
    }

    // returns and processes JSON data from Giphy API
    searchKeyword(keyWord) {

        this.purgeGiphy();

        fetch(`http://api.giphy.com/v1/gifs/search?q=${keyWord}&api_key=${config.api_key}`)
            .then(data => {
                return data.json()
            })
            .then(procData => {

                let mappedData;
                mappedData = procData.data.map((x, count) => {
                    return (
                        <div className="gif" key={count}>
                            <img src={x.images.original.url} alt="giphy" />
                            <p>{x.title}</p>
                        </div>
                    );
                })
                
                this.setState({ giphyImageData: mappedData });

            });
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        this.searchKeyword(this.state.value);
        event.preventDefault();
    }


    render() {
        return (
            <div>
                <form className="form" onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.value} onChange={this.handleChange} placeholder="GIF" />
                    <input className=" main_button" type="submit" value="Submit" />
                </form>
                <br />
                <div className="holder">
                    {this.state.giphyImageData}
                </div>
            </div>
        );
    }




}