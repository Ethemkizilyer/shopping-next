import Link from 'next/link';

const BetterLink = ({ href, children }) => {

  return (
    <Link href={href}>
      {children}
    </Link>
  );
};

export default BetterLink;
