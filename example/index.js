import React from "react";
import {Picker, View} from "react-native";

// const Country = country array
const temp = ['option item 1','option item 2','option item 3','option item 4','option item 5'];

export default class Test extends React.Component {
  state = {selectedValue: ''};

  change = (d, i) => {
    this.setState({selectedValue: Country[i].name});
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <CustomPicker
          mode='modal'
          selectedValue={this.state.selectedValue}
          onValueChange={(d, i) => this.change(d, i)}
          collapseViewStyle={{backgroundColor: 'white'}}>
          {
            Country.map(
              (d, i) => <Picker.Item key={d} label={d.name} value={d.dial_code} />
            )
          }
        </CustomPicker>

        <CustomPicker
          selectedValue={this.state.selectedValue}
          onValueChange={(d, i) => this.change(d, i)}>
          {
            Country.map(
              (d, i) => <Picker.Item key={d} label={d.name} value={d.dial_code} />
            )
          }
        </CustomPicker>

        <CustomPicker
          data={temp}
          onValueChange={(d, i) => this.change(d, i)} />
      </View>
    );
  }
}
