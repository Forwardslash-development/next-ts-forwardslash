import { css, keyframes } from '@emotion/react'
import Image from 'next/image'
import Page from '@layout/page'
import { FcAbout as AboutIcon } from 'react-icons/fc'

const rotate = keyframes`
  from {
    transform: rotate(0)
  }
  to {
    transform: rotate(360)
  }
`

const header = css`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 2ch;
`
const aboutImage = css`
  border-radius: 50%;
`

const aboutTitle = css`
  margin-right: 1ch;
  font-weight: 200;
`

const aboutIconStyles = css`
  margin-left: 1ch;
  position: realtive;
  top: 5px;
  color: var(--color-accent);
  animation: ${rotate} 5s linear infinate;
`
const sectionText = css`
  margin-top: 5ch;

  p {
    max-width: 60ch;
    margin: 0 auto;
  }

  > p + p {
    margin-top: 3ch;
  }
`

const footer = css`
  margin-top: 5ch;
  margin-right: 5ch;
  text-align: right;
`

const About = () => (
  <Page
    meta={{
      title: 'About',
      description: 'Modern Application Development',
    }}
  >
    <section css={header}>
      <Image
        css={aboutImage}
        src="/assets/images/IMG_20191230_141102_360.jpg
      "
        width={192}
        height={192}
      />
      <h2 css={aboutTitle}>
        <span>About Forwardslash Development</span>
        <AboutIcon css={aboutIconStyles} />
      </h2>
    </section>
    <section css={sectionText}>
      <p>
        Burying faithful suicide right ultimate self ultimate evil moral noble
        faith prejudice. Snare horror eternal-return chaos morality snare self.
        Fearful reason horror enlightenment ultimate love revaluation will war
        spirit decrepit free deceptions. Gains evil victorious merciful hope sea
        right christianity decieve good.
      </p>
      <p>
        Aversion gains hatred disgust justice justice reason overcome truth war
        morality endless christianity noble. Value justice zarathustra society
        self superiority overcome value revaluation ubermensch christian ideal
        convictions overcome. Dead free oneself value hope faith society
        ubermensch joy of virtues. Snare convictions reason justice revaluation.
        Good salvation ascetic merciful depths chaos christian madness. Dead
        sexuality against merciful transvaluation. Gains horror christian
        endless virtues transvaluation faith overcome morality.
      </p>
    </section>
    <section css={footer}>
      <small>Source: </small>
      <a href="" rel="noopenr noreferrer" target="_blank">
        Forwardslash Development Ipsum
      </a>
    </section>
  </Page>
)

export default About
