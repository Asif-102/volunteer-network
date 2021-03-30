import React, { useState } from 'react';

const Event = ({event}) => {
    const [display, setDisplay] = useState('block')
    const deleteEvent = id =>{
        const url=`https://infinite-savannah-64457.herokuapp.com/${id}`;
        fetch(url,{
            method:'DELETE',
            headers:{
                'Content-Type':'application/json'
            }
        })
        .then(res => setDisplay('none')) 
    }
    return (
        <div className="col-md-3" style={{display:display}}>
            <img style={{height: '300px'}} src={event.imageURL} alt=""/>
            <h3>{event.name} <button onClick={()=>deleteEvent(event._id)}>Delete</button></h3>
        </div>
    );
};

export default Event;