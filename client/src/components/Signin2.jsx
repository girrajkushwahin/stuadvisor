import React from 'react';

const Signin2 = ({ data, ph, typ, name, val, inputData }) => {
    return (
        <>
            <label className='sign-in-tags lables'>{data}</label>
            <input className='sign-in-tags input-sign' placeholder={ph} type={typ} name={name} value={val} onChange={inputData} required />
        </>
    )
}

export default Signin2;