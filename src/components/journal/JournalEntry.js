const JournalEntry = () => {
    return ( 
        <div className='journal__entry'>
            <div className='journal__entry-picture' 
                style={{
                    backgroundSize: 'cover',
                    backgroundImage: 'url(https://i.pinimg.com/736x/3f/21/e1/3f21e12b665ffcdb45ed010c0f313df1.jpg)'}}>
            </div>

            <div className='journal__entry-body'>
                <h4 className='journal__entry-title'>
                    Journal title
                </h4>
                <p className='journal__entry-content'>
                    wasd wasd wasd wasd wasd wasd wasd wasd wasd wasd wasd wasd wasd wasd wasd wasd wasd wasd wasd wasd wasd
                </p>
            </div>

            <div className='journal__entry-date-box'>
                <span>Monday</span>
                <h6>28</h6>
            </div>
        </div>
     );
}
 
export default JournalEntry;