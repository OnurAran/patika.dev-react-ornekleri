import NavigationBar from './components/NavigationBar';
import Calculate from './components/Calculate';
import About from './components/About';
import CalculationHistory from './components/CalculationHistory';


function App() {
  return (
    <div className="App">
      <Calculate.Provider value = "">
      <NavigationBar/>
      <CalculationHistory/>

      </Calculate.Provider>
    </div>
  );
}

export default App;
