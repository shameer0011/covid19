import React, { Component } from 'react'
import axios from 'axios'
import { Card, Button, Accordion, } from 'react-bootstrap'

class Statedata extends Component {
    constructor(props) {
        super(props)
        this.state = {
            statelist: []
        }
    }
    componentDidMount() {
        axios.get("https://api.covid19india.org/state_district_wise.json").then(resp => {

            // console.log(resp.data);
            this.setState({ statelist: resp.data })
            console.log(this.state.statelist);
        });
    }

    render() {
        //all states in 'statelist '..it is big objects..not iterate..so take keys of object,that define the 'key' initialised.
        //next..now we got state..next districts..so take  'district' initialized..
        //NB:firstly to save main object in 'statelist'(state)..then into take other object(district object)..
        let key = Object.keys(this.state.statelist);
        console.log(key)
        return (
            <>

                <div className="row">
                    <div className="col-md-12 col-sm-12">
                        <Accordion >
                            {
                                key.map((itm, ky) => {
                                    //"let district = this.state.statelist[itm].districtData;"..it is used everywher..
                                    let district = this.state.statelist[itm].districtData;
                                    console.log(district)
                                    //" let district_keys = Object.keys(district);" it is not used..only iterate
                                    let district_keys = Object.keys(district);
                                    console.log(district_keys)
                                    //console.log(district_keys[15])

                                    /*   district_keys.map((it, k) => {
                                          let district_wise = district[it].active;
                                          // console.log(district_wise);
                                          for (let b in district) {
  
                                              let d = district[b].notes
                                              console.log(d)
                                          }
                                          return (
                                              <></>
                                          )
                                      }) */



                                    let total_active = 0;
                                    let total_confirmed = 0;
                                    let total_deaths = 0;
                                    let total_recover = 0;
                                    let district_list = [];

                                    for (let x in district) {
                                        // first district nte active=district_keys[x]
                                        //'active' object aan..from json.. 
                                        total_active += district[x].active;
                                        //total_active+= district[x].active.ithallam koottit total active il store cheyyunnu..
                                        total_confirmed += district[x].confirmed;
                                        total_recover += district[x].recovered;
                                        total_deaths += district[x].deceased;
                                        //if not district name..then push to... "district_list.push( district[x]);""

                                        let ob = district[x];
                                        ob["District_Names"] = x;
                                        district_list.push(ob);
                                    }
                                    console.log(district_list);
                                    //loop return below..
                                    return (


                                        <Card>
                                            <Card.Header>
                                                <Accordion.Toggle as={ Button } variant="primary" eventKey={ ky } style={ { "color": "white" } }>
                                                    { itm } -<span className="btn btn-primary p-1 mr-2" style={ { "color": "black" } }> Total Case { total_confirmed } </span> <span className="btn btn-warning p-1 mr-2" style={ { "color": "white" } }> Active_Case  { total_active } </span>  <span className="btn btn-success p-1 mr-2" style={ { "color": "white" } } >Rcovery  { total_recover }</span><span className="btn btn-danger p-1 mr-2" style={ { "color": "white" } }>  Deaths  { total_deaths }</span>
                                                </Accordion.Toggle>
                                            </Card.Header>
                                            <Accordion.Collapse eventKey={ ky }>
                                                <Card.Body>
                                                    <table className="table table-bordered table-striped">
                                                        <thead>
                                                            <h4>state list</h4>
                                                            <tr>
                                                                <td> District  </td>
                                                                <td>  Confirmed </td>
                                                                <td>  Active </td>
                                                                <td>  Recoverd </td>
                                                                <td>  Deaths </td>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {
                                                                district_list.map((itm, ky) => {
                                                                    return (
                                                                        <tr>
                                                                            <td>{ itm.District_Names }</td>
                                                                            <td>{ itm.confirmed }</td>
                                                                            <td>{ itm.active }</td>
                                                                            <td>{ itm.recovered }</td>
                                                                            <td>{ itm.deceased }</td>
                                                                        </tr>
                                                                    )
                                                                })
                                                            }
                                                        </tbody>
                                                    </table>
                                                </Card.Body>
                                            </Accordion.Collapse>
                                        </Card>
                                    )
                                })
                            }


                        </Accordion>
                    </div>
                </div>
            </>
        )//return close..
    }//render()close..
}//class fn close..
export default Statedata;