import React, { Component } from 'react';
import {Item} from './Item';
import { Carousel } from '@trendyol-js/react-carousel';
//import { Item } from './yourItem';

export class Carousal extends Component {
    constructor() {
        super();
        this.state = {
            articles: [],
            loading: true,
            page:1
        }
    }
    async componentDidMount() {
        let url =`https://newsapi.org/v2/everything?q=tesla&from=2022-01-06&sortBy=publishedAt&apiKey=54be4ffe91b6427e80e302e4323a38b9`;
        let data = await fetch(url);
        let parsedData = await data.json();
       console.log(parsedData)
        this.setState({ articles: parsedData.articles });
    }
  render() {
    return (
        <div className="container">
        <div className="row">
        {this.state.articles.map((element)=>{  
         return <div  key={element.url}>
             <Carousel>
          <Item  imageUrl={element.urlToImage}/>
          </Carousel>
          </div>
        
        })} </div>
      </div>
    );
  }
}

export default Carousal;
