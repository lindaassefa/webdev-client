export default function FindFunction() {
  const numberArray1 = [1, 2, 3, 4, 5];
  const stringArray1 = ["string1", "string2", "string3"];
  const four = numberArray1.find((a) => a === 4);
  const string3 = stringArray1.find((a) => a === "string3");
  // on your own
  const missing = numberArray1.find((a) => a === 99);
  // with AI
  return (
    <div id="wd-find-function">
      <h4>Find Function</h4>
      four = {four} <br />
      string3 = {string3} <br />
      {/* on your own */}
      missing = {String(missing)}
      {/* with AI */}
      <hr />
    </div>
  );
}
