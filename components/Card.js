/* productdetails object format - {productName, shortDescription, description, category, filename, price, sellPrice}  */
import Image from "next/image";
import Link from "next/link";

export default function card({ view, productDetails }) {
  // console.log(productDetails);
  let productPriceOffPercentage =
    (1 - Number(productDetails.sell_price) / Number(productDetails.price)) *
    100;
  // console.log(productPriceOffPercentage);
  productPriceOffPercentage = Math.floor(productPriceOffPercentage);

  return (
    <>
      <Link href={`/product/${productDetails._id}`}>
        {view == "list" && (
          <div className="bg-gray-300 rounded-xl flex w-full h-42">
            <div className="hover:scale-[250%] transition-all duration-500">
              <Image
                src={`/aiimages/${productDetails.filename}`}
                alt={`image`}
                width={100}
                height={50}
                className="w-full rounded-lg"
              />
            </div>
            <div className="p-2 w-full">
              <div className=" bg-white rounded-lg">
                <div className="text-xl p-2">{productDetails.productName}</div>
                <div className="text-md text-gray-600 p-2">
                  {productDetails.description}
                </div>
              </div>
              <div className=" mt-2 p-2 text-gray-500 rounded-lg text-sm">
                <span className="text-3xl text-black p-2">
                  <span className="relative -top-1.5 text-sm">&#8377;</span>
                  {productDetails.sell_price}
                </span>
                M.R.P:
                <span className="line-through mr-4 p-2">
                  &#8377;{productDetails.price}
                </span>
                <span className="mr-4 p-2 text-black">
                  ({productPriceOffPercentage}% off)
                </span>
              </div>
            </div>
          </div>
        )}

        {view == "card" && (
          <div className="bg-gray-300 rounded-xl">
            <div className="hover:scale-105 transition-all duration-500">
              <Image
                src={`/aiimages/${productDetails.filename}`}
                alt={`image`}
                width={200}
                height={100}
                className="w-full rounded-lg"
              />
            </div>
            <div className="p-2">
              <div className="text-center bg-white rounded-lg">
                <div className="text-xl">{productDetails.productName}</div>
                <div className="text-md text-gray-600">
                  {productDetails.shortDescription}
                </div>
              </div>
              <div className=" mt-2 p-2 text-gray-500 rounded-lg text-sm">
                <span className="text-3xl text-black p-2">
                  <span className="relative -top-1.5 text-sm">&#8377;</span>
                  {productDetails.sell_price}
                </span>
                <span className="line-through mr-4 p-2">
                  &#8377;{productDetails.price}
                </span>
                <span className="mr-4 p-2 text-black">
                  ({productPriceOffPercentage}% off)
                </span>
              </div>
              <button className="mt-2 w-full bg-orange-500 text-white rounded-lg">
                Buy Now
              </button>
              <button className="mt-2 w-full bg-yellow-500 text-white rounded-lg">
                Add to Cart
              </button>
            </div>
          </div>
        )}
      </Link>
    </>
  );
}
