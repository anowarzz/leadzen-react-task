import React from 'react';

const DetailInformationModal = ({detailInfo}) => {
    return (
        <div>

<input type="checkbox" id="detailModal" className="modal-toggle" />
<div className="modal">
  <div className="modal-box w-11/12 max-w-5xl">
    <h3 className="font-bold text-lg">Description</h3>
    <p className="py-4">This is a dynamic text that will change along with the client details</p>


<div className='mt-4 flex justify-around'>

<div className='flex flex-col'>    
<h5 className='font-bold lmd:text-lg'>Contact Person</h5>
<p className='mb-2'>{detailInfo.name}</p>
<h5 className='font-bold md:text-lg'>Designation</h5>
<p className='mb-2'>{detailInfo.name}</p>
<h5 className='font-bold md:text-lg'>Email</h5>
<p className='mb-2'>{detailInfo.email}</p>
<h5 className='font-bold md:text-lg'>Phones</h5>
<p className='mb-1'>{detailInfo.phone}</p>

</div>

<div className='flex flex-col'>
<h5 className='font-bold lmd:text-lg'>Address</h5>
<p className='mb-2'>{detailInfo?.address?.street}</p>
<h5 className='font-bold md:text-lg'>Website</h5>
<p className='mb-2'>{detailInfo?.website}</p>
<h5 className='font-bold md:text-lg'>User Name</h5>
<p className='mb-2'>{detailInfo?.username}</p>
<h5 className='font-bold md:text-lg'>City</h5>
<p className='mb-1'>{detailInfo?.address?.city}</p>

</div>


</div>


    <div className="modal-action">
      <label htmlFor="detailModal" className="btn">Hide Details</label>
    </div>
  </div>
</div>
        </div>
    );
};

export default DetailInformationModal;