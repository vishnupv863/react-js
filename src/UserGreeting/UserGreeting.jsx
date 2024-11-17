import styles from './UserGreeting.module.css'
import PropTypes from 'prop-types'

function UserGreeting(props) {
    const welcomeMessage = <h2 className={styles.welcomeMessage}>welcome {props.username}</h2>;
    const loginMessage = <h2 className={styles.loginMessage}>Plese login with user credentials</h2>;
    return (props.isLoggedIn ? welcomeMessage : loginMessage);
}

UserGreeting.PropTypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string
}

UserGreeting.defaultProps = {
    isLoggedIn: false,
    username: "Guest"
}

export default UserGreeting;