# Web Development Client

Linda Assefa Berhe, CS 5610-02

GitHub: https://github.com/lindaassefa/webdev-client

A3 site: https://webdev-client-git-a3-lindaassefas-projects.vercel.app/

## A1

A1 was the first version of the site. I made Lab 1 with the HTML examples, like headings, lists, tables, images, forms, and links, and I put my name and GitHub on the Labs page. Kambaz was mostly static screens. You can sign in, see course cards on the dashboard, open a course, and click through Home, Modules, and Assignments. The assignment editor was just a form and it did not load real assignment data yet.

## A3

A3 adds Lab 3 and hooks Kambaz up to the reference data. Lab 3 is the JavaScript chapter, so the page goes through variables, arrays, functions, classes, the pathname, the server file list, the add pages, and the todo list. The labs menu highlights whichever lab I am on.

For Kambaz I downloaded the courses, modules, assignments, users, and enrollments json and the screens read from that. The dashboard shows the three courses, Modules and Assignments filter by the course in the url, the editor fills in the title, description, points, and dates for the assignment I opened, and the people table only lists users enrolled in that course. The course heading says People on the people table and Assignments when I am editing an assignment. Home, Modules, and the assignments list still use the last part of the url. The side menus highlight the screen I am actually on.
