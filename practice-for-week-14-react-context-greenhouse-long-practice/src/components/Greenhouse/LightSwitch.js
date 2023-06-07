import { useTheme } from '../../context/ThemeContext';
import './LightSwitch.css';


function LightSwitch() {
  const {themeName, setThemeName} = useTheme();

  function setDay() {
    setThemeName('day');
  }
  
  function setNight() {
    setThemeName('night');
  }

  return (
    <div className={`light-switch ${themeName}`}>
      <div className="on" onClick={setDay}>DAY</div>
      <div className="off" onClick={setNight}>NIGHT</div>
    </div>
  );
}

export default LightSwitch;