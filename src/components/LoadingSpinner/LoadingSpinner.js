import React from 'react';

const LoadingSpinner = () => {
    return (
        <div className='h-screen flex flex-col justify-center items-center'>
            <h2 >Loading</h2>
            <progress className="progress w-56 "></progress>
        </div>
    );
};

export default LoadingSpinner;