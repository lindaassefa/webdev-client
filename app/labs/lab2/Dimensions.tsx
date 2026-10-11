export default function Dimensions() {
  return (
    <div id="wd-css-dimensions">
      <h2>Dimension</h2>
      <div>
        <div className="wd-dimension-portrait wd-bg-color-yellow">Portrait</div>
        <div className="wd-dimension-landscape wd-bg-color-blue wd-fg-color-white">
          Landscape
        </div>
        <div className="wd-dimension-square wd-bg-color-red">Square</div>
        <div id="wd-ai-dimension" className="wd-ai-dimension">
          This sample box keeps a width of 120 pixels and a height of 60 pixels
          even though this sentence is much longer than the box.
        </div>
        <div className="wd-dimension-moodboard">
          Fashion moodboard: a cobalt coat, soft pink shoes, and gold hoops
          pinned above a jazz playlist.
        </div>
      </div>
    </div>
  );
}
