import PropTypes from 'prop-types';
import { Redirect, Route } from "react-router-dom";

const PrivateRoute = ({component: Component, isLoggedIn, ...rest}) => {
    return (
        <Route {...rest} component={ (props) => (
            isLoggedIn ? <Component {...props} /> : <Redirect to="/auth/login" />
        )}/>
    )
}
 
export default PrivateRoute;

PrivateRoute.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}
