import React, { Component } from 'react';
import axios from 'axios'
class World extends Component {
    constructor(props) {
        super(props)
        this.state = {
            country_list: []
        }
    }
    componentDidMount() {
        axios.get('https://corona.lmao.ninja/v2/countries').then(resp => {

            //console.log(resp.data);
            this.setState({ country_list: resp.data })
            console.log(this.state.country_list);

        });
    }

    render() {
        let v = Object.keys(this.state.country_list);
        console.log(v)
        console.log(this.state.country_list)
        return (
            <>
                <h3>World </h3>
                <div className="row " style={ { "margin-top": "25px" } }>
                    <div className="col-md-12 col-sm-12">

                        <table className="table table-primary table-borderd table-striped">
                            <thead >

                                <tr style={ { "padding-top": "25px" } } >
                                    <td > <h5>Country</h5></td>
                                    <td > <h5 style={ { "position": "fixed", "width": "100%", "zIndex": "2" } }>Total</h5></td>
                                    <td style={ { "position": "fixed", "width": "100%", "zIndex": "2" } }><h5>Active</h5></td>
                                    <td><h5 style={ { "position": "fixed", "width": "100%", "zIndex": "2" } }>Recoverd</h5></td>
                                    <td style={ { "position": "fixed", "width": "100%", "zIndex": "2" } }><h5>Deaths</h5></td>


                                </tr>

                            </thead>
                            <tbody>

                                {
                                    this.state.country_list.map((itm, k) => {
                                        return (
                                            <tr style={ { "padding-top": "100px" } } >
                                                <td>{ itm.country }<img style={ { width: "64px", marginLeft: "10px" } } src={ itm.countryInfo.flag }></img> </td>
                                                <td>{ itm.cases }</td>
                                                <td>{ itm.active }</td>
                                                <td>{ itm.recovered }</td>
                                                <td>{ itm.deaths }</td>

                                            </tr>
                                        )
                                    })
                                }

                            </tbody>
                        </table>
                    </div>
                </div >
            </>
        )
    }
}
export default World;