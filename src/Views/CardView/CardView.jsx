import React, { Component } from "react";
import GridContainer from "../Component/Grid/GridContaner/GridContainer";
import CardInfo from "./CardInfo/CardInfo";
import { connect } from "react-redux";

class CardView extends Component {
  render() {
    const { total, recovered, deaths } = this.props;
    return (
      <GridContainer>
        <CardInfo cardType="total" value={total} />
        <CardInfo cardType="recovered" value={recovered} />
        <CardInfo cardType="deaths" value={deaths} />
      </GridContainer>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    total: state.dashboard.total,
    recovered: state.dashboard.recovered,
    deaths: state.dashboard.deaths,
    ownProps: ownProps,
  };
};

export default connect(mapStateToProps, null)(CardView);
