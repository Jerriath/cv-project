import GeneralInput from "./components/inputFields/GeneralInput";
import EducationInput from "./components/inputFields/EducationInput";
import PracticalInput from "./components/inputFields/PracticalInput";
import Resume from "./components/outputFields/Resume";
import styles from "./appStyles.css";

function App() {
  return (
    <div className="page">
      <div className="left">
        <h1 className="subtitle">General Info</h1>
        <GeneralInput />
        <h1 className="subtitle">Education Info</h1>
        <EducationInput />
        <h1 className="subtitle">Practical Info</h1>
        <PracticalInput />
      </div>
      <div className="right">
        <Resume />
      </div>

    </div>
    
  );
}

export default App;
