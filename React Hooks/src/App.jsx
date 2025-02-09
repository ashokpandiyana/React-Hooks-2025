import "./App.css";
import Counter from "./ActionState/Counter";
import SearchForm from "./ActionState/SearchForm";
import CounterCallBack from "./CallBack/Counter";
import { ThemeProvider, ThemeToggleButton } from "./Context/Theme";
import { CustomCounter } from "./Hooks/Counter";
import DeferredValue from "./Deferred/deferredValue";
function App() {
  const [count, setBtnClicked] = CustomCounter();
  return (
    <>
      <ThemeProvider>
        <h1>Hello World</h1>
        <Counter />
        <SearchForm />
        <CounterCallBack />
        <ThemeToggleButton />
      </ThemeProvider>

      <h2 className="debug">
        <button className="count" onClick={() => setBtnClicked("Start")}>
          {count}
        </button>
      </h2>

      <DeferredValue />
    </>
  );
}

export default App;
