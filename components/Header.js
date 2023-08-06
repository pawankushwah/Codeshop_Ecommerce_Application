import Image from "next/image";
import Link from "next/link";

export default function Header() {
    function handleClick(){
        console.log("good search");
    }
  return (
    <>
        <div className="p-4 mb-4 w-full flex justify-around items-center border-b-4 border-red-400 sticky top-0 z-10 bg-[rgb(255,255,255,0.8)]">
            <Link href='/'>
                <Image src="/images/codeshop logo.png" alt="Codeshop Logo" width={100} height={100} />
            </Link>
            <span className="relative flex items-center hidden md:block">
                <input type="text" id="searchbar" className="border-2 border-black rounded-lg p-2 w-96" placeholder="Search Codeshop..." />
                <button htmlFor="searchbar" className="text-3xl absolute right-0" onClick={handleClick}>&#128269;</button>                
            </span>
            <Link href={'/auth/login'}>
                <button className="h-14 w-14 rounded-full border-2 border-gray-300 text-4xl overflow-hidden text-center">&#128100;</button>
            </Link>
        </div>
    </>
  )
}
