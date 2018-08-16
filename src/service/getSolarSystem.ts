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

export const SolarSystems= [
    
  {
        name:"1RXS 1609",
        type: resource.orange,
        img:{uri:orangeIcon},
        habZoneMin:350,
        habZoneMax : 400,
        radius:60,
       planets:[  {name:"1RXS 1609 b",
        img: {uri:jovanbase64Icon},
        type: resource.hotJovian,
        distance: 145.00,
        esi:0,
        discYear:2008,
        radius: 25,
        starDistance: 200,
       
      }, ]

      }as Star,

     {
        name:"GJ 180",
        type: resource.red,
        img:{uri:redIcon},
        habZoneMin:120,
        habZoneMax :300,
        radius:60,
        constellation:83,
        planets:[{name:"GJ 180 b",
        img:  {uri:jovanbase64Icon},
        type: resource.superEarth,
        distance: 11.69,
        esi:0.7,
        discYear: 2014,
        radius: 15,
        starDistance: 150,
      } , {name:"GJ 180 c",
        img:  {uri:terranbase64Icon},
        type: resource.superEarth,
        distance: 11.69,
        esi:0.7,
        discYear: 2014,
        radius: 25,
        starDistance: 600,

      }]

  
      }as Star
    
    
    
   ] 