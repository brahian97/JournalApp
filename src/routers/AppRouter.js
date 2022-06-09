import { useEffect, useState } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Redirect
} from "react-router-dom";
import AuthRouter from "./AuthRouter";
import { firebase } from '../firebase/firebase-config'
import { useDispatch } from "react-redux";
import { login } from "../actions/auth";
import LoadingScreen from "../components/ui/LoadingScreen";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";
import JournalRouter from "./JournalRouter";

const AppRouter = () => {

    const dispatch = useDispatch()
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [checking, setChecking] = useState(true)

    useEffect(() => {
        firebase.auth().onAuthStateChanged(user => {
            if (user?.uid) {
                dispatch(login(user.uid, user.displayName, user.email))
                setIsLoggedIn(true)
            } else {
                setIsLoggedIn(false)
            }
            setChecking(false)
        })
    }, [dispatch, setChecking, setIsLoggedIn])


    if (checking) {
        return <LoadingScreen />
    } else {
        return (
            <Router>
                <div>
                    <Switch>
                        <PublicRoute path='/auth' isLoggedIn={isLoggedIn} component={ AuthRouter }/>
                        <PrivateRoute path='/' isLoggedIn={isLoggedIn} component={ JournalRouter } exact />

                        <Redirect to='/auth/login' />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default AppRouter;