import React, { Component } from "react"
import SwapiFacade from "./Swapi";
import image from "./image/spices.jpg";

function Speciestable(props) {
    const { species } = props;

    return (<tr>
        <td>{species.name}</td>
        <td>{species.classification}</td>
        <td>{species.designation}</td>
        <td>{species.average_height}</td>
        <td>{species.skin_colors}</td>
        <td>{species.hair_colors}</td>
        <td>{species.eye_colors}</td>
        <td>{species.average_lifespan}</td>
        <td>{species.language}</td>

    </tr>


    )

}

class Species extends Component {

    constructor(props) {
        super(props)
        this.state = { species: [], speciesItem: '', isLoad: true };

    }

    componentDidMount = async () => {
        const species = await SwapiFacade.getSpecies();
        this.setState({ species });
        const speciesItem = await this.speciesrow();
        this.setState({ speciesItem, isLoad: false });

    }

    speciesrow = async () => {

        const speciesmap = this.state.species.map((index, i) =>

            <Speciestable key={i} species={index} />
        )
        return speciesmap;
    }

    render() {
        if (this.state.isLoad) {
            return <div className="text-center"><i className="fa fa-spinner fa-spin" /> </div>
        } else {
            return (
                <div>
                    <br/>
                    <div className="text-center">
                        <h2>Species</h2>
                        <img src={image} alt="starwars" />

                    </div>
                    <div>
                        <table className="table">
                            <thead>
                                <tr><th>Name</th><th>Classification</th><th>Designation</th><th>Average Height</th><th>Skin Colors</th><th>Hair Colors</th>
                                    <th>Eye Colors</th><th>Average Lifespan</th><th>Language</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.speciesItem};
                            </tbody>
                        </table>
                    </div>
                </div>
            )
        }


    }

}

export default Species;