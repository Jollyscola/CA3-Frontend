import React, { Component } from "react"
import SwapiFacade from "./Swapi";
import image from "./image/starships.png";

function Starshipstable(props) {
    const { starship } = props;
    return (<tr>
        <td>{starship.name}</td>
        <td>{starship.model}</td>
        <td>{starship.manufacturer}</td>
        <td>{starship.cost_in_credits}</td>
        <td>{starship.length}</td>
        <td>{starship.max_atmosphering_speed}</td>
        <td>{starship.crew}</td>
        <td>{starship.passengers}</td>
        <td>{starship.cargo_capacity}</td>
        <td>{starship.consumables}</td>
        <td>{starship.hyperdrive_rating}</td>
        <td>{starship.MGLT}</td>
        <td>{starship.starship_class}</td>

    </tr>


    )

}

class StarShips extends Component {

    constructor(props) {
        super(props)
        this.state = { starships: [], starshipItem: '', isLoad: true };

    }

    componentDidMount = async () => {
        const starships = await SwapiFacade.getStarShips();
        this.setState({ starships });
        const starshipItem = await this.starshiprow();
        this.setState({ starshipItem, isLoad: false });

    }

    starshiprow = async () => {

        const starshipsmap = this.state.starships.map((index, i) =>

            <Starshipstable key={i} starship={index} />
        )
        return starshipsmap;
    }

    render() {
        console.log('render')
        if (this.state.isLoad) {
            return <div className="text-center"><i className="fa fa-spinner fa-spin" /> </div>
        } else {
            return (
                <div>
                    <div className="text-center">
                        <img src={image} alt="starwars" height="250" />
                        <h2>Starships</h2>
                    </div>
                    <div>
                        <table className="table">
                            <thead>
                                <tr><th>Name</th><th>Model</th><th>Manufacturer</th><th>Cost In Credits</th><th>Length</th><th>Max Atmosphering Speed</th>
                                    <th>Crew</th><th>Passengers</th><th>Cargo capacity</th><th>Consumables</th><th>Hyperdrive Rating</th><th>MGLT</th><th>Starship Class</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.starshipItem};
                            </tbody>
                        </table>
                    </div>
                </div>
            )
        }


    }

}

export default StarShips;