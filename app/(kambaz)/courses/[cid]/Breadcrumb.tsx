"use client";

import { usePathname } from "next/navigation";

export default function Breadcrumb({
  course,
}: {
  course: { name: string } | undefined;
}) {
  const pathname = usePathname() ?? "";
  const section = pathname.split("/").pop() ?? "";
  let label = section.charAt(0).toUpperCase() + section.slice(1);
  if (pathname.includes("/people")) {
    label = "People";
  } else if (pathname.includes("/assignments/")) {
    label = "Assignments";
  }
  return (
    <span>
      {course?.name} &gt; {label}
    </span>
  );
}
