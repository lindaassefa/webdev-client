"use client";

const hello = () => {
  alert("Hello World!");
};

const greetLinda = () => {
  alert("Hello Linda Assefa Berhe!");
};

export default function ClickEvent() {
  return (
    <div id="wd-click-event">
      <h2>Click Event</h2>
      <button
        type="button"
        onClick={hello}
        id="wd-onclick-hello"
        className="me-2 rounded bg-red-600 px-3 py-1.5 text-sm font-medium text-white"
      >
        Click Hello
      </button>
      {/* on your own */}
      <button
        type="button"
        onClick={greetLinda}
        id="wd-onclick-name"
        className="rounded bg-red-600 px-3 py-1.5 text-sm font-medium text-white"
      >
        Click Linda
      </button>
      <hr />
    </div>
  );
}
