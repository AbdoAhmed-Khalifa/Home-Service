import Image from 'next/image';
import SignButton from './SignButton';
import Link from 'next/link';

export default function Header() {
  return (
    <div className="p-5 shadow-sm flex justify-between ">
      <Link href="/" className="flex items-center gap-8 ">
        <Image src="/logo.svg" alt="logo" width={180} height={100} />
      </Link>
      <div className="md:flex items justify-between gap-6 lg:gap-14 hidden font-semibold text-xl">
        <Link
          href="/"
          className="hover:scale-105 hover:text-primary cursor-pointer flex items-center"
        >
          Home
        </Link>
        <Link
          href="/search/Cleaning"
          className="hover:scale-105 hover:text-primary cursor-pointer flex items-center"
        >
          Service
        </Link>
        <Link  href="/about" className="hover:scale-105 hover:text-primary cursor-pointer flex items-center">
          About us
        </Link>
      </div>

      <SignButton />
    </div>
  );
}
