import  * as React from "react";
import { AppRegistry, StyleSheet, Dimensions, View } from "react-native";
import { GameLoop } from "react-native-game-engine";
 
const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");
const RADIUS = 25;
 
export default class Simulator extends React.PureComponent<any,{x:number,y:number}> {
  constructor(props) {
    super(props);

    this.state = {
      x: WIDTH / 2 - RADIUS,
      y: HEIGHT / 2 - RADIUS
    };
  }
 
  updateHandler = ({ touches, screen, time }) => {
    let move = touches.find(x => x.type === "move");
    if (move) {
      this.setState({
        x: this.state.x + move.delta.pageX,
        y: this.state.y + move.delta.pageY
      });
    }
  };
 
  render() {
    return (
      <GameLoop style={styles.container} onUpdate={this.updateHandler}>
 
        <View style={[styles.player, { left: this.state.x, top: this.state.y }]} />
 
      </GameLoop>
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF"
  },
  player: {
    position: "absolute",
    backgroundColor: "pink",
    width: RADIUS * 2,
    height: RADIUS * 2,
    borderRadius: RADIUS * 2
  }
});
 