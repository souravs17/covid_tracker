import React, { Component } from "react";
import { connect } from "react-redux";
import BarChart from "../Component/Charts/BarChart/BarChart";
import GridContainer from "../Component/Grid/GridContaner/GridContainer";
import GridItem from "../Component/Grid/GridItem/GridItem";

class ChartView extends Component {
  render() {
    const { total, recovered, deaths, countryName } = this.props;
    return (
      <GridContainer>
        <GridItem xs={12} md={8}>
          <BarChart
            data={[
              ["Type", "# of cases", { role: "style" }],
              ["Total", total, "#6495ED"],
              ["Recovered", recovered, "#4cbb17"],
              ["Deaths", deaths, "#ed4337"],
            ]}
            options={{
              title: `# of cases of ${countryName}`,
              subtitle: "Active cases, Recovered cases, and Deaths",
              legend: { position: "none" },
            }}
          />
        </GridItem>
      </GridContainer>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    countryName: state.dashboard.countryName,
    total: state.dashboard.total,
    recovered: state.dashboard.recovered,
    deaths: state.dashboard.deaths,
    ownProps: ownProps,
  };
};

export default connect(mapStateToProps, null)(ChartView);
