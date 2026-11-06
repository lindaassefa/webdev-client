"use client";

import Link from "next/link";
import { FaFileAlt, FaTrash } from "react-icons/fa";

export default function AssignmentItem({
  cid,
  aid,
  title,
  details,
  onDelete,
}: {
  cid: string;
  aid: string;
  title: string;
  details: string;
  onDelete: (aid: string) => void;
}) {
  return (
    <li className="wd-assignment-list-item mb-3 flex items-start justify-between gap-3 border border-neutral-300 border-l-[3px] border-l-green-600 bg-white p-3">
      <div className="flex gap-3">
        <FaFileAlt className="mt-1 shrink-0 text-xl text-green-700" />
        <div>
          <Link
            href={`/courses/${cid}/assignments/${aid}`}
            className="wd-assignment-link font-semibold text-neutral-900 no-underline"
          >
            {title}
          </Link>
          <div className="mt-1 text-sm text-neutral-600">{details}</div>
        </div>
      </div>
      <button
        type="button"
        title="Delete assignment"
        className="text-red-600"
        onClick={() => onDelete(aid)}
      >
        <FaTrash />
      </button>
    </li>
  );
}
