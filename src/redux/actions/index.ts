export const PLANETS_AVAILABLE = 'PLANETS_AVAILABLE';
export const SEARCH_FILTER = 'SEARCH_FILTER';
import {PlanetList,GetPlanetList,filter,Planet} from '../../service/getPlanets';
 
export  const getData=(filter:filter)=>{
    return (dispatch) => {
      
        setTimeout(() => {
            const planets  = GetPlanetList(filter);
            dispatch({type: PLANETS_AVAILABLE, planets:planets});
        }, 2000);
 
    };  
}

export const setFilter=(filter:Array<Planet>)=>{

    return (dispatch) => {  

        dispatch({type: SEARCH_FILTER, planets:filter});


    }
    
 
   }