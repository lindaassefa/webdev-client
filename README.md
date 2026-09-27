# Web Development Client

This is my CS 5610 A1 project. I used Next.js, React, and TypeScript to build the Lab 1 HTML examples and the first version of Kambaz. A1 focuses on structure and navigation, so this is still a prototype.

Live site: https://webdev-client-drab.vercel.app/

## Walking through the site

The home URL takes you to the sign-in screen. Its Sign in link opens the dashboard, where three course cards lead to course Home pages. Inside a course, the navigation links to Modules and Assignments. Home shows the modules beside Course Status. The Modules page groups content by week and lesson.

The Assignments page lists A1, A2, and A3. Each assignment links to an editor with fields for its name, description, points, submission options, and dates. These are HTML screens; they do not save data yet.

The Labs link opens `/labs`, which has my name, section, GitHub link, and lab navigation. Lab 1 at `/labs/lab1` covers headings, paragraphs, lists, tables, images, forms, highlighted paragraphs and boxes, and links. Each topic has its own component under `app/labs/lab1/`, and the Lab 1 page brings them together. The Labs table of contents appears beside the lab pages through a shared layout.

The Kambaz pages are under `app/(kambaz)/`. The dashboard uses a `CourseCard` component for its three courses. The course layout uses the course ID in the URL so its navigation links stay within the selected course. The Assignments page uses an `AssignmentItem` component for each assignment.

## What I did myself and where AI helped

I completed the A1 sections marked **On your own** myself: the personal heading and paragraphs, recipe and favorites lists, study schedule table, personal image and links, Student Profile form, highlighted examples, Lab 4 page and link, and the Assignments list and editor.

For the sections marked **With AI**, I used AI to help add the extra heading outline and paragraph, HTML tag list, Q4–Q10 and the updated average, an additional image and documentation link, form and highlighted component variations, the Lab 5 placeholder, and the Chapter 1 link in the Labs table of contents. I also used AI for explanations and troubleshooting while building the project.
