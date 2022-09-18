import React from 'react';
import { stringToArray, arrayToString } from './HelperFunctions';


const InsertionSort = (props) => {

    const insertionSort = (arr) => {
        for (let x = 0; x < arr.length; x++) {
            let y = x;
            while (arr[y] < arr[y - 1]) {
                [arr[y], arr[y - 1]] = [arr[y - 1], arr[y]]
                y--
            }
        }
        return arr
    }

    return (
        <div className='d-flex flex-column align-items-center'>
            <h1>Insertion Sort</h1>
            <h2>{arrayToString(insertionSort(stringToArray(props.numbers)))}</h2>
        </div>
    );
}

export default InsertionSort;