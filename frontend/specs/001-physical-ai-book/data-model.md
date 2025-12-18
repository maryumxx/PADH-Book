# Data Model: Physical AI Documentation Book

## Entities

### Module

-   **Name**: Module title (e.g., "The Robotic Nervous System")
-   **Description**: Brief overview of the module
-   **Number**: Unique identifier for the module (e.g., 1, 2)
-   **Chapters**: Ordered list of Chapter entities belonging to this module

### Chapter

-   **Name**: Chapter title (e.g., "ROS 2 Middleware")
-   **Number**: Unique identifier within its module (e.g., 01, 02)
-   **Slug**: URL-friendly identifier (e.g., `ros-middleware`)
-   **MDX Content**: The actual content of the chapter, written in MDX
-   **Frontmatter**:
    -   `id`: Unique slug
    -   `title`: Chapter title
    -   `description`: Concise summary for SEO
    -   `sidebar_label`: Short title for sidebar
    -   `keywords`: Array of relevant keywords
    -   `image`: Social card image path
-   **Navigation**: Links to `previous` and `next` chapters (derived from sidebar order)

### Page (Static)

-   **Name**: Page title (e.g., "Home", "About", "Contact")
-   **Path**: URL path (e.g., `/`, `/about`, `/contact`)
-   **Content**: MDX or React component content
-   **Metadata**: For Home and About pages, includes SEO-related frontmatter like title, description, keywords.

### Contact Submission

-   **Name**: User's name (string)
    -   **Validation**: Required
-   **Email**: User's email address (string)
    -   **Validation**: Required, valid email format
-   **Message**: User's message (string)
    -   **Validation**: Required, minimum length
-   **Timestamp**: Date and time of submission (ISO 8601 string)
-   **Storage**: Stored in browser `localStorage` as a JSON array of submissions.
    -   **Retention**: Persists until user clears browser data.
    -   **Encryption**: None (as per non-goals of no backend/auth)

## Relationships

-   A **Module** contains multiple **Chapters**.
-   **Chapters** are ordered sequentially within a **Module**.
-   **Pages** are independent of **Modules** and **Chapters**, but can link to them.
-   **Contact Submissions** are independent data entities, stored locally in the browser.

## Data Flow

1.  **Content Rendering**: Docusaurus reads MDX files from `docs/` to render **Modules** and **Chapters**. Frontmatter is parsed for metadata.
2.  **Contact Form**: User submits data on the **Contact Page**. JavaScript captures `Name`, `Email`, `Message`, `Timestamp`, and saves it as a `Contact Submission` object to `localStorage`.
3.  **Theme Preference**: Dark/light mode preference is saved to `localStorage` to persist across sessions.
4.  **Reading Progress**: Future implementation will save reading progress per chapter to `localStorage`.
