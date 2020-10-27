import { useState, useEffect } from "react";
import APIController from "./controller/APIController";

function App() {
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState(null);

  console.log("api ", APIController.getToken());

  useEffect(() => {
    const loadToken = async () => {
      let result = await APIController.getToken();
      console.log('result ', result);
      setToken(result);
    }

    loadToken();

  }, []);

  useEffect(() => {
    if (token) {
      setLoading(false);
    }
  }, [token]);

  if (loading) {
    return <h1>LOADING...</h1>;
  } else {
    return (
      <div className="App">
        <header className="App-header">
          <p>{"Blah" + token}</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
