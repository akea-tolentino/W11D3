import { useState, useEffect } from "react";
import ReactSlider from "react-slider";
import { useClimate } from "../../context/ClimateContext";
import './Thermometer.css';



function Thermometer() {

  const {temperature, setTemperature} = useClimate();
  const [actualTemp, setActualTemp] = useState(temperature);

  useEffect(()=> {
    const incrementTemp = setTimeout(()=> {
      if (actualTemp > temperature) setActualTemp((prev) => prev - 1);
      if (actualTemp < temperature) setActualTemp((prev) => prev + 1);
      return(()=> {
        clearTimeout(incrementTemp);
      })
    }, 1000)
    
  }, [actualTemp, temperature])


  return (
    <section>
      <h2>Thermometer</h2>
      <div className="actual-temp">Actual Temperature: {actualTemp}°F</div>
      <ReactSlider
        value={temperature}
        onAfterChange={(val) => {setTemperature(val)}}
        className="thermometer-slider"
        thumbClassName="thermometer-thumb"
        trackClassName="thermometer-track"
        ariaLabel={"Thermometer"}
        orientation="vertical"
        min={0}
        max={120}
        renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
        renderTrack={(props, state) => (
          <div {...props} index={state.index}></div>
        )}
        invert
        pearling
        minDistance={1}
      />
    </section>
  );
}

export default Thermometer;