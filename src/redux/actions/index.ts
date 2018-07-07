export const PLANETS_AVAILABLE = 'PLANETS_AVAILABLE';
export const SEARCH_FILTER = 'SEARCH_FILTER';

import {PlanetList,GetPlanetList,filter,Planet,SearchPageState} from '../../service/getPlanets';

export  const getData=(filter:filter)=>{
    return (dispatch, getState) => {

        setTimeout(() => {
            const planets  = GetPlanetList(filter,getState().searchReducer);
            dispatch({type: PLANETS_AVAILABLE, planets:planets});
        }, 2000);
 
    };  
}
export const getPlanets =()=>{

    return (dispatch, getState) => {  

        dispatch(setFilter(getState().planetReducer.planets));
    }
    
   }
export const setFilter=(filter:SearchPageState)=>{

    return (dispatch) => {  
     dispatch({type: SEARCH_FILTER, filter:filter})
    }
    
   }