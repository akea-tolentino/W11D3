import { useState, useEffect } from "react";
import ReactSlider from "react-slider";
import { useClimate } from "../../context/ClimateContext";
import "./Hygrometer.css";



function Hygrometer() {

  const {humidity, setHumidity} = useClimate();
  const [actualHumidity, setActualHumidity] = useState(humidity);

  useEffect(()=> {
    const incrementHumidity = setTimeout(()=> {
      if (humidity < actualHumidity) {setActualHumidity((prev) => prev - 1)}
      else if (humidity > actualHumidity) {setActualHumidity((prev) => prev + 1)}
    }, 500);
      return (()=> {
        clearTimeout(incrementHumidity)
      });
  }, [humidity, actualHumidity])

  return (
    <section>
      <h2>Hygrometer</h2>
      <div className="actual-humid">Actual Humidity: {actualHumidity}%</div>
      <ReactSlider
        value={humidity}
        onAfterChange={(val) => {setHumidity(val)}}
        className="hygrometer-slider"
        thumbClassName="hygrometer-thumb"
        trackClassName="hygrometer-track"
        ariaLabel={"Hygrometer"}
        orientation="vertical"
        min={0}
        max={100}
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

export default Hygrometer;