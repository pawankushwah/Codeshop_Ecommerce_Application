import Link from "next/link";

export default function Footer() {
    const currentYear = new Date().getFullYear();
  return (
    <>
    <div className="mt-10 text-white text-center">
    <a href="#top" className="bg-gray-500 inline-block w-full p-4">Back to top</a>
    <div className='h-20 min-h-20 text-center bg-gray-700'>&copy; 2021-{currentYear}, Pawan Kushwah</div>
    </div>
    </>
  )
}
