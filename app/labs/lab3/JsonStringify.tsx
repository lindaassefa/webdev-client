export default function JsonStringify() {
  const squares = [1, 4, 16, 25, 36];
  const notebook = {
    title: "Notes",
    owner: { name: "Linda" },
    topics: ["HTML", "CSS"],
  };
  return (
    <div id="wd-json-stringify">
      <h3>JSON Stringify</h3>
      squares = {JSON.stringify(squares)}
      {/* on your own */}
      <pre>{JSON.stringify(notebook, null, 2)}</pre>
      {/* with AI */}
      <hr />
    </div>
  );
}
