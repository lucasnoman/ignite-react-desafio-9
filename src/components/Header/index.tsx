import Image from 'next/image';
import logo from 'public/images/logo.svg';
import { ActiveLink } from '../ActiveLink';
import { SignInButton } from '../SignInButton';
import styles from './styles.module.scss';

export function Header() {
  return (
    <header className={styles.headContainer}>
      <div className={styles.headerContent}>
        <Image src={logo} alt='Logo do app' />
        <nav>
          <ActiveLink href={'/'} activeClassName={styles.active}>
            Home
          </ActiveLink>
          <ActiveLink href={'/posts'} activeClassName={styles.active}>
            Posts
          </ActiveLink>
        </nav>

        <SignInButton />
      </div>
    </header>
  );
}
