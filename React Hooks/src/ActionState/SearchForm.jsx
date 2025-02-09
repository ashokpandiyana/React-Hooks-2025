"use client";
import { useActionState } from "react";

async function fetchData(prevState, formData) {
  console.log(prevState);
  const query = formData.get("query");
  const response = await fetch(
    `https://api.chucknorris.io/jokes/search?query=${query}`
  );
  const result = await response.json();
  return { data: result };
}

export default function SearchForm() {
  const [state, dispatch] = useActionState(fetchData, { data: null });

  return (
    <form action={dispatch}>
      <input type="text" name="query" placeholder="Search..." required />
      <button type="submit">Search</button>
      {state.data && <pre>{JSON.stringify(state.data, null, 2)}</pre>}
    </form>
  );
}
