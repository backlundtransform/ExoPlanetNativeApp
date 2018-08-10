export const PLANETS_AVAILABLE = 'PLANETS_AVAILABLE';
export const SEARCH_FILTER = 'SEARCH_FILTER';

import {PlanetList,GetPlanetListAsync,GetPlanetList,filter,Planet,SearchPageState} from '../../service/getPlanets';

export  const getData=(filter:filter)=>{
    return (dispatch, getState) => {

        
        GetPlanetListAsync(filter,getState().searchReducer).then((planets)=>{
             console.log(planets)
                dispatch({type: PLANETS_AVAILABLE, planets:planets});

             });
        

 
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