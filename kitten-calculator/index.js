import React, { Component } from 'react';

import './style.css';

export default class KittenCalculator extends Component {

    constructor(props) {
        super(props);
        this.state = {
            first_input: '',
            second_input: '',
            operator: '',
            total: 0,
            img: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    renderOperator(operator) {
        return (<option key={operator}>{operator}</option>);
    }

    handleChange(event) {
        switch(event.target.id) {
            case "first_input":
                this.setState({first_input: String(event.target.value)});
                break;
            case "second_input":
                this.setState({second_input: String(event.target.value)});
                break;
            case "select":
                this.setState({operator: event.target.value});
                break;
       }
    }

    handleSubmit(event) {
        event.preventDefault();

        this.setState({total: this.props.operators[this.state.operator]( Number(this.state.first_input), Number(this.state.second_input) ) }, () => {
            var x = this.state.total;

            switch(true) {
                case (x == 1):
                    this.setState({img: "../../images/1_kitten.jpg"});
                    break;
                case (x == 2):
                    this.setState({img: "../../images/2_kittens.jpg"});
                    break;
                case (x == 3):
                    this.setState({img: "../../images/3_kittens.jpg"});
                    break;
                case (x == 4):
                    this.setState({img: "../../images/4_kittens.jpg"});
                    break;
                case (x == 5):
                    this.setState({img: "../../images/5_kittens.jpg"});
                    break;
                case (x == 6):
                    this.setState({img: "../../images/6_kittens.jpg"});
                    break;
                case (x == 7):
                    this.setState({img: "../../images/7_kittens.jpg"});
                    break;
                case (x == 8):
                    this.setState({img: "../../images/8_kittens.jpg"});
                    break;
                case (x == 9):
                    this.setState({img: "../../images/9_kittens.jpg"});
                    break;
                case (x == 10):
                    this.setState({img: "../../images/10_kittens.jpg"});
                    break;
                case (x > 10):
                    this.setState({img: "../../images/many_kittens.jpg"});
                    break;
                default:
                    this.setState({img: ""});
            }
        });
    }

    render() {
        return (
            <div className="container">
                <h1 className="header">Calculator</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form">
                        <input  type="number" id="first_input" value={this.state.first_input} onChange={this.handleChange}/>
                        <select id="select" onChange={this.handleChange} value={this.state.operator} className="select">
                            <option></option>
                            { Object.keys(this.props.operators).map( this.renderOperator ) }
                        </select>
                        <input type="number" id="second_input" value={this.state.second_input} onChange={this.handleChange}/>
                        <button type="submit"> Calculate </button>
                    </div>
                </form>
                <div className="result">
                    <h3>{this.state.total}</h3>
                    <img className="image" src={this.state.img} />
                </div>
            </div>
        );
    }
}