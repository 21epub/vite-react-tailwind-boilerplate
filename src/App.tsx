import { useState } from "react";
import { useColorModeValue } from "@chakra-ui/react"; // Import the necessary package
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Button } from "@chakra-ui/react";
import { css } from "@emotion/react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const bgColor = useColorModeValue("gray.100", "gray.700");

  return (
    <>
      <div className={bgColor}>
        <a href="https://vitejs.dev" target="_blank" className="inline-block">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" className="inline-block">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1
        css={css`
          color: green;
        `}
      >
        Vite + React
      </h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Button colorScheme="blue">Button</Button>
    </>
  );
}

export default App;
