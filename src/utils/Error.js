import React from 'react';

const Error = ({message}) => {
    return (
        <div className='text-danger bg-warning'>
           <p>{message}</p> 
        </div>
    );
}

export default Error;
