import React, { Component } from 'react'
import axios from 'axios'
import { Card, Button, Accordion, } from 'react-bootstrap'

class World extends Component {
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
        //initialization
        //fn call..
        //console ..but depend on above line..

        let key = Object.keys(this.state.statelist);

        console.log(key)


        return (
            <>
                <h4>State List</h4>
                <div className="row">
                    <div className="col-md-12">

                        {
                            key.map((itm, ky) => {
                                let district = this.state.statelist[itm].districtData;
                                let district_keys = Object.keys(district);
                                console.log(district_keys)

                                let district_list = [];
                                for (let x in district) {
                                    let v = district[x].active;
                                    let y = district[x].confirmed;
                                    let z = district[x].deceased;
                                    let o = district[x].recovered;
                                    let ob = district[x];

                                    //adiyile simple value kittan igne ezhuthanm..below..       
                                    /*   let district_list = [];
                                   let v = "";
                                   let y = "";
                                   let z = "";
                                   let o = "";
                               for (let x in district) {
                                   v = district[x].active;
                                   y = district[x].confirmed;
                                   z = district[x].deceased;
                                   o = district[x].recovered; */
                                    //district name not in api ..so im create district name as object..
                                    ob["District_Name"] = x;
                                    district_list.push(ob);
                                }//close for loop..
                                console.log(district_list);

                                let total_active = 0;
                                let total_confirmed = 0;
                                let total_deaths = 0;
                                let total_recover = 0;
                                let total_issues = [];

                                for (let k in district) {
                                    total_active += district[k].active;
                                    total_confirmed += district[k].confirmed;
                                    total_recover += district[k].deceased;
                                    total_deaths += district[k].recovered;
                                    let obj = district[k];
                                    total_issues.push(obj)
                                }
                                console.log(total_issues);



                                //below return is first render of state..
                                return (
                                    <table className="table table-bordered table-striped">
                                        <caption> <h3>{ itm }</h3> total_active-{ total_active },total_confirm-{ total_confirmed },total_recover-{ total_recover },total_deaths-{ total_deaths }</caption>

                                        <thead>
                                            <tr>

                                                {/* {
                                                        total_issues.map((p, j) => {
                                                            return (
                                                                <>
                                                                    <h4>state-{ itm }total_active-{ total_active },total_confirm-{ total_confirmed }</h4>
                                                                </>
                                                            )
                                                        })
                                                    } */}



                                                <td>  District Name </td>
                                                <td>  Active </td>
                                                <td>  Confirmed </td>
                                                <td>  Deceased </td>
                                                <td>  Recovered </td>

                                            </tr>
                                        </thead>
                                        <tbody>

                                            {
                                                district_list.map((item, ky) => {
                                                    return (
                                                        <tr>

                                                            <td><h4>{ item.District_Name }</h4></td>
                                                            <td>{ item.active }</td>
                                                            <td>{ item.confirmed }</td>
                                                            <td>{ item.deceased }</td>
                                                            <td>{ item.recovered }</td>
                                                            { console.log(itm.active) }
                                                            { console.log("haiii") }
                                                        </tr>
                                                        //or simple way...but not get "district_Name"..
                                                        // <tr>
                                                        // <td>total_active-{ total_active },total_confirm-{ total_confirmed }</td>
                                                        // <td>{ v }</td>
                                                        // <td>{ y }</td>
                                                        // <td>{ z }</td>
                                                        // <td>{ o }</td>
                                                        // </tr> 
                                                    )

                                                })
                                            }
                                        </tbody>
                                    </table>
                                )
                            })
                        }
                    </div>
                </div>

            </>
        )//return close..
    }//render()close..
}//class fn close..
export default World;



//nb:statedata.js ..there is a lot of doubts..so create another js file as World.js..
//still its not use...