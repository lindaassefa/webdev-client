import Link from "next/link";

export default async function AssignmentEditor({
  params,
}: {
  params: Promise<{ cid: string; aid: string }>;
}) {
  const { cid } = await params;

  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label>
      <br />

      <input
        id="wd-name"
        defaultValue="A1 - ENV + HTML"
      />
      <br />
      <br />

      <label htmlFor="wd-description">Description</label>
      <br />

      <textarea
        id="wd-description"
        rows={5}
        cols={50}
        defaultValue="The assignment is available online. Submit a link to the landing page of your web application running on Vercel."
      />
      <br />
      <br />

      <label htmlFor="wd-points">Points</label>
      <input
        id="wd-points"
        type="number"
        defaultValue={125}
      />
      <br />

      <label htmlFor="wd-group">Assignment Group</label>
      <select id="wd-group" defaultValue="ASSIGNMENTS">
        <option value="ASSIGNMENTS">ASSIGNMENTS</option>
        <option value="QUIZZES">QUIZZES</option>
        <option value="EXAMS">EXAMS</option>
        <option value="PROJECT">PROJECT</option>
      </select>
      <br />

      <label htmlFor="wd-display-grade-as">Display Grade as</label>
      <select id="wd-display-grade-as" defaultValue="POINTS">
        <option value="POINTS">Points</option>
        <option value="PERCENTAGE">Percentage</option>
        <option value="COMPLETE">Complete/Incomplete</option>
      </select>
      <br />

      <label htmlFor="wd-submission-type">Submission Type</label>
      <select id="wd-submission-type" defaultValue="ONLINE">
        <option value="ONLINE">Online</option>
        <option value="PAPER">On Paper</option>
        <option value="NONE">No Submission</option>
      </select>

      <h4>Online Entry Options</h4>

      <input id="wd-text-entry" type="checkbox" />
      <label htmlFor="wd-text-entry">Text Entry</label>
      <br />

      <input id="wd-website-url" type="checkbox" defaultChecked />
      <label htmlFor="wd-website-url">Website URL</label>
      <br />

      <input id="wd-media-recordings" type="checkbox" />
      <label htmlFor="wd-media-recordings">Media Recordings</label>
      <br />

      <input id="wd-student-annotation" type="checkbox" />
      <label htmlFor="wd-student-annotation">Student Annotation</label>
      <br />

      <input id="wd-file-upload" type="checkbox" />
      <label htmlFor="wd-file-upload">File Uploads</label>

      <h4>Assign</h4>

      <label htmlFor="wd-assign-to">Assign to</label>
      <input
        id="wd-assign-to"
        defaultValue="Everyone"
      />
      <br />

      <label htmlFor="wd-due-date">Due</label>
      <input
        id="wd-due-date"
        type="date"
        defaultValue="2026-09-27"
      />
      <br />

      <label htmlFor="wd-available-from">Available from</label>
      <input
        id="wd-available-from"
        type="date"
        defaultValue="2026-09-14"
      />
      <br />

      <label htmlFor="wd-available-until">Until</label>
      <input
        id="wd-available-until"
        type="date"
        defaultValue="2026-09-27"
      />
      <br />
      <br />

      <Link
        href={`/courses/${cid}/assignments`}
        id="wd-cancel"
      >
        Cancel
      </Link>
      {" "}

      <Link
        href={`/courses/${cid}/assignments`}
        id="wd-save"
      >
        Save
      </Link>
    </div>
  );
}