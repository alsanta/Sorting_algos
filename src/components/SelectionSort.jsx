import React from 'react';
import { stringToArray, arrayToString } from './HelperFunctions';


const SelectionSort = (props) => {

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