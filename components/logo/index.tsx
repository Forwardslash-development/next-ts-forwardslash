import { css } from '@emotion/react'
import { DiNodejsSmall as Forwardslash } from 'react-icons/di'

const forwardslashStyles = css`
  position: relative;
  top: 0.025em;
  margin-left: -0.75rem;
  margin-right: -0.75rem;
  color: #ffffff;
`
const logoStyles = css`
  font-size: 4rem;
  display: block;
  text-align: center;
  font-variant: small-caps;
  color: #fff;
`

const Logo = () => (
  <span css={logoStyles}>
    Forwardslash <Forwardslash css={forwardslashStyles} /> Development
  </span>
)

export default Logo
