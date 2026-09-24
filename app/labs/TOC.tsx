import Link from "next/link";

export default function TOC() {
  return (
    <div id="wd-labs-toc">
      <h3>Labs</h3>

      <ul>
        <li>
          <Link href="/labs" id="wd-home-link">
            Labs Home
          </Link>
        </li>

        <li>
          <Link href="/labs/lab1">Lab 1</Link>
        </li>

        <li>
          <Link href="/labs/lab2">Lab 2</Link>
        </li>

        <li>
          <Link href="/labs/lab3">Lab 3</Link>
        </li>

        <li>
          <Link href="/labs/lab4">Lab 4</Link>
        </li>

        <li>
          <Link href="/labs/lab5">Lab 5</Link>
        </li>

        <li>
          <Link href="/" id="wd-kambaz-link">
            Kambaz
          </Link>
        </li>

        <li>
          <a
            href="https://webdev-client.vercel.app/book/ch1"
            id="wd-toc-book-link"
            target="_blank"
            rel="noreferrer"
          >
            Chapter 1
          </a>
        </li>
      </ul>

      <p>Linda&apos;s goal: learn by building one section at a time.</p>
    </div>
  );
}