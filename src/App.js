import FormComponent from "./components/inputFields/FormComponent";
import ResumeComponent from "./components/outputFields/ResumeComponent";
import styles from "./appStyles.css";

function App() {
  return (
    <div className="page">
      <FormComponent />
      <ResumeComponent />
    </div>
    
  );
}

export default App;
