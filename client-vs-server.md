## What is Server-Side Rendering:
In server-side rendering when a user makes a request to a webpage, the server prepares an HTML page by fetching user-specific data and sends it to the user’s machine over the internet. The browser then construes the content and displays the page. This entire process of fetching data from the database, creating an HTML page and sending it to client happens in mere milliseconds.

![Server](/img/server-side.png "Server")
## What is Client-Side Rendering:

When we talk about client-side rendering, it’s about rendering content in the browser using JavaScript. So instead of getting all the content from the HTML document itself, a bare-bones HTML document with a JavaScript file in initial loading itself is received, which renders the rest of the site using the browser.client

![Client](/img/client-side.png "Client")
### Today, Angular and React.js are some of the best examples of libraries used in client-side rendering.  

### Server-side pros:
- Search engines can crawl the site for better SEO.
- The initial page load is faster.
- Great for static sites.
### Server-side cons:
- Frequent server requests.
- An overall slow page rendering.
- Full page reloads.
- Non-rich site interactions.
### Client-side pros:
- Rich site interactions
- Fast website rendering after the initial load.
- Great for web applications.
- Robust selection of JavaScript libraries.
### Client-side cons:
- Low SEO if not implemented correctly.
- Initial load might require more time.
- In most cases, requires an external library.
- Now that you’re aware of the pros and cons of each approach, let’s take a look at ideal scenarios for their implementation.

## When to use server-side rendering
- An application has very simple UI with fewer pages/features
- An application has less dynamic data
- Read preference of the site is more than write
- The focus is not on rich site and has few users
## When to use client-side rendering
- An application has very complex UI with many pages/features
- An application has large and dynamic data
- Write preference of the site is more than reading
- The focus is on rich site and a huge number of users