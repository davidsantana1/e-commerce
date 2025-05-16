interface CounterProps {
  className?: string;
}

function Counter({ className }: CounterProps) {
  return (
    <select
      className={`${className} bg-brand-50 flex rounded-md p-2 px-2`}
      name=""
      id=""
    >
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
    </select>
  );
}

export default Counter;
