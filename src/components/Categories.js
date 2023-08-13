import Link from "next/link";

export default function Categories() {
  return (
    <>
      <div className="md:h-[calc(100dvh-100px)] flex flex-col md:flex-row justify-center items-center space-y-4 md:space-x-10 md:items-center p-4">
        <Link className="relative hover:scale-[1.05] transition-all" href="/category/image">
          <div className="w-72 xs:w-80 sm:w-96 bg-orange-500 text-white rounded-lg flex justify-center items-center min-h-[300px] md:min-h-[500px] bg-[url(/aiimages/11.jpeg)] bg-cover brightness-50"></div>
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-center space-y-3">
            <h1 className="text-4xl">Images</h1>
            <p>Enjoy fun with these coding related Images</p>
          </span>
        </Link>
        <Link className="relative hover:scale-[1.05] transition-all" href="/category/video">
          <div className="w-72 xs:w-80 sm:w-96 bg-orange-500 text-white rounded-lg flex justify-center items-center min-h-[300px] md:min-h-[500px] bg-[url(/aiimages/14.jpeg)] bg-cover brightness-50"></div>
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-center space-y-3">
            <h1 className="text-4xl">Videos</h1>
            <p>Hmm... You like videos Alot. Don&apos;t Worry we have Video as well</p>
          </span>
        </Link>
      </div>
    </>
  );
}
