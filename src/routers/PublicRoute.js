import PropTypes from 'prop-types';
import { Redirect, Route } from "react-router-dom";

const PublicRoute = ({component: Component, isLoggedIn, ...rest}) => {
    return (
        <Route {...rest} component={ (props) => (
            isLoggedIn ? <Redirect to="/" /> : <Component {...props} />
        )}/> 
    )
}
 
export default PublicRoute;

PublicRoute.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}