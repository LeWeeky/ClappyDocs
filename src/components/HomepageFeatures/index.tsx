import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'OpenSource',
    Svg: require('@site/static/img/opensource.svg').default,
    description: (
      <>
        Our projects are opensource so you can download, read, edit, and share source code.
      </>
    ),
  },
  {
    title: 'Tutorials & Examples',
    Svg: require('@site/static/img/tutorials_and_examples.svg').default,
    description: (
      <>
		As well as all the data and concepts, we've included a number of tutorials to help you find your way
		during the development of your project.
      </>
    ),
  },
  {
    title: 'Success',
    Svg: require('@site/static/img/success.svg').default,
    description: (
      <>
		I know that... Reading documentation can be a bit... boring... But you need it to
		succeed! Don't worry, we've tried to make it user-friendly and easy to understand.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
