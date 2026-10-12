import type { ReactNode } from "react";
import TOC from "./TOC";

export default function LabsLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <table className="w-full table-fixed">
      <tbody>
        <tr>
          <td valign="top" width="150" className="w-[150px] min-w-[150px]">
            <TOC />
          </td>

          <td valign="top" className="min-w-0">
            <div className="overflow-x-auto">{children}</div>
          </td>
        </tr>
      </tbody>
    </table>
  );
}