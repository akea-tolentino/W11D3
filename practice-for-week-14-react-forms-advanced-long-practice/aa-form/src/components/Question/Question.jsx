import { useState, useEffect } from "react";
import './Question.css';


const Question = ({question, inputVals, idy}) => {
    const {type, stem, options, lines} = question;
    // inputVals.current.push(inputVal);

    useEffect(() => {
            inputVals.current.push(null);
    }, [])

    function setText (e) {
        inputVals.current[idy] = e.target.value;
    }

    if (type === 'mcq') {
        // inputVals.current.push(inputVal);

        function setVal(value) {
            return(() => {
                // console.log(value);
                inputVals.current[idy] = value;
                // setInputVal(value)
            })}
        return (
            <div className="question">
                <h2>{stem}</h2>
                {options.map((option, idx) => {
                    return (
                        <label key={idx}>{option.text}<input onClick={setVal(option.value)} type="radio" name={stem} value={option.value}></input></label>
                    )})}
            </div>
        )}
    else if (type === 'cr' && lines === 1) {
        // inputVals.current.push(inputVal);
       return (
            <div className="question">
                <h2>{stem}</h2>
                <input onChange={setText}></input>
            </div>
       )}
    else if (type === 'cr' && lines > 1) {
        // inputVals.current.push(inputVal);
       return (
            <div className="question">
                <h2>{stem}</h2>
                <textarea onChange={setText}></textarea>
            </div>
       )}
    else { return (null) }
}

export default Question