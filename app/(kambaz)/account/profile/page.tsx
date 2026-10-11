import Link from "next/link";

const control =
  "mb-2 w-full rounded border border-neutral-300 px-3 py-2";

export default function Profile() {
  return (
    <div id="wd-profile-screen" className="max-w-sm">
      <h1 className="mb-3 text-2xl font-semibold">Profile</h1>
      <input
        defaultValue="linda"
        placeholder="username"
        className={`wd-username ${control}`}
      />
      <input
        defaultValue="123"
        placeholder="password"
        type="password"
        className={`wd-password ${control}`}
      />
      <input
        defaultValue="Linda"
        placeholder="First Name"
        id="wd-firstname"
        className={control}
      />
      <input
        defaultValue="Berhe"
        placeholder="Last Name"
        id="wd-lastname"
        className={control}
      />
      <input
        defaultValue="2004-01-01"
        type="date"
        id="wd-dob"
        className={control}
      />
      <input
        defaultValue="berhe.l@northeastern.edu"
        type="email"
        id="wd-email"
        className={control}
      />
      <select defaultValue="STUDENT" id="wd-role" className={control}>
        <option value="USER">User</option>
        <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option>
        <option value="STUDENT">Student</option>
      </select>
      <Link
        href="/account/signin"
        className="mt-2 block w-full rounded bg-red-600 px-3 py-2 text-center text-white no-underline"
      >
        Sign out
      </Link>
    </div>
  );
}
