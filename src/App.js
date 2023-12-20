import Hello from "./Components/Hello";
import CounterApp from "./Components/CounterApp";

const App=()=> {
  return (
    <div>
        <Hello> 
           <pre>
               console.log("Hello World")
           </pre>
        </Hello>

        <Hello> 
            <p>console.log("Hello World")</p> 
            <h1>Did u like my code</h1>
        </Hello>


        <Hello>
            <CounterApp/>
        </Hello>
        
      
    </div>
  );
}

export default App;


// How to acees specific children out of all children