export default function Flex() {
  return (
    <div id="wd-css-flex">
      <h2>Flex</h2>
      <div className="wd-flex-row-container">
        <div className="wd-bg-color-yellow wd-width-110px">Column 1</div>
        <div className="wd-bg-color-blue wd-fg-color-white">Column 2</div>
        <div className="wd-bg-color-red wd-fg-color-white wd-flex-grow-1">
          Column 3
        </div>
      </div>
      <div className="wd-flex-row-container">
        <div className="wd-bg-color-mint wd-fg-color-navy wd-width-110px">
          Jazz
        </div>
        <div className="wd-bg-color-pink wd-fg-color-navy">Set</div>
        <div className="wd-bg-color-lavender wd-fg-color-navy wd-flex-grow-1">
          Playlist
        </div>
      </div>
      <div id="wd-ai-flex" className="wd-flex-row-container">
        <div className="wd-bg-color-yellow wd-width-110px">Fixed</div>
        <div className="wd-bg-color-blue wd-fg-color-white">Middle</div>
        <div className="wd-bg-color-red wd-fg-color-white wd-flex-grow-1">
          Grows
        </div>
      </div>
    </div>
  );
}
