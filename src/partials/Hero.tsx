import {
  GradientText,
  HeroAvatar,
  HeroSocial,
  Section,
} from 'astro-boilerplate-components';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          Hi there, I'm <GradientText>Nadya</GradientText> 👋
        </>
      }
      description={
        <>
          I call myself {' '}
          <a className="text-cyan-400 hover:underline" href="/">
            Data Enthusiast
          </a>{' '}
          , however I enjoy working with{' '}
          <a className="text-cyan-400 hover:underline" href="/">
            computer technologies
          </a>{' '}
          in general.
          My projects help users to have the best possible experience interacting with their data.
          To do so I leverage available tools and create a meaningful{' '}
          <a className="text-cyan-400 hover:underline" href="/">
            data foundation.
          </a>{' '}
          This includes comprehensive analysis, improving data quality, data availability and integrity, as well as visualization and user-friendly interface development.
        </>
      }
      avatar={
        <img
          className="h-80 w-64"
          src="/assets/images/avatar.svg"
          alt="Avatar image"
          loading="lazy"
        />
      }
      socialButtons={
        <>
          <a href="https://t.me/brainwashed_from_rock">
            <HeroSocial
              src="/assets/images/telegram-icon.png"
              alt="Telegram icon"
            />
          </a>
          <a href="https://www.linkedin.com/in/nadezhda-sitdikova/">
            <HeroSocial
              src="/assets/images/linkedin-icon.png"
              alt="Linkedin icon"
            />
          </a>
        </>
      }
    />
  </Section>
);

export { Hero };
