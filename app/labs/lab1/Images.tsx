export default function Images() {
    return (
      <div id="wd-images">
        <h4>Image Tag</h4>
  
        <p>Loading an image from the internet:</p>
        <img
          id="wd-starship"
          width="400"
          alt="Starship"
          src="https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg"
        />
  
        <p>Loading a local image:</p>
        <img
          id="wd-teslabot"
          src="/images/teslabot.jpg"
          height="200"
          alt="Tesla Bot humanoid robot"
        />
  
        <h5>My Image</h5>
        <img
          id="wd-your-image"
          width="400"
          src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f"
          alt="Singer performing with a microphone"
        />
  
        <h5>AI Example Image</h5>
        <img
          id="wd-ai-image"
          width="400"
          src="https://images.unsplash.com/photo-1518770660439-4636190af475"
          alt="Electronic circuit board"
        />
      </div>
    );
  }