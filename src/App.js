import React, { useState, useEffect } from 'react';
import { marked } from 'marked';
import './App.css';

const initialMarkdown = `
# Heading (H1)
## Subheading (H2)

This is a [link](https://www.example.com).

Here is some \`inline code\`.

\`\`\`
This is a code block.
\`\`\`

- List item

> Blockquote

![Image](https://via.placeholder.com/150)

**Bold text**
`;

function App() {
  const [markdown, setMarkdown] = useState(initialMarkdown);

  const handleChange = (event) => {
    setMarkdown(event.target.value);
  };

  return (
    <div className="App">
      <textarea
        id="editor"
        value={markdown}
        onChange={handleChange}
      />
      <div
        id="preview"
        dangerouslySetInnerHTML={{ __html: marked(markdown) }}
      />
    </div>
  );
}

export default App