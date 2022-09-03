import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const BubbleSort = (props) => {
//     const [vName,setVName] = useState('');
//     const history = useHistory();
//     const {ParamNameFromRoute, otherParam, anotherParam} = useParams();

    return (
        <div className='d-flex flex-column align-items-center'>
            <h1>Bubble Sort</h1>
            <h2>{props.numbers}</h2>
        </div>
    );
}

export default BubbleSort;