import React, { Component } from "react"
import SwapiFacade from "./Swapi";
import image from "./image/vehicles .png";

function Vehiclestable(props) {
    const { vehicle } = props;
    return (<tr>
        <td>{vehicle.name}</td>
        <td>{vehicle.model}</td>
        <td>{vehicle.manufacturer}</td>
        <td>{vehicle.cost_in_credits}</td>
        <td>{vehicle.length}</td>
        <td>{vehicle.max_atmosphering_speed}</td>
        <td>{vehicle.crew}</td>
        <td>{vehicle.passengers}</td>
        <td>{vehicle.cargo_capacity}</td>
        <td>{vehicle.consumables}</td>
        <td>{vehicle.vehicle_class}</td>

    </tr>


    )

}

class Vehicle extends Component {

    constructor(props) {
        super(props)
        this.state = { vehicles: [], vehiclesItem: '', isLoad: true };

    }

    componentDidMount = async () => {
        const vehicles = await SwapiFacade.getVehicles();
        this.setState({ vehicles });

        const vehiclesItem = await this.vehiclesrow();
        this.setState({ vehiclesItem, isLoad: false });

    }

    vehiclesrow = async () => {

        const vehiclesmap = this.state.vehicles.map((index, i) =>

            <Vehiclestable key={i} vehicle={index} />
        )
        return vehiclesmap;
    }

    render() {
        if (this.state.isLoad) {
            return <div className="text-center"><i className="fa fa-spinner fa-spin" /> </div>
        } else {
            return (
                <div>
                    <br/>
                    <div className="text-center">
                    <h2>Vehicles</h2>
                        <img src={image} alt="starwars" />
                       
                    </div>
                    <div>

                        <table className="table">
                            <tr><th>Name</th><th>Model</th><th>Manufacturer</th><th>Cost In Credits</th><th>Length</th><th>Max Atmosphering Speed</th>
                                <th>Crew</th><th>Passengers</th><th>Cargo capacity</th><th>Consumables</th><th>Vehicle Class</th>
                            </tr>
                            {this.state.vehiclesItem}
                        </table>
                    </div>
                </div>
            )
        }


    }

}

export default Vehicle;