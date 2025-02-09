import { useState, useMemo } from "react";

const items = Array.from({ length: 10000 }, (_, i) => `Item ${i}`);

export default function FilterList() {
  const [query, setQuery] = useState("");

  const filteredItems = useMemo(() => {
    console.log("Filtering items...");
    return items.filter((item) => item.includes(query));
  }, [query]);

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
