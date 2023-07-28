import Image from "next/image";

export default function Header() {
    function handleClick(){
        console.log("good search");
    }
  return (
    <>
        <div className="p-4 w-full flex justify-around items-center border-b-4 border-red-400 sticky top-0 z-10 bg-[rgb(255,255,255,0.8)]">
            <span>
                <Image src="/images/codeshop logo.png" alt="Codeshop Logo" width={100} height={100} />
            </span>
            <span className="relative flex items-center hidden md:block">
                <input type="text" id="searchbar" className="border-2 border-black rounded-lg p-2 w-96" placeholder="Search Codeshop..." />
                <button htmlFor="searchbar" className="text-3xl absolute right-0" onClick={handleClick}>&#128269;</button>                
            </span>
        </div>
    </>
  )
}
