import { Icon } from '@blueprintjs/core';
import Link from 'next/link';

import NavBar from '@components/Navbar';
import HomeSvg from './HomeSvg';
import styles from './styles/Header.module.css';

export default function HomeHeaderAndNav({ title }) {
  const placeholderTitle = (
    <span>
      Tarjoamme palveluita <span className={styles.highlight}>liikennejärjestelmiin ja riskienhallintaan</span> liittyvän päätöksenteon tueksi
    </span>
  );

  return (
    <>
      <div className={styles.header + " " + styles.snapArea} >
        <HomeSvg className={styles.svgLayer} src="/img/wave_white.svg" />
        <NavBar />
        <div className={styles.titlewrapper}>
          <div className={styles.title}>
            <h1>{placeholderTitle}</h1>

            <Link href={'/tiimi'}>
              <h3>
                Tutustu meidän tiimiin <Icon icon="arrow-right" />
              </h3>
            </Link>

            <Link href={'/blogi/lentovero'}>
              <h3>
                Lue lentoveroselvityksen tuloksista <Icon icon="arrow-right" />
              </h3>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
