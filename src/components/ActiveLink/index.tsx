import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';
import { ReactElement } from 'react';

interface ActiveLinkProps extends LinkProps {
  children: ReactElement | string;
  activeClassName: string;
}

export function ActiveLink({
  children,
  activeClassName,
  ...rest
}: ActiveLinkProps) {
  const { asPath } = useRouter();

  const style = asPath === rest.href ? activeClassName : '';

  return (
    <Link {...rest} className={style}>
      {children}
    </Link>
  );
}
