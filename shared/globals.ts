import { css } from '@emotion/react'

export const globalStyles = css`
  :root {
    --page-width: 800px;
    --page-background: rgb(240, 240, 240);
    --page-text: rgb(0, 0, 0);
    --background-accent: rgb(0, 0, 102);
    --color-text-invert: rgb(240, 240, 240);
    --color-accent: rgb(0, 0, 102);
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
