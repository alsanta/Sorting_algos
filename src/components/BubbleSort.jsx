import React from 'react';
import { stringToArray, arrayToString } from './HelperFunctions';


const BubbleSort = (props) => {

    const bubbleSort = numArr => {
        for (let y = numArr.length - 1; y >= 0; y--) {
            for (let x = 0; x < numArr.length; x++) {
                let temp = numArr[x];
                if (numArr[x] > numArr[x + 1]) {
                    numArr[x] = numArr[x + 1];
                    numArr[x + 1] = temp;
                }
            }
        }
        return numArr;
    }

    return (
        <div className='d-flex flex-column align-items-center'>
            <h1>Bubble Sort</h1>
            <h2>{arrayToString(bubbleSort(stringToArray(props.numbers)))}</h2>
        </div>
    );
}

export default BubbleSort;