import React, { Component } from 'react';

export class Item extends Component {
    render() {
        let {imageUrl}=this.props;
        return (
            <div>
                <div className="card" style={{width: '18rem'}}>
                <img src={imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                    </div>
                </div>
            </div>
        );
    }
}

export default Item;
