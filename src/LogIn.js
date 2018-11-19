import React, { Component } from "react"
import facade from "./apiFacade";
import image from "./image/Unlimited_Power.jpg";

class LoggedIn extends Component {
  constructor(props) {
    super(props);
    this.state = { dataFromServer: "Fetching!!", people: [] };
  }
  componentDidMount = async () => {
    facade.fetchDataUser().then(res => this.setState({ dataFromServer: res }));
    facade.fetchDataAdmin().then(res => this.setState({ dataFromServer: res }));

  }
  render() {
    return (
      <div >
        <div className="text-center">
        <br/>
        <h2>{this.state.dataFromServer}</h2>
        <h3>A greeting from Palatin</h3>
          <h2>"Unlimited Power!"</h2>
          
          <img src={image} alt="Starwars" height="200 px"/>
        </div>
      </div>
    )
  }
}
export default LoggedIn;