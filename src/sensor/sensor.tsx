import * as React from 'react';
import { Text, View } from "react-native";
import { decorator as sensors } from "react-native-sensors";
import RNSimpleCompass from 'react-native-simple-compass';
class Sensor extends React.Component<any, any>{
	
	render() {
		const { sensorsFound, Accelerometer } = this.props;

		if (!Accelerometer) {

			return null;
		}
		const degree_update_rate = 3; 
		RNSimpleCompass.start(degree_update_rate, (degree) => {
		  console.log('You are facing', degree);
		  RNSimpleCompass.stop();
		});

		return (
			
				<Text>
					{`Acceleration has value: ${Accelerometer.z},  ${Accelerometer.x}, ${Accelerometer.y}`}
				</Text>
		
		);
	}
}

export default sensors({
	Accelerometer: {
		updateInterval: 1000 
	},
	Gyroscope: true
})(Sensor);