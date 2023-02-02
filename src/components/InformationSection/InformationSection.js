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
                clients && clients?.map(client => <div className= 'flex gap-4 flex-col md:flex-row  bg-white p-4 w-11/12 rounded-lg mx-auto mb-4 items-center' key={client.id}>
                    
                    <div className='w-full mx-auto'>
                        <h2 className="font-bold mb-2 text-lg">Company</h2>
                        <p> {client?.company?.name} </p>
                    </div>
                    <div className='w-full'>
                <h2 className="font-bold mb-2 text-lg">Contact</h2>
                <p>{client?.name}</p>
                    </div>
                    <div className='w-full'>
                <h2 className="font-bold mb-2 text-lg">Street</h2>
                <p>{client?.address?.street}</p>
                    </div>
                    <div className='w-full items-center'>
                <h2 className="font-bold mb-2 text-lg">City</h2>
                <p>{client?.address?.city}</p>
                    </div>
                    <div className=''>
                    <button className='btn btn bg-red-400 py-2 px-3 rounded'>Details</button>
                    </div>
                    
                     </div>
                     )
            }
        </div>
    );
};

export default InformationSection;