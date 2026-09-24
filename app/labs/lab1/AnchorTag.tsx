export default function AnchorTag() {
    return (
      <div id="wd-anchor">
        <h4>Anchor Tag</h4>
  
        <p>
          Please{" "}
          <a href="https://www.lipsum.com" id="wd-lipsum">
            click here
          </a>{" "}
          to get dummy text.
        </p>
  
        <a
          href="https://github.com/jannunzi"
          id="wd-github"
          target="_blank"
          rel="noreferrer"
        >
          Professor&apos;s GitHub
        </a>
  
        <h5>My Links</h5>
  
        <a
          href="https://linda-portfolio-eight.vercel.app"
          id="wd-your-link"
          target="_blank"
          rel="noreferrer"
        >
          My Portfolio
        </a>
  
        <br />
  
        <a
          href="https://github.com/lindaassefa"
          id="wd-your-github"
          target="_blank"
          rel="noreferrer"
        >
          My GitHub
        </a>
  
        <h5>HTML Documentation</h5>
  
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table"
          id="wd-ai-link"
          target="_blank"
          rel="noreferrer"
        >
          MDN Table Element Documentation
        </a>
      </div>
    );
  }