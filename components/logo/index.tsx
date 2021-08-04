import { css } from '@emotion/react'
import { DiNodejsSmall as Forwardslash } from 'react-icons/di'

const forwardslashStyles = css`
  position: relative;
  top: 0.025em;
  margin-left: -0.75rem;
  margin-right: -0.75rem;
`
const logoStyles = css`
  color-text: var(--color-text-invert);
  font-size: 4rem;
  display: block;
  text-align: center;
  font-variant: small-caps;
`

const Logo = () => (
  <span css={logoStyles}>
    Forwardslash <Forwardslash css={forwardslashStyles} /> Development
  </span>
)

export default Logo
