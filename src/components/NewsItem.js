import React, { Component } from 'react';

export class NewsItem extends Component {
  render() {
    let {title,description,imageUrl,url,author,date}=this.props;
    return (
      <>
        <div className="card" style={{width: "21rem"}}>
          <img src={!imageUrl?"https://images.news18.com/ibnlive/uploads/2022/01/covid-kolkata-1-164207243116x9.jpg":imageUrl} className="card-img-top" alt="..." style={{height:"10rem"}} />
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
              <p className="card-text"><small className="text-muted">By {!author?"unknown":author} on {new Date(date).toGMTString()}</small></p>
              <a href={url} target="_blank" className="btn btn-sm btn-primary">Read More</a>
            </div>
        </div>
      </>
    );
  }
}

export default NewsItem;
