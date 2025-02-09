import { useState, useDeferredValue } from "react";

const items = Array.from({ length: 5000 }, (_, i) => `Item ${i + 1}`);

function FilteredList({ query }) {
  const filteredItems = items.filter((item) => item.includes(query));

  return (
    <ul>
      {filteredItems.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export default function DeferredValue() {
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query); // Delays filtering

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
      />
      <p>Real-time Query: {query}</p>
      <FilteredList query={deferredQuery} /> {/* Filters with delay */}
    </div>
  );
}
