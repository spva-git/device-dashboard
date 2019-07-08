import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { actions, selectors } from "./duck";
import { DeviceReadings } from "../../components";

class DeviceReadingsContainer extends React.Component {
  componentDidMount() {
    this.props.requestDeviceReadings();
  }

  render() {
    return <DeviceReadings entries={this.props.items} />;
  }
}

const stateToProps = state => {
  return {
    items: selectors.getItems(state)
  };
};

const dispatchToProps = dispatch => {
  return bindActionCreators(actions, dispatch);
};

export default connect(
  stateToProps,
  dispatchToProps
)(DeviceReadingsContainer);
