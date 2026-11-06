"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import {
  useAssignmentsStore,
  type Assignment,
} from "../../../../store/assignmentsStore";

const field = "mb-1 block text-sm font-medium";
const control = "w-full rounded border border-neutral-300 bg-white px-3 py-2 text-sm";

const blank = (course: string): Assignment => ({
  _id: "new",
  title: "New Assignment",
  course,
  description: "",
  points: 100,
  due: "2024-06-01",
  available: "2024-05-20",
  until: "2024-06-08",
});

export default function AssignmentEditor() {
  const params = useParams();
  const cid = String(params.cid);
  const aid = String(params.aid);
  const router = useRouter();
  const assignments = useAssignmentsStore((state) => state.assignments);
  const addAssignment = useAssignmentsStore((state) => state.addAssignment);
  const updateAssignment = useAssignmentsStore((state) => state.updateAssignment);
  const found = assignments.find((a) => a._id === aid);
  const [draft, setDraft] = useState<Assignment>(found ?? blank(cid));

  const save = () => {
    if (aid === "new") addAssignment({ ...draft, course: cid });
    else updateAssignment({ ...draft, course: cid });
    router.push(`/courses/${cid}/assignments`);
  };

  return (
    <div id="wd-assignments-editor" className="max-w-3xl">
      <div className="mb-4">
        <label htmlFor="wd-name" className={field}>
          Assignment Name
        </label>
        <input
          id="wd-name"
          value={draft.title}
          onChange={(e) => setDraft({ ...draft, title: e.target.value })}
          className={control}
        />
        <p>Assignment id: {aid}</p>
      </div>
      <div className="mb-4">
        <label htmlFor="wd-description" className={field}>
          Description
        </label>
        <textarea
          id="wd-description"
          rows={5}
          value={draft.description}
          onChange={(e) => setDraft({ ...draft, description: e.target.value })}
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
          value={draft.points}
          onChange={(e) => setDraft({ ...draft, points: Number(e.target.value) })}
          className={control}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="wd-due-date" className={field}>
          Due
        </label>
        <input
          id="wd-due-date"
          type="date"
          value={draft.due}
          onChange={(e) => setDraft({ ...draft, due: e.target.value })}
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
          value={draft.available}
          onChange={(e) => setDraft({ ...draft, available: e.target.value })}
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
          value={draft.until ?? ""}
          onChange={(e) => setDraft({ ...draft, until: e.target.value })}
          className={control}
        />
      </div>
      <div className="flex justify-end gap-2">
        <Link
          href={`/courses/${cid}/assignments`}
          id="wd-cancel"
          className="rounded border border-neutral-300 bg-white px-4 py-2 text-sm text-neutral-900 no-underline"
        >
          Cancel
        </Link>
        <button
          type="button"
          id="wd-save"
          onClick={save}
          className="rounded bg-red-600 px-4 py-2 text-sm font-medium text-white"
        >
          Save
        </button>
      </div>
    </div>
  );
}
