import React, { Component } from 'react';
import config from './config'
export default class Search extends Component{

    constructor(){
        super();
        this.state = {
            searchKeyword: '',
            giphyImageData: [],
        };

    }

    // returns and processes JSON data from Giphy API
    searchKeyword(keyWord){
        fetch(`http://api.giphy.com/v1/gifs/search?q=${keyWord}&api_key=D8qiB09X8jDja3OkYobyd1sI8qcFD8Tx`)
        .then( data => { 
            console.log(data)
            return data.json })
        .then(procData =>{

            console.log(procData.data);

            // let mappedData;
            // this.setState({ giphyImageData: mappedData })


        });
    }

    componentDidMount(){
      this.searchKeyword('cat')
    }
    
    render(){
        return(
            <div>
            <p>Working Search Function</p>
            </div>
        );
    }




}