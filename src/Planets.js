import React, { Component } from "react"
import SwapiFacade from "./Swapi";
import image from "./image/planets.png";

function Planetstable(props) {
    const { planet } = props;
    return (<tr>
        <td>{planet.name}</td>
        <td>{planet.rotation_period}</td>
        <td>{planet.orbital_period}</td>
        <td>{planet.diameter}</td>
        <td>{planet.climate}</td>
        <td>{planet.gravity}</td>
        <td>{planet.terrain}</td>
        <td>{planet.surface_water}</td>
        <td>{planet.population}</td>

    </tr>


    )

}

class Planets extends Component {

    constructor(props) {
        super(props)
        this.state = { planets: [], planetsItem: '', isLoad: true };

    }

    componentDidMount = async () => {
        const planets = await SwapiFacade.getPlanets();
        this.setState({ planets });

        const planetsItem = await this.Planetsrow();
        this.setState({ planetsItem, isLoad: false });

    }

    Planetsrow = async () => {

        const Planetsmap = this.state.planets.map((index, i) =>

            <Planetstable key={i} planet={index} />
        )
        return Planetsmap;
    }

    render() {
        if (this.state.isLoad) {
            return <div className="text-center"><i className="fa fa-spinner fa-spin" /> </div>
        } else {
            return (
                <div>
                    <br/>
                    <div className="text-center">
                        <h2>Planets</h2>
                        <img src={image} alt="starwars" height="200"/>
                    </div>
                    <div>
                        <table className="table">
                            <tr><th>Name</th><th>rotation_period</th><th>orbital_period</th><th>diameter</th><th>climate</th><th>gravity</th>
                                <th>terrain</th><th>surface_water</th><th>population</th>
                            </tr>
                            {this.state.planetsItem};
                        </table>
                    </div>
                </div>
            )
        }


    }

}

export default Planets;