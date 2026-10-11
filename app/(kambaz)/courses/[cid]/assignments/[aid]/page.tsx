import Link from "next/link";

const field =
  "mb-1 block text-sm font-medium";
const control =
  "w-full rounded border border-neutral-300 bg-white px-3 py-2 text-sm";

export default async function AssignmentEditor({
  params,
}: {
  params: Promise<{ cid: string; aid: string }>;
}) {
  const { cid } = await params;

  return (
    <div id="wd-assignments-editor" className="max-w-3xl">
      <div className="mb-4">
        <label htmlFor="wd-name" className={field}>
          Assignment Name
        </label>
        <input
          id="wd-name"
          defaultValue="A1 - ENV + HTML"
          className={control}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="wd-description" className={field}>
          Description
        </label>
        <textarea
          id="wd-description"
          rows={5}
          defaultValue="The assignment is available online. Submit a link to the landing page of your web application running on Vercel."
          className={control}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="wd-points" className={field}>
          Points
        </label>
        <input
          id="wd-points"
          type="number"
          defaultValue={125}
          className={control}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="wd-group" className={field}>
          Assignment Group
        </label>
        <select id="wd-group" defaultValue="ASSIGNMENTS" className={control}>
          <option value="ASSIGNMENTS">ASSIGNMENTS</option>
          <option value="QUIZZES">QUIZZES</option>
          <option value="EXAMS">EXAMS</option>
          <option value="PROJECT">PROJECT</option>
        </select>
      </div>

      <div className="mb-4">
        <label htmlFor="wd-display-grade-as" className={field}>
          Display Grade as
        </label>
        <select
          id="wd-display-grade-as"
          defaultValue="POINTS"
          className={control}
        >
          <option value="POINTS">Points</option>
          <option value="PERCENTAGE">Percentage</option>
          <option value="COMPLETE">Complete/Incomplete</option>
        </select>
      </div>

      <div className="mb-4">
        <label htmlFor="wd-submission-type" className={field}>
          Submission Type
        </label>
        <select
          id="wd-submission-type"
          defaultValue="ONLINE"
          className={control}
        >
          <option value="ONLINE">Online</option>
          <option value="PAPER">On Paper</option>
          <option value="NONE">No Submission</option>
        </select>
      </div>

      <h4 className="mb-2 text-base font-semibold">Online Entry Options</h4>
      <div className="mb-4 space-y-2 text-sm">
        <div>
          <input id="wd-text-entry" type="checkbox" className="me-2" />
          <label htmlFor="wd-text-entry">Text Entry</label>
        </div>
        <div>
          <input
            id="wd-website-url"
            type="checkbox"
            defaultChecked
            className="me-2"
          />
          <label htmlFor="wd-website-url">Website URL</label>
        </div>
        <div>
          <input id="wd-media-recordings" type="checkbox" className="me-2" />
          <label htmlFor="wd-media-recordings">Media Recordings</label>
        </div>
        <div>
          <input id="wd-student-annotation" type="checkbox" className="me-2" />
          <label htmlFor="wd-student-annotation">Student Annotation</label>
        </div>
        <div>
          <input id="wd-file-upload" type="checkbox" className="me-2" />
          <label htmlFor="wd-file-upload">File Uploads</label>
        </div>
      </div>

      <h4 className="mb-2 text-base font-semibold">Assign</h4>

      <div className="mb-4">
        <label htmlFor="wd-assign-to" className={field}>
          Assign to
        </label>
        <input id="wd-assign-to" defaultValue="Everyone" className={control} />
      </div>

      <div className="mb-4">
        <label htmlFor="wd-due-date" className={field}>
          Due
        </label>
        <input
          id="wd-due-date"
          type="date"
          defaultValue="2026-09-27"
          className={control}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="wd-available-from" className={field}>
          Available from
        </label>
        <input
          id="wd-available-from"
          type="date"
          defaultValue="2026-09-14"
          className={control}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="wd-available-until" className={field}>
          Until
        </label>
        <input
          id="wd-available-until"
          type="date"
          defaultValue="2026-09-27"
          className={control}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="wd-ai-editor-notes" className={field}>
          Sample notes
        </label>
        <textarea id="wd-ai-editor-notes" rows={4} className={control} />
      </div>

      <div className="flex justify-end gap-2">
        <Link
          href={`/courses/${cid}/assignments`}
          id="wd-cancel"
          className="rounded border border-neutral-300 bg-white px-4 py-2 text-sm text-neutral-900 no-underline"
        >
          Cancel
        </Link>
        <Link
          href={`/courses/${cid}/assignments`}
          id="wd-save"
          className="rounded bg-red-600 px-4 py-2 text-sm font-medium text-white no-underline"
        >
          Save
        </Link>
      </div>
    </div>
  );
}
