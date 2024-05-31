import { useState, useRef } from "react";
import axios from "axios";

import { Form, Results } from "./components";

import { Inputs } from "./shared/types";

import "./App.css";

function App() {
  const [results, setResults] = useState<Inputs[]>([]);
  const [loading, setLoading] = useState(false);
  const controller = useRef<null | AbortController>(null);

  const getData = (searchData: Inputs) => {
    if (controller.current) {
      controller.current.abort();
    }

    controller.current = new AbortController();

    setLoading(true);
    axios
      .get<Inputs[]>(`${import.meta.env.VITE_API_BASE_URL}/users`, {
        params: {
          email: searchData.email,
          number: !searchData.number ? undefined : searchData.number,
        },
        signal: controller.current.signal,
      })
      .then((res) => setResults(res.data))
      .finally(() => setLoading(false));
  };

  return (
    <div className="app">
      <Form onFormSubmit={getData} />
      <Results results={results} loading={loading} />
    </div>
  );
}

export default App;
