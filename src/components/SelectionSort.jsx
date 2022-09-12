import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router';
// import { useHistory } from 'react-router-dom';
// import axios from 'axios';

const SelectionSort = (props) => {
    //     const [vName,setVName] = useState('');
    //     const history = useHistory();
    //     const {ParamNameFromRoute, otherParam, anotherParam} = useParams();

    const stringToArray = string => {
        let output = [];
        for (let i = 0; i < string.length; i++) {
            if (string[i] !== " ") {
                let num = "";
                while (string[i] !== " ") {
                    num += string[i];
                    i++;
                    if (i === string.length) { break; }
                }
                output.push(parseInt(num));
            }
        }
        return output;
    }

    const arrayToString = input => {
        let output = "";
        for (let i = 0; i < input.length; i++) {
            output += input[i]
            if (i !== input.length - 1) {
                output += " "
            }
        }
        return output
    }

    const selectionSort = arr => {
        for (let i = 0; i < arr.length; i++) {
            let maxIndex = 0;
            for (let j = 0; j < arr.length - i; j++) {
                if (arr[j] > arr[maxIndex]) {
                    maxIndex = j
                }
            }
            [arr[maxIndex], arr[arr.length - 1 - i]] = [arr[arr.length - 1 - i], arr[maxIndex]];
        }
        return arr
    }

    return (
        <div className='d-flex flex-column align-items-center'>
            <h1>Selection Sort</h1>
            <h2>{arrayToString(selectionSort(stringToArray(props.numbers)))}</h2>
        </div>
    );
}

export default SelectionSort;