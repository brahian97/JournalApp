import {
    BrowserRouter as Switch,
    Route,
    Redirect
  } from "react-router-dom";
import LoginScreen from "../components/auth/LoginScreen";
import RegisterSreen from "../components/auth/RegisterScreen";
import ResetPasswordScreen from "../components/auth/ResetPasswordScreen";

const AuthRouter = () => {
    return ( 
        <div className="auth__main">
            <div className="auth__box-container">
                <Switch>
                    <Route exact path='/auth/login' component={LoginScreen} />
                    <Route exact path='/auth/register' component={RegisterSreen} />
                    <Route exact path='/auth/resetPassword' component={ResetPasswordScreen} />
                    <Redirect to='/auth/login' />
                </Switch>
            </div>
        </div>
     );
}
 
export default AuthRouter;