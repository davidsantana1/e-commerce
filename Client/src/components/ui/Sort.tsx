interface SortProps {
  sort: string;
  handleSetSort: (sortType: string) => void;
}

const sortTypes = [
  { name: "Default", value: "default" },
  { name: "Price: Lowest First", value: "price-asc" },
  { name: "Price: Highest First", value: "price-desc" },
];

function Sort({ sort, handleSetSort }: SortProps) {
  return (
    <div>
      <span className="mr-2">Sort by:</span>
      <select
        value={sort}
        onChange={(e) => handleSetSort(e.target.value)}
        className="p-2 pl-0 font-bold"
      >
        {sortTypes.map((sort) => (
          <option key={sort.value} value={sort.value}>
            {sort.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Sort;
