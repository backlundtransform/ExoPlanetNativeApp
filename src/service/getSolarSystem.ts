import{resource} from '../config/Resource'

import{Planet, Star, terranbase64Icon,jovanbase64Icon,  redIcon,  orangeIcon} from './getPlanets'

const getData=async (uri:string):Promise<any>=>{
  const SolarSystems =   await fetch(uri)
  .then((response) => {
    return response.json();
  })
  .then((myJson) =>  {

    return myJson 

  });

  return  SolarSystems ;
  


}







export const getSolarSystem=async (star:Star):Promise<Star>=>{
  const SolarSystems =   await getData(`http://exoplanets.azurewebsites.net/api/ExoSolarSystems/GetExoSolarSystemByName?name=${star.name}`)
   return  SolarSystems as Promise<Star>;
  
  }

export const ConstellationSolarSystems=async (constellation:number):Promise<Array<Star>>=>{

  const SolarSystems =   await getData(`http://exoplanets.azurewebsites.net/api/ExoSolarSystems/GetSolarSystemPerConstellation?constellation=${constellation}`)

  return  SolarSystems as Promise<Array<Star>> ;
}


    

