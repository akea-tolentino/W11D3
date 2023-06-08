import { useState, useEffect, useRef } from "react"
import PrefQuestion from "../PrefQuestion";
import './PreferencesSurvey.css';

const PreferencesSurvey = () => {
    const [sampleData, setSampleData] = useState(null);

    const inputVals = useRef([]);
   

    useEffect(() => {
        const retrieveSampleData = async () => {
            const res = await fetch('_assets/spi.json', {
                headers: {
                    "Content-Type": 'application/json',
                    "Accept": 'application/json'
                }
            });
            
            console.log('res', res)
            const sample = await res.json();
            console.log('sample', sample);
            setSampleData(sample);
        }
        retrieveSampleData();
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('submitted');
        console.log('input vals', inputVals.current);
    }

    return (sampleData) ? (
        <>
            <form className="sample-form" onSubmit={handleSubmit}>
                {sampleData.questions.map((question, idx) => {
                    return(
                    <PrefQuestion key={idx} idy={idx} question={question} inputVals={inputVals}/>
                    )})}
                <button>Submit</button>
            </form>
        </>
    ) : (<h2>content loading...</h2>)
}

export default PreferencesSurvey