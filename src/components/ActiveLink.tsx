import { cloneElement, ReactElement } from 'react';
import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';

interface ActiveLinkProps extends LinkProps {
  children: ReactElement;
  shouldMatchExactHref?: boolean;
}

export function ActiveLink({
  children,
  shouldMatchExactHref = false,
  ...rest
}: ActiveLinkProps) {
  const { pathname } = useRouter();

  let isActive = false;

  if (
    shouldMatchExactHref &&
    (pathname === rest.href || pathname === rest.as)
  ) {
    isActive = true;
  }

  if (
    (!shouldMatchExactHref && pathname.startsWith(String(rest.href))) ||
    pathname.startsWith(String(rest.as))
  ) {
    isActive = true;
  }

  return (
    <Link {...rest}>
      {cloneElement(children, { color: isActive ? 'pink.400' : 'gray.50' })}
    </Link>
  );
}
