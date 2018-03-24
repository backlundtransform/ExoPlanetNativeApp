import{resource} from '../config/Resource'

import{Planet, Star, terranbase64Icon,jovanbase64Icon,  redIcon,  orangeIcon} from './getPlanets'

export const SolarSystem=(star:Star):Star=>{

    return SolarSystems.find(p=>p.Name==star.Name);
}

export const SolarSystems= [
    
  {
        Name:"1RXS 1609",
        Type: resource.orange,
        Img:{uri:orangeIcon},
        HabZoneMin:4,
        HabZoneMax : 6,
        Radius:2,
        Planets:[ 
    
    
        {Name:"1RXS 1609 b",
        Img: {uri:jovanbase64Icon},
        Type: resource.hotJovian,
        Distance: 145.00,
        Esi:0,
        DiscYear:2008,
        Radius: 6,
        starDistance: 3,
       
      }, ]

      }as Star,

     {
        Name:"GJ 180",
        Type: resource.red,
        Img:{uri:redIcon},
        HabZoneMin:8,
        HabZoneMax : 10,
        Radius:2,
        Planets:[{Name:"GJ 180 b",
        Img:  {uri:jovanbase64Icon},
        Type: resource.superEarth,
        Distance: 11.69,
        Esi:0.7,
        DiscYear: 2014,
        Radius: 10,
        starDistance: 9,
      } , {Name:"GJ 180 c",
        Img:  {uri:terranbase64Icon},
        Type: resource.superEarth,
        Distance: 11.69,
        Esi:0.7,
        DiscYear: 2014,
        Radius: 2,
        starDistance: 12,

      }]

  
      }as Star
    
    
    
   ] 