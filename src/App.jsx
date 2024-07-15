import { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 120,
    expectedReturn: 5,
    duration: 10,
  });

  const inputIsValid = userInput.duration >= 1;

  const handleChange = (inputIdentifier, newValue) => {
    setUserInput((previousInput) => {
      // adding + in front of newValue to convert string to number
      return { ...previousInput, [inputIdentifier]: +newValue };
    });
  };

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleChange} />
      {inputIsValid && <Results input={userInput} />}
      {!inputIsValid && (
        <p className="center">Please enter a duration greater than 0</p>
      )}
    </>
  );
}

export default App;
