import React, { PureComponent } from "react";
import FormSelect from "../Component/FormSelect/FormSelect";
import {
  getCountryList,
  getCovidData,
  updateCountryName,
} from "../../Store/Dashboard/DashboardActions";
import { connect } from "react-redux";

class CountryPicker extends PureComponent {
  handleChange = ({ target: { value } }) => {
    this.props.updateCountryName(value);
  };
  componentDidMount() {
    this.props.getCountryList();
    this.props.getCovidData();
  }

  componentDidUpdate(prevProps, prevState) {
    // only update chart if the data has changed
    if (prevProps.countryName !== this.props.countryName) {
      this.props.getCovidData(this.props.countryName);
    }
  }

  render() {
    const { countryName, countryList } = this.props;
    return (
      <FormSelect
        id="countryName"
        label="Select Country"
        value={countryName}
        options={countryList}
        defaultOption="Global"
        optionValue="name"
        optionID="name"
        onChange={this.handleChange}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    countryName: state.dashboard.countryName,
    countryList: state.dashboard.countryList,
    ownProps: ownProps,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getCountryList: () => {
      dispatch(getCountryList());
    },
    getCovidData: (countryName) => {
      dispatch(getCovidData(countryName));
    },
    updateCountryName: (value) => {
      dispatch(updateCountryName(value));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CountryPicker);
