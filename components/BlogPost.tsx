    // import { HTMLAttributes, ReactHTML } from 'react';
    // import React from 'react';


    // interface BlogPostProps {
    // id: string;
    // title: string;
    // html: string; // Explicitly type the html prop
    // }
    // export default function BlogPost({ id, title, html }: BlogPostProps) { // Use the interface

    // // Convert the string into a react element. This needs to be done for SSR related purposes.
    // const reactHtml = React.createElement('p', { dangerouslySetInnerHTML: { __html: html } });

    // return (
    //     <article id={id}> {/* Use semantic HTML: <article> or <section> */}
    //     <h3>{title}</h3>
    //     <div> {/* Wrap the HTML content in a div */}
    //         {reactHtml}
    //     </div>
    //     </article>
    // );
    // }
