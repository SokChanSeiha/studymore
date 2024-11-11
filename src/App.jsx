import Greeting from "./components/Greeting";
import Job from "./components/Job";
import Message from "./components/Message";
import "./App.css"

const App = () => {
  return (
    <div className="container">
      <Greeting/>
      <Job/>
      <Message/>
    </div>
  )
};

export default App;