import {
    BrowserRouter as Switch,
    Route
} from "react-router-dom";
import JournalScreen from "../components/journal/JournalScreen";
import ProfileScreen from "../components/profile/ProfileScreen";

const JournalRouter = () => {
    return (
        <Switch>
            <Route exact={true} path='/profile' component={ProfileScreen} />
            <Route exact={true} path='/' component={JournalScreen} />
            
        </Switch>
    );
}

export default JournalRouter;