import { useEffect } from "react";
import './PrefQuestion.css';


const PrefQuestion = ({question, inputVals, idy}) => {
    const {code, type, stem, instructions} = question;
    // inputVals.current.push(inputVal);

    useEffect(() => {
            inputVals.current.push(null);
    }, [])
    if (stem) {
    function setText (e) {
        inputVals.current[idy] = e.target.value;
    }

    function setVal(value) {
        return(() => {
            inputVals.current[idy] = value;
        })}
    return (
        <div className="question">
            <h2>{stem}</h2>
                <label key={1}>Strongly Disagree<input onClick={setVal(1)} type="radio" name={code} value={1}></input></label>
                <label key={2}>Disagree<input onClick={setVal(2)} type="radio" name={code} value={2}></input></label>
                <label key={3}>Agree<input onClick={setVal(3)} type="radio" name={code} value={3}></input></label>
                <label key={4}>Strongly Agree<input onClick={setVal(4)} type="radio" name={code} value={4}></input></label>
        </div>
        )
    } else { return (null) }
}

export default PrefQuestion