import endpoints from './settings.js';
import './AuthenticationStatus';


class Swapi {
  
  constructor(){
    this.state = {people: []}
  }
  
    getPeople = async () => {
     // console.log('inside getPeople')
      const responsePeople = await fetch(endpoints + "/api/people");
      //console.log(responsePeople);
      const dataPeople = await responsePeople.json();
      console.log('data', dataPeople);
      return dataPeople;
    }

    getPeopleapp = async () => {
      // console.log('inside getPeople')
       const responsePeople = await fetch(endpoints + "/api/people/100" );
       //console.log(responsePeople);
       const dataPeople = await responsePeople.json();
       console.log('data', dataPeople);
       return dataPeople;
     }
  
    getStarShips = async () => {
      //console.log('inside getlabels')
      const responseStarShips = await fetch(endpoints + "/api/starships");
      // console.log(responseDataLabels);
      const dataStarShips= await responseStarShips.json();
      console.log('datalabel', dataStarShips);
      return dataStarShips;
    }

    getPlanets = async () => {
      //console.log('inside getlabels')
      const responsePlanets = await fetch(endpoints + "/api/planets");
      // console.log(responseDataLabels);
      const dataPlanets= await responsePlanets.json();
      console.log('datalabel', dataPlanets);
      return dataPlanets;
    }

    getSpecies = async () => {
      //console.log('inside getlabels')
      const responseSpecies = await fetch(endpoints + "/api/species");
      // console.log(responseDataLabels);
      const dataSpecies= await responseSpecies.json();
      console.log('datalabel', dataSpecies);
      return dataSpecies;
    }

    getVehicles = async () => {
      //console.log('inside getlabels')
      const responseVehicles = await fetch(endpoints + "/api/vehicles");
      // console.log(responseDataLabels);
      const dataVehicles = await responseVehicles.json();
      console.log('datalabel', dataVehicles);
      return dataVehicles;
    }
  }
  
  
  
  export default new Swapi();