export default function FilterFunction() {
  const numberArray1 = [1, 2, 4, 5, 6];
  const numbersGreaterThan2 = numberArray1.filter((a) => a > 2);
  const evenNumbers = numberArray1.filter((a) => a % 2 === 0);
  const oddNumbers = numberArray1.filter((a) => a % 2 !== 0);
  // on your own
  const numbersAtLeast5 = numberArray1.filter((a) => a >= 5);
  // with AI
  return (
    <div id="wd-filter-function">
      <h4>Filter Function</h4>
      numbersGreaterThan2 = {numbersGreaterThan2} <br />
      evenNumbers = {evenNumbers} <br />
      oddNumbers = {oddNumbers} <br />
      {/* on your own */}
      numbersAtLeast5 = {numbersAtLeast5}
      {/* with AI */}
      <hr />
    </div>
  );
}
