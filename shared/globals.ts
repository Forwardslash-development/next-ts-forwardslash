import { css } from '@emotion/react'

export const globalStyles = css`
  :root {
    --page-background: #000066;
    --page-text: #ddd;
  }
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-systems, BlinkMacSystemsFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Nueve, sans-serif;
    background-color: var(--page-background);
    color: var(--page-text);
  }

  a {
    color: inherit;
    text-decoration: none;
  }
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }
`
