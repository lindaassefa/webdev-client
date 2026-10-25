export default function FindIndex() {
  const numberArray1 = [1, 2, 4, 5, 6];
  const stringArray1 = ["string1", "string3"];
  const fourIndex = numberArray1.findIndex((a) => a === 4);
  const string3Index = stringArray1.findIndex((a) => a === "string3");
  // on your own
  const threeIndex = numberArray1.findIndex((a) => a === 3);
  // with AI
  return (
    <div id="wd-find-index">
      <h4>Find Index Function</h4>
      fourIndex = {fourIndex} <br />
      string3Index = {string3Index} <br />
      {/* on your own */}
      threeIndex = {threeIndex}
      {/* with AI */}
      <hr />
    </div>
  );
}
