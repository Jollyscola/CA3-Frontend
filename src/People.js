import React, { Component } from "react"
import SwapiFacade from "./Swapi";
import image from './image/height.png';

function Rowtablepeople(props) {
    const { people } = props;
    return (<tr>
        <td>{people.name}</td>
        <td>{people.height}</td>
        <td>{people.mass}</td>
        <td>{people.hair_color}</td>
        <td>{people.skin_color}</td>
        <td>{people.birth_year}</td>
        <td>{people.gender}</td>
    </tr>)

}

class People extends Component {

    constructor(props) {
        super(props)
        this.state = { peoples: [], peopleItems: '', isLoad: true };

    }

    componentDidMount = async () => {
        const peoples = await SwapiFacade.getPeople();
        this.setState({ peoples });

        const peopleItems = await this.peoplerow();
        this.setState({ peopleItems, isLoad: false });

    }

    peoplerow = async () => {

        const peoplemap = this.state.peoples.map((index, i) =>

            <Rowtablepeople key={i} people={index} />
        )
        return peoplemap;
    }

    render() {
        if (this.state.isLoad) {
            return <div className="text-center"><i className="fa fa-spinner fa-spin" /> </div>
        } else {
            return (
                <div>
                    <br />
                    <div className="text-center">
                        <h2>People</h2>
                        <img src={image} alt="starwars" height="200px" />
                    </div>
                    <div>
                        <table className="table">
                            <thead>
                                <tr><th>Name</th><th>Height</th><th>Mass</th><th>Hair Color</th><th>Skin Color</th><th>Birth Year</th><th>Gender</th></tr>
                            </thead>
                            <tbody>
                                {this.state.peopleItems};
                    </tbody>
                        </table>
                    </div>
                </div>


            )
        }


    }

}

export default People