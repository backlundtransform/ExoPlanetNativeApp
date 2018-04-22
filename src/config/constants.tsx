import * as React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../styles/defaultStyle'
import{resource} from '../config/Resource'
import Svg,{
  Circle,
  Ellipse,
  Pattern,
  Path,
Defs,
G,Use

} from 'react-native-svg';
const habmenu= [{
    icon:<Svg  width={30}   height={30} viewBox="0 0 24 24">
    <Path fill="#c6d4ff" d="M12,3C16.97,3 21,6.58 21,11C21,15.42 15,21 12,21C9,21 3,15.42 3,11C3,6.58 7.03,3 12,3M10.31,10.93C9.29,9.29 7.47,8.58 6.25,9.34C5.03,10.1 4.87,12.05 5.89,13.69C6.92,15.33 8.74,16.04 9.96,15.28C11.18,14.5 11.33,12.57 10.31,10.93M13.69,10.93C12.67,12.57 12.82,14.5 14.04,15.28C15.26,16.04 17.08,15.33 18.11,13.69C19.13,12.05 18.97,10.1 17.75,9.34C16.53,8.58 14.71,9.29 13.69,10.93M12,17.75C10,17.75 9.5,17 9.5,17C9.5,17.03 10,19 12,19C14,19 14.5,17 14.5,17C14.5,17 14,17.75 12,17.75Z" />
     </Svg>,
     name:resource.habmenu[0],
     filter:{Key: 'Hab'} 
    },
    {
       icon:<Icon style={styles.habicon} name ={"thermometer-empty"}  />,
       name:resource.habmenu[1],
       filter:{Key: 'Temp', MinValue:-100, MaxValue:-50} 
      
    },
    {
      icon:<Icon style={styles.habicon} name ={"thermometer-half"}  />,
      name:resource.habmenu[2],
      filter:{Key: 'Temp', MinValue:-50, MaxValue:50} 
    },
    {
      icon:<Icon style={styles.habicon} name ={"thermometer"}  />,
      name:resource.habmenu[3],
      filter:{Key: 'Temp', MinValue:50, MaxValue:100} 
    },
    {
      icon:<Icon style={styles.habicon} name ={"globe"}  />,
      name:resource.habmenu[4],
      filter:{Key: 'Esi', MinValue:0.6, MaxValue:1} 
    },
    {
       icon:<Icon style={styles.habicon} name ={"leaf"}  />,
       name:resource.habmenu[5],
       filter:{Key: 'Sph', MinValue:0.6, MaxValue:1} 
    },
    {
       icon:<Icon style={styles.habicon} name ={"moon-o"}  />,
       name:resource.habmenu[6],
       filter:{Key: 'Moons' } 
     }]
     const constellations= [{
      icon:<Svg preserveAspectRatio="xMidYMid meet" viewBox="0 0 640 640"  width="100" height="100"><Defs><Path d="M105.59 387.38L152.79 393.92L118.64 425.61L126.7 470.36L84.48 449.23L42.27 470.36L50.34 425.61L16.18 393.92L63.38 387.38L84.48 346.67L105.59 387.38Z" id="b3KkXt0Qw8"></Path><Path d="M212.22 271.6L259.39 278.29L225.14 309.87L233.06 354.65L190.91 333.38L148.63 354.38L156.84 309.65L122.79 277.85L170.01 271.47L191.24 230.82L212.22 271.6Z" id="a176RDPPe1"></Path><Path d="M378.24 245.69L425.44 252.22L391.29 283.91L399.35 328.67L357.14 307.53L314.92 328.67L322.99 283.91L288.83 252.22L336.03 245.69L357.14 204.97L378.24 245.69Z" id="e1m0C3lTiV"></Path><Path d="M592.8 195.69L640 202.22L605.85 233.91L613.91 278.67L571.7 257.53L529.48 278.67L537.55 233.91L503.39 202.22L550.59 195.69L571.7 154.97L592.8 195.69Z" id="irWkzwP6R"></Path><Path d="M581.59 369.38L628.79 375.92L594.64 407.61L602.7 452.36L560.48 431.23L518.27 452.36L526.34 407.61L492.18 375.92L539.38 369.38L560.48 328.67L581.59 369.38Z" id="ac7NC3PC"></Path><Path d="M413.66 415.6L460.83 422.29L426.58 453.87L434.5 498.65L392.35 477.38L350.07 498.38L358.28 453.65L324.23 421.85L371.45 415.47L392.68 374.82L413.66 415.6Z" id="i5iPYsg1l"></Path></Defs><G><G><G><Use  href="#b3KkXt0Qw8"  width={"10px"} height={"10px"}  fill="#c6d4ff"  ></Use ><G><Use  href="#b3KkXt0Qw8"  width={"5px"} height={"5px"}  fill="#c6d4ff"  fill-opacity="0" stroke="#000000" stroke-width="1"  ></Use ></G></G><G><Use  href="#a176RDPPe1"  width={"10px"} height={"10px"}  fill="#c6d4ff" ></Use ><G><Use  href="#a176RDPPe1"  width={"5px"} height={"5px"}  fill="#c6d4ff"  fill-opacity="0" stroke="#000000" stroke-width="1"  ></Use ></G></G><G><Use  href="#e1m0C3lTiV"  width={"10px"} height={"10px"}  fill="#c6d4ff"  ></Use ><G><Use  href="#e1m0C3lTiV"  width={"5px"} height={"5px"}  fill="#c6d4ff"  fill-opacity="0" stroke="#000000" stroke-width="1"  ></Use ></G></G><G><Use  href="#irWkzwP6R"  width={"10px"} height={"10px"}  fill="#c6d4ff"  ></Use ><G><Use  href="#irWkzwP6R" width={"5px"} height={"5px"}  fill="#c6d4ff"  fill-opacity="0" stroke="#000000" stroke-width="1" ></Use ></G></G><G><Use  href="#ac7NC3PC"  width={"10px"} height={"10px"}  fill="#c6d4ff"></Use ><G><Use  href="#ac7NC3PC"  width={"5px"} height={"5px"}  fill="#c6d4ff" fill-opacity="0" stroke="#000000" stroke-width="1"  ></Use ></G></G><G><Use  href="#i5iPYsg1l"  width={"5px"} height={"5px"}  fill="#c6d4ff"></Use ><G><Use  href="#i5iPYsg1l"  width={"5px"} height={"5px"}  fill="#c6d4ff" fill-opacity="0"  stroke-width="1"  ></Use ></G></G></G></G></Svg>,
       name:resource.const[0],
       id:1
      },
   ]

export const constants ={
tiles:"https://raw.githubusercontent.com/gbanm/ExoPlanetService/master/ExoPlanetHunter.Web/Content/tiles/{z}/tile.jpg",
habmenu,
constellations

}