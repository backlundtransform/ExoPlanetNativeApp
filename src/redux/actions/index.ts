export const PLANETS_AVAILABLE = 'PLANETS_AVAILABLE';
export const SEARCH_FILTER = 'SEARCH_FILTER';
export const GET_PLANETS= 'GET_PLANETS';
import {PlanetList,GetPlanetList,filter,Planet} from '../../service/getPlanets';

export  const getData=(filter:filter)=>{
    return (dispatch, getState) => {
      
        setTimeout(() => {
            const planets  = GetPlanetList(filter,getState().planetReducer.planets);
            dispatch({type: PLANETS_AVAILABLE, planets:planets});
        }, 2000);
 
    };  
}
export const getPlanets =()=>{

    return (dispatch, getState) => {  

        dispatch(setFilter(getState().planetReducer.planets));
    }
    
   }
export const setFilter=(filter:Array<Planet>)=>{

    return (dispatch) => {  

        dispatch({type: SEARCH_FILTER, planets:filter});
    }
    
   }