import React from "react";
import fetcher from "./services/fetcher";
import useSWR from "swr";

const App = () => {
  const { data, error, isLoading } = useSWR(
    "https://dogapi.dog/api/v2/breeds",
    fetcher
  );
  console.log(data);
  return (
    <>
      <h1>React SWR</h1>
      <abbr
        title="Stale while revalidate"
        style={{ textDecoration: "underline dotted" }}
      >
        SWR
      </abbr>
      <p>
        The name “SWR” is derived from stale-while-revalidate, a HTTP cache
        invalidation strategy popularized by HTTP RFC 5861(opens in a new tab).
        SWR is a strategy to first return the data from cache (stale), then send
        the fetch request (revalidate), and finally come with the up-to-date
        data. With SWR, components will get a stream of data updates constantly
        and automatically. And the UI will be always fast and reactive.
      </p>
      {error && <p>failed to load</p>}
      {isLoading && <p>loading...</p>}
      <ul>
        {data.data &&
          data.data.length &&
          data.data.map((item) => (
            <li key={item.id}>{item.attributes.name}</li>
          ))}
      </ul>
    </>
  );
};

export default App;
