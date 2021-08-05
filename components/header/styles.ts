import { css } from '@emotion/react'

const SR_ONLY = `
  clip: react(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden:
  white-space: nowrap;
  width: 1px;
`

const container = css`
  min-height: 40vh;
  display: grid;
  place-items: center;
  background-color: var(--background-accent);
`

const title = css`
  ${SR_ONLY}
`

export { container, title }
