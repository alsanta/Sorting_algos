import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const BubbleSort = (props) => {
//     const [vName,setVName] = useState('');
//     const history = useHistory();
//     const {ParamNameFromRoute, otherParam, anotherParam} = useParams();

const stringToWordArray = string => {
    let output = [];
    for (let i = 0; i < string.length; i++) {
        if (string[i] != " "){
            let word = "";
            while(string[i] != " "){
                word += string[i];
                i++;
                if (i == string.length){break;}
            }
            output.push(parseInt(word));
        }
    }
    return output;
}

const bubbleSort = numArr => {
    for (let y = numArr.length-1; y >= 0; y--) {
        for (let x = 0; x < numArr.length; x++) {
            let temp = numArr[x];
            if (numArr[x] > numArr[x+1]) {
                numArr[x] = numArr[x+1];
                numArr[x+1] = temp;
            }
        }
    }
    return numArr;
}

    return (
        <div className='d-flex flex-column align-items-center'>
            <h1>Bubble Sort</h1>
            <h2>{bubbleSort(stringToWordArray(props.numbers))}</h2>
        </div>
    );
}

export default BubbleSort;