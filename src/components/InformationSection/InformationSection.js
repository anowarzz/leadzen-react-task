import axios from 'axios';
import React, { useDebugValue, useEffect, useState } from 'react';

const InformationSection = () => {


const [clients, setClients] = useState(null)


// Loading data from database through api
useEffect( () => {
axios.get("https://jsonplaceholder.typicode.com/users")
.then(response => {
console.log(response);
setClients(response.data)
})
.catch((err) => {
    console.log(err);
    
})

}, [])



    return (
        <div>
            {
                clients && clients?.map(client => <div className= 'flex justify-between bg-white h-24 px-4 w-11/12 rounded-lg mx-auto mb-4 items-center'>
                    
                    <div>
                        <h2>Name</h2>
                        <p>Imran Dhala</p>
                    </div>
                    <div>
                <h2>Contact</h2>
                <p>Delhi</p>
                    </div>
                    <div>
                <h2>City</h2>
                    </div>
                    <div>
                <h2>State</h2>
                    </div>
                    <div>
                    <button className='btn btn bg-red-400'>Details</button>
                    </div>
                    
                     </div>
                     )
            }
        </div>
    );
};

export default InformationSection;