import React from 'react';

const AddCollege2 = ({ data, name, value, inputData, ph }) => {
    return (
        <>
            <label>{data}</label>
            <input type="text" name={name} value={value} onChange={inputData} placeholder={ph} />
        </>
    )
}

export default AddCollege2;