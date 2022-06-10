import PropTypes from 'prop-types'
import moment from 'moment'
import { useDispatch } from 'react-redux'
import { activeNote } from '../../actions/notes'

const JournalEntry = ({ note }) => {

    const { id, title, content, date, url } = note

    const dispatch = useDispatch()

    const handleActiveNote = () => {
        dispatch(activeNote(id, note))
    }

    return (
        <div className='journal__entry' onClick={handleActiveNote}>
            {
                url &&
                <div className='journal__entry-picture'
                    style={{
                        backgroundSize: 'cover',
                        backgroundImage: `url(${url})`
                    }}>
                </div>
            }

            <div className='journal__entry-body'>
                <h4 className='journal__entry-title'>
                    {title}
                </h4>
                <p className='journal__entry-content'>
                    {content}
                </p>
            </div>

            <div className='journal__entry-date-box'>
                <span>{moment(date).format('dddd')}</span>
                <h6>{moment(date).format('DD')}</h6>
            </div>
        </div>
    );
}

export default JournalEntry;

JournalEntry.propTypes = {
    note: PropTypes.object.isRequired
}