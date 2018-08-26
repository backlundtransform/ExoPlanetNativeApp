export const PLANETS_AVAILABLE = 'PLANETS_AVAILABLE';
export const SEARCH_FILTER = 'SEARCH_FILTER';
export const PLANETS_COLOR = 'PLANETS_COLOR';
import {GetPlanetListAsync,filter,Planet,SearchPageState} from '../../service/getPlanets';
import { AsyncStorage } from "react-native"

export  const getData=(filter:filter, top:number)=>{
    return (dispatch, getState) => {
         
      
        GetPlanetListAsync(filter,getState().searchReducer, top).then((planets)=>{
           if(planets.length>0){
                dispatch({type: PLANETS_AVAILABLE, planets:planets});
            }
             });
        

 
    };  
}
export const getPlanets =()=>{

    return (dispatch, getState) => {  

        dispatch(setFilter(getState().planetReducer.planets));
    }
    
   }


export const setFilter=(filter:SearchPageState)=>{



    AsyncStorage.setItem('filter', JSON.stringify(filter));


   
    return (dispatch) => {  
     dispatch({type: SEARCH_FILTER, filter:filter})
    }
    
   }