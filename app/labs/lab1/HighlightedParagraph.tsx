function HighlightedParagraph({
    text,
    backgroundColor,
    borderColor,
    borderWidth,
    borderRadius,
  }: {
    text: string;
    backgroundColor: string;
    borderColor: string;
    borderWidth: string | number;
    borderRadius: string | number;
  }) {
    return (
      <p
        style={{
          backgroundColor,
          borderColor,
          borderWidth,
          borderStyle: "solid",
          borderRadius,
          padding: "0.5rem 0.75rem",
        }}
      >
        {text}
      </p>
    );
  }
  
  export default function HighlightedParagraphLab() {
    return (
      <div id="wd-highlighted-paragraph">
        <h3>Highlighted Paragraph</h3>
  
        <HighlightedParagraph
          text="Default highlight with a light yellow background."
          backgroundColor="lightyellow"
          borderColor="orange"
          borderWidth={2}
          borderRadius={8}
        />
  
        <HighlightedParagraph
          text="This paragraph uses a light blue background and a navy border."
          backgroundColor="lightblue"
          borderColor="navy"
          borderWidth={4}
          borderRadius={16}
        />
  
        <HighlightedParagraph
          text="This paragraph has square corners and a crimson border."
          backgroundColor="mistyrose"
          borderColor="crimson"
          borderWidth="3px"
          borderRadius="0px"
        />
  
        <HighlightedParagraph
          text="My goal is to improve my web development skills and build creative projects."
          backgroundColor="lavender"
          borderColor="purple"
          borderWidth={2}
          borderRadius={10}
        />
  
        <HighlightedParagraph
          text="Reusable components can display different styles using props."
          backgroundColor="honeydew"
          borderColor="green"
          borderWidth={3}
          borderRadius={20}
        />
      </div>
    );
  }