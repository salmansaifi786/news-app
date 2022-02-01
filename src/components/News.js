import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';

export class News extends Component {
  articles=[
      {  
          "source": {
              "id": null,
              "name": "Askubuntu.com"
          },
          "author": "Silicomancer",
          "title": "Get rid of Xorg processes on Tesla card",
          "description": "I am running a Workstation with two GPU boards. One older AMD board connected to my screens and a Tesla K80 for CUDA development. After installing Kubuntu 21.10 I have some problems like kernel launch timeouts and failed launches. Also I can not reset the K80…",
          "url": "https://askubuntu.com/questions/1389933/get-rid-of-xorg-processes-on-tesla-card",
          "urlToImage": "https://cdn.sstatic.net/Sites/askubuntu/Img/apple-touch-icon@2.png?v=c492c9229955",
          "publishedAt": "2022-01-29T14:01:32Z",
          "content": "I am running a Workstation with two GPU boards. One older AMD board connected to my screens and a Tesla K80 for CUDA development. After installing Kubuntu 21.10 I have some problems like kernel launc… [+742 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "Motley Fool"
          },
          "author": "newsfeedback@fool.com (Daniel Foelber and John Rosevear)",
          "title": "Tesla Stock Down 22%: Bull vs. Bear",
          "description": "The EV kingpin's 2021 performance included record-high sales, earnings, free cash flow, and operating margin.",
          "url": "https://www.fool.com/investing/2022/01/29/tesla-stock-down-big-bull-vs-bear/",
          "urlToImage": "https://g.foolcdn.com/editorial/images/663324/1-tesla-roadster.jpeg",
          "publishedAt": "2022-01-29T13:41:00Z",
          "content": "Tesla (NASDAQ:TSLA) stock was up more than 10% year-to-date when it released better-than-expected Q4 and full-year production and delivery numbers in early January. Now, the electric car stock is dow… [+7363 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "Gizchina.com"
          },
          "author": "Argam Artashyan",
          "title": "Apple Could Overcome Supply Chain Issues, But Others Can’t",
          "description": "Recently, Apple announced its fourth-quarter results that showed how well the company performs. It’s a bit strange in the picture of total declines and shortages. ...\nThe post Apple Could Overcome Supply Chain Issues, But Others Can’t appeared first on Gizchi…",
          "url": "https://www.gizchina.com/2022/01/29/apple-could-overcome-supply-chain-issues-but-others-cant/",
          "urlToImage": "https://www.gizchina.com/wp-content/uploads/images/2021/11/Apple3-14-20AP-1880x1254-1-1024x683.jpg",
          "publishedAt": "2022-01-29T13:34:40Z",
          "content": "Recently, Apple announced its fourth-quarter results that showed how well the company performs. Its a bit strange in the picture of total declines and shortages. But we are talking about the worlds m… [+2871 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "Motley Fool"
          },
          "author": "newsfeedback@fool.com (John Bromels)",
          "title": "The Biggest Industrial Trend Tesla and Others Are Following",
          "description": "Are tech innovations making industrial stocks less \"industrial\"?",
          "url": "https://www.fool.com/investing/2022/01/29/the-biggest-industrial-trend-tesla-and-others-are/",
          "urlToImage": "https://g.foolcdn.com/editorial/images/663588/electrified-blueprint-of-a-vehcile-getty-images.jpg",
          "publishedAt": "2022-01-29T13:30:00Z",
          "content": "Technological advancements have made it more difficult to classify stocks as solely industrial -- take Tesla(NASDAQ:TSLA), for instance. Considering its innovation in and adoption of different techno… [+2615 chars]"
      }
  
  ]
  constructor(){
    super();
    this.state={
      articles:[],
      loading:true,
      page:1
    }
  }
  async componentDidMount(){
    let url =`https://newsapi.org/v2/top-headlines?country=in&apiKey=54be4ffe91b6427e80e302e4323a38b9&page=1&pageSize=${this.props.pagesize}`;
    let data = await fetch(url);
    let parsedData= await data.json();
    console.log(parsedData)
    this.setState({articles:parsedData.articles});
  }
   handlePClick= async ()=>{
    let url =`https://newsapi.org/v2/top-headlines?country=in&apiKey=54be4ffe91b6427e80e302e4323a38b9&page=${this.state.page-1}&pageSize=${this.props.pagesize}`;
    let data = await fetch(url);
    let parsedData= await data.json();
    this.setState({
      page: this.state.page-1,
      articles:parsedData.articles
    })
  }
  handleNClick= async ()=>{
    let url =`https://newsapi.org/v2/top-headlines?country=in&apiKey=54be4ffe91b6427e80e302e4323a38b9&page=${this.state.page+1}&pageSize=${this.props.pagesize}`;
    let data = await fetch(url);
    let parsedData= await data.json();
    this.setState({
      page: this.state.page+1,
      articles:parsedData.articles
    })

  }
  render() {
    return (
      <div className="container my-3">
        <h2>News of the day</h2>
        {this.state.loading && <Spinner />}
        <div className="row my-3">
        {this.state.articles.map((element)=>{  
         return <div className="col-md-4 my-3"  key={element.url}>
          <NewsItem title={element.title?element.title.slice(0,45)+"....":""} description={element.description?element.description.slice(0,90)+"...":""} imageUrl={element.urlToImage} url={element.url}/>
          </div>
        
        })} </div>
      
        {/* 54be4ffe91b6427e80e302e4323a38b9  news-api-key*/}
        <div className='container d-flex justify-content-between'>
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePClick}>&larr; Previous</button>
        <button disabled={this.state.page>38/this.props.pagesize} type="button" className="btn btn-dark" onClick={this.handleNClick}>Next &rarr;</button>
        </div>
      </div>
    );
  }
}

export default News;
