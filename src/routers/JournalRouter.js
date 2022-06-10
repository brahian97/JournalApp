import {
    BrowserRouter as Switch,
    Redirect,
    Route
} from "react-router-dom";
import JournalScreen from "../components/journal/JournalScreen";

const JournalRouter = () => {
    return (
        <Switch>
            <Route exact={true} path='/' component={JournalScreen} />
            
            <Redirect to='/' />
        </Switch>
    );
}

export default JournalRouter;