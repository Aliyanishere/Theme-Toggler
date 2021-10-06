import React, { Component } from 'react';

class Card extends Component {
    getData = () => {
        console.log(this.props.title, "Rs:",this.props.price, this.props.image)
    }
    render() {
        return (
            <div className="card" style={{width: "18rem", margin: 20}}>
                <img src={this.props.image} className="card-img-top" alt={this.props.title} height="210px" />
                <div className ="card-body">
                <h5 className ="card-title">{this.props.title}</h5>
                <p className ="card-text">Rs <i>{this.props.price}</i></p>
                <button className ="btn btn-primary" onClick={()=>this.getData()}>Buy it</button>
                </div>
            </div>
        )
    }
}

export default Card;