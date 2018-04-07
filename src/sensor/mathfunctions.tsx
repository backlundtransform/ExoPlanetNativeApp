export const siderealtime=(longitude:number, min:number, days: number):number =>{
	let startime=0.0657098*days-17.41409 +((min+4*longitude)/60)*1.002737909;
	if(startime<0){	
		startime=startime+24;
	}
	
	if(startime>24){
		startime=startime-24;
	}
	
	return startime;
	
 }

 export const declination = ( latitude:number, altitude:number, azimuth:number):number=>{
		
	let sindec=Math.sin(toRadians(latitude))*Math.sin(toRadians(altitude))-Math.cos(toRadians(latitude))*Math.cos(toRadians(altitude))*Math.cos(toRadians(azimuth_angle(azimuth)));
	
	return toDegrees(Math.asin(sindec));
	
 }

export const toRadians=(value:number)=> {

    return value * Math.PI / 180;
}
export const toDegrees=(value:number)=> {

    return value * 180/ Math.PI ;
}

export const  azimuth_angle=(azimuth:number):number =>{

	if(azimuth>180)
	{
     return azimuth-180;
	}

	if(azimuth<180)
	{
    return azimuth+180;
	}
	return azimuth;
			
		}

export const hourangle=(latitude:number,altitude:number, azimuth:number)=>{
            let numerator=Math.sin(toRadians(azimuth_angle(azimuth)));
	     	let denominator=Math.cos(toRadians(azimuth_angle(azimuth)))*Math.sin(toRadians(latitude))+Math.tan(toRadians(altitude))*Math.cos(toRadians(latitude));
			
			return toDegrees(Math.atan2(numerator,denominator));
					
					
			}

export const right_ascension=(hour:number,hourangle:number)=>{
	const right_ascension=Math.abs(hour*15-hourangle);
	
	if(right_ascension>360)
	{
		return right_ascension-360;
		
	}
	
		return right_ascension;
	
	}