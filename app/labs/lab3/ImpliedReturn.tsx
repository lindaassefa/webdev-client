export default function ImpliedReturn() {
  const multiply = (a: number, b: number) => a * b;
  const fourTimesFive = multiply(4, 5);
  // on your own
  const square = (n: number) => n * n;
  console.log(fourTimesFive);
  return (
    <div id="wd-implied-return">
      <h4>Implied return</h4>
      fourTimesFive = {fourTimesFive} <br />
      multiply(4, 5) = {multiply(4, 5)} <br />
      {/* on your own */}
      square(9) = {square(9)}
      <hr />
    </div>
  );
}
