import{resource} from '../config/Resource'

import{Planet, Star, terranbase64Icon,jovanbase64Icon,  redIcon,  orangeIcon} from './getPlanets'

export const SolarSystem=(star:Star):Star=>{

    return SolarSystems.find(p=>p.Name==star.Name);
}

export const ConstellationSolarSystems=(constellation:number):Array<Star>=>{

  return SolarSystems.filter(p=>p.Constellation===constellation);
}

export const SolarSystems= [
    
  {
        Name:"1RXS 1609",
        Type: resource.orange,
        Img:{uri:orangeIcon},
        HabZoneMin:350,
        HabZoneMax : 400,
        Radius:60,
        Planets:[{Name:"1RXS 1609 b",
        Img: {uri:jovanbase64Icon},
        Type: resource.hotJovian,
        Distance: 145.00,
        Esi:0,
        DiscYear:2008,
        Radius: 25,
        starDistance: 200,
       
      }, ]

      }as Star,

     {
        Name:"GJ 180",
        Type: resource.red,
        Img:{uri:redIcon},
        HabZoneMin:120,
        HabZoneMax :300,
        Radius:60,
        Constellation:1,
        Planets:[{Name:"GJ 180 b",
        Img:  {uri:jovanbase64Icon},
        Type: resource.superEarth,
        Distance: 11.69,
        Esi:0.7,
        DiscYear: 2014,
        Radius: 15,
        starDistance: 150,
      } , {Name:"GJ 180 c",
        Img:  {uri:terranbase64Icon},
        Type: resource.superEarth,
        Distance: 11.69,
        Esi:0.7,
        DiscYear: 2014,
        Radius: 25,
        starDistance: 600,

      }]

  
      }as Star
    
    
    
   ] 