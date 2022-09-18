import React from 'react';
import { stringToArray, arrayToString } from './HelperFunctions';


const MergSort = (props) => {

    const mergeJoin = (arr1, arr2, pos1 = 0, pos2 = 0, result = []) => {
        if (pos1 > arr1.length - 1 && pos2 > arr2.length - 1) {
            return result;
        }
        else {
            if (pos1 <= arr1.length - 1 && pos2 <= arr2.length - 1) {
                if (arr1[pos1] < arr2[pos2]) {
                    result.push(arr1[pos1]);
                    return mergeJoin(arr1, arr2, pos1 + 1, pos2, result);
                }
                else if (arr1[pos1] > arr2[pos2]) {
                    result.push(arr2[pos2]);
                    return mergeJoin(arr1, arr2, pos1, pos2 + 1, result);
                }
                else {
                    result.push(arr1[pos1]);
                    result.push(arr2[pos2]);
                    return mergeJoin(arr1, arr2, pos1 + 1, pos2 + 1, result);
                }
            }
            else if (pos1 === arr1.length && pos2 <= arr2.length - 1) {
                result.push(arr2[pos2]);
                return mergeJoin(arr1, arr2, pos1, pos2 + 1, result);
            }
            else {
                result.push(arr1[pos1]);
                return mergeJoin(arr1, arr2, pos1 + 1, pos2, result);
            }
        }
    }

    const mergeSort = arr => {
        if (arr.length <= 1) { return arr; }
        if (arr.length % 2 === 0) {
            const left = arr.slice(0, Math.ceil(arr.length / 2));
            const right = arr.slice(-Math.ceil(arr.length / 2));
            return mergeJoin(mergeSort(left), mergeSort(right));
        }
        else if (arr.length % 2 === 1) {
            const left = arr.slice(0, Math.ceil(arr.length / 2));
            const right = arr.slice(-Math.floor(arr.length / 2));
            return mergeJoin(mergeSort(left), mergeSort(right));
        }
        else {
            return;
        }
    }

    return (
        <div>
            <div className='d-flex flex-column align-items-center'>
                <h1>Merge Sort</h1>
                <h2>{arrayToString(mergeSort(stringToArray(props.numbers)))}</h2>
            </div>
        </div>
    );
}

export default MergSort;