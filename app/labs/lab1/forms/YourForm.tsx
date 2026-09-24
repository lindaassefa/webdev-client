"use client";

export default function YourForm() {
  return (
    <form
      id="wd-your-form"
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <h4>Student Profile</h4>

      <label htmlFor="wd-your-first-name">First name:</label>
      <input
        id="wd-your-first-name"
        type="text"
        defaultValue="Linda"
      />
      <br />

      <label htmlFor="wd-your-last-name">Last name:</label>
      <input
        id="wd-your-last-name"
        type="text"
        defaultValue="Berhe"
      />
      <br />

      <label htmlFor="wd-your-email">School email:</label>
      <input
        id="wd-your-email"
        type="email"
        defaultValue="berhe.l@northeastern.edu"
      />
      <br />

      <label htmlFor="wd-your-bio">Short biography:</label>
      <br />
      <textarea
        id="wd-your-bio"
        rows={4}
        cols={40}
        defaultValue="I am a graduate computer science student interested in web development, artificial intelligence, and music."
      />
      <br />

      <p>Student level:</p>

      <input
        id="wd-your-undergraduate"
        type="radio"
        name="student-level"
      />
      <label htmlFor="wd-your-undergraduate">Undergraduate</label>
      <br />

      <input
        id="wd-your-graduate"
        type="radio"
        name="student-level"
        defaultChecked
      />
      <label htmlFor="wd-your-graduate">Graduate</label>
      <br />

      <p>Interests:</p>

      <input
        id="wd-your-web-development"
        type="checkbox"
        defaultChecked
      />
      <label htmlFor="wd-your-web-development">Web development</label>
      <br />

      <input
        id="wd-your-ai"
        type="checkbox"
        defaultChecked
      />
      <label htmlFor="wd-your-ai">Artificial intelligence</label>
      <br />

      <input
        id="wd-your-music"
        type="checkbox"
        defaultChecked
      />
      <label htmlFor="wd-your-music">Music</label>
      <br />

      <label htmlFor="wd-your-program">Academic program:</label>
      <select id="wd-your-program" defaultValue="MSCS">
        <option value="MSCS">MS Computer Science</option>
        <option value="MSDS">MS Data Science</option>
        <option value="MSAI">MS Artificial Intelligence</option>
      </select>
      <br />

      <label htmlFor="wd-your-graduation-year">
        Expected graduation year:
      </label>
      <input
        id="wd-your-graduation-year"
        type="number"
        min="2026"
        max="2030"
        defaultValue="2027"
      />
      <br />

      <label htmlFor="wd-your-course-rating">
        Interest in web development:
      </label>
      <input
        id="wd-your-course-rating"
        type="range"
        min="1"
        max="5"
        defaultValue="4"
      />
      <br />

      <label htmlFor="wd-your-graduation-date">
        Expected graduation date:
      </label>
      <input
        id="wd-your-graduation-date"
        type="date"
        defaultValue="2027-12-15"
      />
      <br />
      <br />

      <button type="submit">Save</button>
      <button type="button">Cancel</button>
    </form>
  );
}