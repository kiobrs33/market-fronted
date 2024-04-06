import PropTypes from "prop-types";

export const Register = ({ email, username, password }) => {
  return (
    <div>
      <h1>Register</h1>
      <ul>
        <li>{email}</li>
        <li>{username}</li>
        <li>{password}</li>
      </ul>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
        magnam nemo in corporis totam, minima suscipit dolorum similique
        molestias perspiciatis, explicabo voluptatibus quisquam soluta modi
        porro veniam enim fuga iste.
      </p>
    </div>
  );
};

Register.propTypes = {
  email: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
};

Register.defaultProps = {
  email: "example@gmail.com",
  username: "examplename",
  password: "12345678",
}
