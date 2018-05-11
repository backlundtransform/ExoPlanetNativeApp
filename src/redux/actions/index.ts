export const PLANETS_AVAILABLE = 'PLANETS_AVAILABLE';

import {PlanetList,GetPlanetList,filter} from '../../service/getPlanets';
 
export  const getData=(filter:filter)=>{
    return (dispatch) => {

        setTimeout(() => {
            const planets  = GetPlanetList(filter);
            dispatch({type: PLANETS_AVAILABLE, planets:planets});
        }, 2000);
 
    };
}