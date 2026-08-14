import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="flex flex-col justify-center text-center flex-1">
      <h1 className="text-2xl font-bold mb-4">This website is a work in progress!</h1>
      <p>
        While this website is being developed, our {' '}
        <Link href="/docs" className="font-medium underline">
          documentation
        </Link>{' '}
        does have content, maybe you should go check that out!
      </p>
    </div>
  );
}
