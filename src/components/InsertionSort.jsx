import React from 'react';
// import { useParams } from 'react-router';
// import { useHistory } from 'react-router-dom';
// import axios from 'axios';

const InsertionSort = (props) => {
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