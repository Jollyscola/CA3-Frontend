
import React, { Component } from "react"
import { HashRouter as Router, NavLink, Route, Switch } from 'react-router-dom';
import AuthenticationStatus from "./AuthenticationStatus";
import People from "./People";
import StarShips from "./StarShips";
import Planets from "./Planets";
import Species from "./Species";
import Vehicles from "./Vehicles";
import image from "./image/index.png";
import './AppRouter.css'
import facade from "./apiFacade";
import Peopleapp from "./Peopleapp";


function Header(props) {
    const header = props;
    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <img src={image} alt="star wars foto" height="50 px"/>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active" ><NavLink exact className="nav-link" to="/">Home</NavLink></li>

                    {header.loggedIn && 
                        <li className="nav-item" ><NavLink className="nav-link" to="/people">People</NavLink></li>  
                    }
                    {header.loggedIn && 
                        <li className="nav-item" ><NavLink className="nav-link" to="/starships">Starship</NavLink></li>}
                    {header.loggedIn &&
                        <li className="nav-item" ><NavLink className="nav-link" to="/planets">Planets</NavLink></li>}
                    {header.loggedIn &&
                        <li className="nav-item" ><NavLink className="nav-link" to="/species">Species</NavLink></li>}
                    {header.loggedIn &&
                        <li className="nav-item" ><NavLink className="nav-link" to="/vehicles">Vehicles</NavLink></li>}
                       {/*  <li className="nav-item" ><NavLink className="nav-link" to="/peopleapp">People</NavLink></li> */}
                </ul>
            </div>
        </nav>
    )
}



class AppRouter extends Component {

    constructor(props) {
        super(props);
        this.state = { loggedIn: false }
      }

      logout = () => {
        facade.logout();
        this.setState({ loggedIn: false });
      }

      login = (user, pass) => {
        facade.login(user, pass)
        .then(res => this.setState({ loggedIn: true }));
      }

    render() {

        return (
            <Router>
                <div>
                    <Header loggedIn={this.state.loggedIn}/>
                    <Switch>
                        <Route exact path="/" render={() => <AuthenticationStatus logout={this.logout} login={this.login} loggedIn={this.state.loggedIn} />} />
                        <Route path="/people" render={() => <People />} />
                        <Route path="/starships" render={() => <StarShips />} />
                        <Route path="/planets" render={() => <Planets />} />
                        <Route path="/species" render={() => <Species />} />
                        <Route path="/vehicles" render={() => <Vehicles />} />
                    
                    </Switch>
                </div>
            </Router>
        )
    }
}



export default AppRouter;