"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "../kambaz.css";

export default function AccountNavigation() {
  const pathname = usePathname() ?? "";
  const signin = "/account/signin";
  const signup = "/account/signup";
  const profile = "/account/profile";
  const item = (href: string) =>
    pathname === href
      ? "list-group-item active border-0"
      : "list-group-item border-0 text-red-600";

  return (
    <div id="wd-account-navigation" className="wd list-group rounded-none text-lg">
      <Link href={signin} className={item(signin)}>
        Signin
      </Link>
      <Link href={signup} className={item(signup)}>
        Signup
      </Link>
      <Link href={profile} className={item(profile)}>
        Profile
      </Link>
    </div>
  );
}
