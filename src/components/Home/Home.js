import React, { useEffect, useState } from 'react';
import Event from '../Event/Event';



const Home = () => {

    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetch('https://infinite-savannah-64457.herokuapp.com/events')
            .then(res => res.json())
            .then(data => setEvents(data))
    }, [])

    return (
        <div className="row">
            {
                events.length === 0 && <p>Loading ....</p>
            }
            {
                events.map(event => <Event event={event} key={event._id}></Event>)
            }
        </div>
    );
};

export default Home;