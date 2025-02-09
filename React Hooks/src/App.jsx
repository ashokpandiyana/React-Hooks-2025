import "./App.css";
import Counter from "./ActionState/Counter";
import SearchForm from "./ActionState/SearchForm";
import CounterCallBack from "./CallBack/Counter";
import { ThemeProvider, ThemeToggleButton } from "./Context/Theme";
import { CustomCounter } from "./Hooks/Counter";
// import DeferredValue from "./Deferred/deferredValue";
import DynamicStyles from "./InsertionEffect/InsertionEffect";
import CustomInput from "./Ref/CustomInput";
import { useRef } from "react";
import LayoutEffect from "./LayoutEffect/LayoutEffect";
import FilterList from "./Memo/useMemo";
import OptimisticComments from "./Optimistic/useOptimistic";
import Form from "./Reducer/useReducer";
function App() {
  const inputRef = useRef();

  const handleFocus = () => {
    inputRef.current.focus(); // Programmatically focus the input
  };

  const handleClear = () => {
    inputRef.current.clear(); // Programmatically clear the input
  };
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

      {/* <DeferredValue /> */}
      <div>
        <CustomInput ref={inputRef} placeholder="Type something..." />
        <button onClick={handleFocus}>Focus Input</button>
        <button onClick={handleClear}>Clear Input</button>
      </div>

      <DynamicStyles />
      <LayoutEffect />
      {/* <FilterList /> */}
      <OptimisticComments />
      <Form />
    </>
  );
}

export default App;
