import PropTypes from "prop-types";

export const Counter = ({ value }) => {
  return (
    <div>
      <h3>Counter App</h3>
      <label>{value}</label>
    </div>
  );
};

Counter.propTypes = {
  value: PropTypes.number.isRequired,
};
