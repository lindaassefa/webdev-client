"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { FaUserCircle } from "react-icons/fa";
import * as db from "../../../../database";
import { emptyUser, type User } from "../../../../account/AccountContext";
import { useEnrollmentsStore } from "../../../../store/enrollmentsStore";

export default function PeopleTable() {
  const { cid } = useParams();
  const courseId = String(cid);
  const enrollments = useEnrollmentsStore((state) => state.enrollments);
  const enroll = useEnrollmentsStore((state) => state.enroll);
  const [people, setPeople] = useState<User[]>(db.users);
  const [draft, setDraft] = useState<User>(emptyUser);
  const enrolled = people.filter((usr) =>
    enrollments.some(
      (enrollment) =>
        enrollment.user === usr._id && enrollment.course === courseId,
    ),
  );

  return (
    <div id="wd-people-table" className="overflow-x-auto">
      {/* on your own */}
      <div className="mb-3 flex flex-wrap gap-2">
        <input
          value={draft.firstName}
          onChange={(e) => setDraft({ ...draft, firstName: e.target.value })}
          placeholder="First name"
          className="rounded border border-neutral-300 px-2 py-1"
        />
        <input
          value={draft.lastName}
          onChange={(e) => setDraft({ ...draft, lastName: e.target.value })}
          placeholder="Last name"
          className="rounded border border-neutral-300 px-2 py-1"
        />
        <button
          type="button"
          className="rounded bg-blue-600 px-3 py-1 text-sm text-white"
          onClick={() => {
            const user = { ...draft, _id: crypto.randomUUID() };
            setPeople([...people, user]);
            enroll(user._id, courseId);
            setDraft(emptyUser);
          }}
        >
          Add
        </button>
      </div>
      <table className="w-full border-collapse text-left text-sm">
        <thead>
          <tr className="border-b border-neutral-300">
            <th className="p-2">Name</th>
            <th className="p-2">Login ID</th>
            <th className="p-2">Section</th>
            <th className="p-2">Role</th>
            <th className="p-2">Last Activity</th>
            <th className="p-2">Total Activity</th>
          </tr>
        </thead>
        <tbody>
          {enrolled.map((user) => (
            <tr key={user._id} className="odd:bg-neutral-50">
              <td className="wd-full-name p-2 text-nowrap">
                <FaUserCircle className="me-2 inline text-4xl text-neutral-500" />
                <span className="wd-first-name">{user.firstName}</span>{" "}
                <span className="wd-last-name">{user.lastName}</span>
              </td>
              <td className="wd-login-id p-2">{user.loginId}</td>
              <td className="wd-section p-2">{user.section}</td>
              <td className="wd-role p-2">{user.role}</td>
              <td className="wd-last-activity p-2">{user.lastActivity}</td>
              <td className="wd-total-activity p-2">{user.totalActivity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
