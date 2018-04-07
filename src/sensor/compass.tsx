import RNSimpleCompass from 'react-native-simple-compass';




export const compass=(degree_update_rate:number) =>{RNSimpleCompass.start(degree_update_rate, (degree) => {
  return degree

});} 