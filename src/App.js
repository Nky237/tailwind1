import Hello from './component/Hello'
import Counter from './component/Counter'
import Header from './component/Header'

function App() {
  return (
    <div className="App">
      <Hello />
      <Hello name = 'jaro' />
      <Counter />
      <Header />
      
    </div>

  );
}

export default App;
