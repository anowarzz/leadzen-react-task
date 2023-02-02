import React from 'react';

const ShortInformationCard = ({client, setDetailInfo}) => {



    return (
        <div> 

            
        <div
          className="flex gap-4 flex-col md:flex-row  bg-white p-4 w-11/12 rounded-lg mx-auto mb-4 items-center"
        >
          <div className="w-full text-center">
            {/* <h2 className="font-bold md:mb-2 text-lg">Company</h2> */}
            <p className="font-semibold"> {client?.company?.name} </p>
          </div>
          <div className="w-full text-center">
            <h2 className="font-semibold md:mb-2 text-lg">Contact</h2>
            <p>{client?.name}</p>
          </div>
          <div className="w-full text-center">
            <h2 className="font-semibold  md:mb-2 text-lg">Street</h2>
            <p>{client?.address?.street}</p>
          </div>
          <div className="w-full text-center">
            <h2 className="font-semibold md:mb-2 text-lg">City</h2>
            <p>{client?.address?.city}</p>
          </div>
          <div className="w-full text-center">
        <label 
        onClick={() => setDetailInfo(client)}
        htmlFor="detailModal" className="btn btn-error py-2 px-3 rounded">View Details</label>

          </div>
        </div>

      </div>
    );
};

export default ShortInformationCard;