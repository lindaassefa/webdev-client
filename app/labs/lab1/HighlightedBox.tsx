import type { ReactNode } from "react";

function HighlightedBox({
  backgroundColor,
  borderColor,
  borderWidth,
  borderRadius,
  children,
}: {
  backgroundColor: string;
  borderColor: string;
  borderWidth: string | number;
  borderRadius: string | number;
  children: ReactNode;
}) {
  return (
    <div
      style={{
        backgroundColor,
        borderColor,
        borderWidth,
        borderStyle: "solid",
        borderRadius,
        padding: "0.75rem 1rem",
        marginBottom: "0.75rem",
      }}
    >
      {children}
    </div>
  );
}

export default function HighlightedBoxLab() {
  return (
    <div id="wd-highlighted-box">
      <h3>Highlighted Box</h3>

      <HighlightedBox
        backgroundColor="lavender"
        borderColor="purple"
        borderWidth={3}
        borderRadius={12}
      >
        <h4>Callout</h4>
        <p>This box can wrap different HTML elements.</p>
        <ul>
          <li>Headings</li>
          <li>Paragraphs</li>
          <li>Lists</li>
        </ul>
      </HighlightedBox>

      <HighlightedBox
        backgroundColor="lightyellow"
        borderColor="orange"
        borderWidth={2}
        borderRadius={8}
      >
        <p>A second box can use different colors and content.</p>
      </HighlightedBox>

      <HighlightedBox
        backgroundColor="mistyrose"
        borderColor="crimson"
        borderWidth={3}
        borderRadius={14}
      >
        <h4>My Goals</h4>
        <ul>
          <li>Become more confident with Next.js.</li>
          <li>Build a complete web application.</li>
          <li>Connect technology with my creative interests.</li>
        </ul>
      </HighlightedBox>

      <HighlightedBox
        backgroundColor="honeydew"
        borderColor="green"
        borderWidth={2}
        borderRadius={18}
      >
        <h4>Nested HTML Example</h4>
        <p>This sample box contains several nested tags:</p>
        <ol>
          <li>A heading</li>
          <li>A paragraph</li>
          <li>An ordered list</li>
        </ol>
      </HighlightedBox>
    </div>
  );
}