import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import Statedata from './statedata.js';
import axios from 'axios'
class India extends Component {
    constructor(props) {
        super(props)
        this.state = {
            india_total: []
        }
    }
    componentDidMount() {
        axios.get("https://corona.lmao.ninja/v2/countries/india").then(res => {

            console.log(res.data);
            this.setState({ india_total: res.data })
            console.log(this.state.india_total)
            console.log(this.state.india_total.country)

        })

    }
    render() {
        return (
            <>
                <div className="container-fluid">
                    <div className="row mt-5">
                        <div className="col-md-12 col-sm-12">
                            <img src="https://www.countryflags.io/IN/shiny/64.png" alt="where"></img>
                            <h3>India</h3>
                        </div>

                        <div className="row">
                            <div className="col-md-3 col-sm-12">

                                <Card className="badge badge-primary" style={ { width: '30rem' } }>
                                    <Card.Body className="text-center">
                                        <Card.Title>TOTAL CASES</Card.Title>
                                        <h3>{ this.state.india_total.cases }</h3>
                                        <Card.Text>
                                            Today : { this.state.india_total.todayCases }
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>

                            <div className="col-md-3 col-sm-12">
                                <Card className="badge badge-warning" style={ { width: '30rem' } }>
                                    <Card.Body className="text-center">
                                        <Card.Title>ACTIVE CASES</Card.Title>
                                        <h3>{ this.state.india_total.active }</h3>
                                        <Card.Text>
                                            Today : { this.state.india_total.todayCases }
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>

                            <div className="col-md-3 col-sm-12">
                                <Card className="badge badge-success" style={ { width: '30rem' } }>
                                    <Card.Body className="text-center">
                                        <Card.Title>RECOVRED</Card.Title>
                                        <h3>{ this.state.india_total.recovered }</h3>
                                        <Card.Text>
                                            Today : { this.state.india_total.todayRecovered }
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>

                            <div className="col-md-3 col-sm-12">
                                <Card className="badge badge-danger" style={ { width: '30rem' } }>
                                    <Card.Body className="text-center">
                                        <Card.Title>DEATHS</Card.Title>
                                        <h3>{ this.state.india_total.deaths }</h3>
                                        <Card.Text>
                                            Today :{ this.state.india_total.todayDeaths }
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className="col-md-12 mt-4">
                                <Statedata />
                            </div>

                        </div>
                    </div>
                </div>
            </>
        );
    }
}
export default India;