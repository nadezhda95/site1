import {
  GradientText,
  Newsletter,
  Section,
} from 'astro-boilerplate-components';

const CTA = () => (
  <Section>
    <Newsletter
      title={
        <>
          Contact me via this <GradientText>Website</GradientText>
        </>
      }
      description={
        <>
          Or you always can reach me in <GradientText><a href="https://t.me/brainwashed_from_rock">Telegram</a></GradientText>
        </>
      }
    />
  </Section>
);

export { CTA };
