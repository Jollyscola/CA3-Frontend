import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
//import paginationFactory from 'react-bootstrap-table2-paginator';
//import filterFactory, {  } from 'react-bootstrap-table2-filter';
//import SwapiFacade from "./Swapi"; 




function Table(props) {
    console.log(props);
    const { people } = props;
    return (

        <BootstrapTable data={people} pagination>
            <TableHeaderColumn dataField='name' filter={{ type: 'TextFilter', delay: 50 }} isKey><div>Name</div></TableHeaderColumn>
            <TableHeaderColumn dataField='height' ><div>Height</div></TableHeaderColumn>
            <TableHeaderColumn dataField='hair_color'><div>Hair Color</div></TableHeaderColumn>
            <TableHeaderColumn dataField='skin_color'><div>Skin Color</div></TableHeaderColumn>
            <TableHeaderColumn dataField='birth_year'><div>Birth Year</div></TableHeaderColumn>
            <TableHeaderColumn dataField='gender'><div>Gender</div></TableHeaderColumn>
        </BootstrapTable>
    )
}


class People1 extends Component {

    constructor(props) {
        super(props)
        this.state = { peoples: [], isLoad: true };
    }

    async componentDidMount() {
        const peoples = await fetch("http://localhost:8084/CA3/api/people/100").then(res => res.json());
        
        console.log("Hej:", peoples);
        this.setState({ peoples, isLoad: false });

        
    }







    render() {
        if (this.state.isLoad) {
            return <div className="text-center"><i className="fa fa-spinner fa-spin" /> </div>
        } else {
            return (<div>
                <div className="text-center">
                    <br />
                    <h1>People from starwars</h1>
                    <br />
                </div>
                <Table people={this.state.peoples}/>
            </div>
            )
        }
    }
}

export default People1;
