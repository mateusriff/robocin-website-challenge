# Project Overview

This project is my submission for RobôCIn's Front-end challenge. This is a Single-Page Application that addresses a few issues of RobôCIn's current website. The application is built using **React, Styled Components and the Next 13 framework**.

## The Challenge

RobôCIn is a Research & Development group in the field of robotics from the Federal University of Pernambuco, Brazil. Their current website has some flaws, which make it difficult to maintain and update. The goal of this challenge was to identify these issues and create a new website that solves them.

### The Worst Offenders

- The current website is built using HTML, CSS, and JavaScript without modern front-end libraries like React. This has led to files with hundreds of lines of pure HTML code, making it difficult to maintain and update the website and negatively impacting its performance. 
- The content of the website is either hard-coded or stored in JSON files within the website itself. This makes updating content difficult and time-consuming, as it requires direct modification of the files. 
- A few sections of the website are redundant or misplaced. For example, the "Information" section of the home page has the same content as the navigation bar. Additionally, there is a separate page for "Contact," but it would be more effective to have this information on the home page. The overall design also felt bland and generic.

### How My Submission Solves These Issues

- The new website is built using React and Next 13, providing a modular and scalable structure that makes it easier to maintain and update the codebase. React also allows for efficient management of the application's state, making it easier to keep track of changes. With server-side rendering, these tools also make the website's performance much better.
- The website uses Sanity.io as its Content Management System. Sanity is a headless CMS that provides an easy-to-use interface for managing website content. This allows the website's content to be updated easily, without requiring direct modification of the codebase. Additionally, Sanity provides a flexible and scalable solution, allowing for easy expansion of the website's content in the future.
- The website's sections have been overhauled and reimagined with a new, modern, and minimalist design. This improves the website's usability and aesthetics, making it more accessible to a wider audience. To grant more flexibility to the design, I used the Styled Components library instead of Bootstrap. 

# Conclusion

In conclusion, this project provides an efficient and modern solution to the challenges faced by RobôCIn's current website. The use of modern front-end libraries like React, along with a headless CMS like Sanity, allows for easy maintenance and management of the website's codebase and content. Additionally, the redesign of the website's sections provides a more visually appealing and accessible user experience.

### `Notes`

- Sanity Studio's page can be accessed via the `/admin` path. It might take about a minute to load, so don't worry if it takes a while. Mind that I'm the only one with permition to access and manage the studio. So although you can access the studio's page, you won't be able to see or manage it. 
- Sanity was only used to manage the content of the "Membros" page because I thought that was enough to showcase how it could solve the content-related issues of the current website. The rest of the content is either hard-coded or stored in JavaScript objects (which work just like JSONS), but this could be easily changed and any content could be fetched from Sanity with a few tweaks. 
