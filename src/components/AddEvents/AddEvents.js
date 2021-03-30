import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const AddEvents = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [imageURL, setImageURL] = useState(null);

    const onSubmit = data => {
      const eventData = {
        name: data.name,
        imageURL: imageURL
      };

      const url = `https://infinite-savannah-64457.herokuapp.com/addEvent`;

      fetch(url,{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body: JSON.stringify(eventData)
      })
      .then(res => console.log('server side response ', res))
    };

    const handleImageUpload = event =>{
        // console.log(event.target.files[0]);
        const imageData = new FormData();
        imageData.set('key', '28dc48b6a06e6e1806a389a8a20f48be');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', imageData)
          .then(function (response) {
            setImageURL(response.data.data.display_url);
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    return (
        <div>
            <h1>Add your awesome Event here</h1>
            <form onSubmit={handleSubmit(onSubmit)}>

                <input name="name" defaultValue="New exciting Event" ref={register} />
                <br/>
                <input name="exampleRequired" type="file" onChange={handleImageUpload}/>
                <br/>
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddEvents;