import { useSelector } from "react-redux";
import JournalEntry from "./JournalEntry";

const JournalEntries = () => {

    const {notes} = useSelector(state => state.notes)

    //const entries = [1,2,3,4,5,6,7,8,9,10]

    return ( 
        <div className='journal__entries'>
            {
                notes.map(note => (
                    <JournalEntry key={note.id} note={note}/>
                ))
            }
        </div>
     );
}
 
export default JournalEntries;