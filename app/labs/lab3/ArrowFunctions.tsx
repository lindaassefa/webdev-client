const subtract = (a: number, b: number) => {
  return a - b;
};

// on your own
const add = (a: number, b: number) => {
  return a + b;
};
// with AI

export default function ArrowFunctions() {
  const threeMinusOne = subtract(3, 1);
  console.log(threeMinusOne);
  return (
    <div id="wd-arrow-functions">
      <h4>New ES6 arrow functions</h4>
      threeMinusOne = {threeMinusOne} <br />
      subtract(3, 1) = {subtract(3, 1)} <br />
      {/* on your own */}
      add(2, 4) = {add(2, 4)}
      {/* with AI */}
      <hr />
    </div>
  );
}
