import React from 'react';

const Event = ({event}) => {
    const deleteEvent = id =>{
        const url=`http://localhost:5000/deleteEvent/${id}`;
        fetch(url,{
            method:'DELETE',
            headers:{
                'Content-Type':'application/json'
            }
        })
        .then(res => setTimeout(()=>{
            window.location.reload(true)
        },3000))
        
    }
    return (
        <div className="col-md-3">
            <img style={{height: '300px'}} src={event.imageURL} alt=""/>
            <h3>{event.name} <button onClick={()=>deleteEvent(event._id)}>Delete</button></h3>
        </div>
    );
};

export default Event;