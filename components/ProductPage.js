import { useState, useEffect } from "react";
import Image from "next/image";
import Alert from "./Alert";
import QuantityInput from "../components/QuantityInput";

export default function ProductPage({ productId }) {
  const [productDetails, setProductDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [alert, setAlert] = useState(false);
  const [previewPanelSrc, setPreviewPanelSrc] = useState("");
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (newValue) => {
    setQuantity(newValue);
  };

  const fetchProductDetails = async () => {
    try {
      const response = await fetch(`/api/product/${productId}`);
      const data = await response.json();
      console.log(data);
      setProductDetails(data[0]);
      setPreviewPanelSrc(`/aiimages/${data[0].filename}`);
      setIsLoading(false);
    } catch (error) {
      setAlert({ alertType: "error", message: `Error: ${error}` });
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProductDetails();
  }, []);

  function showAlert() {
    setAlert({ alertType: "success", message: "hello there" });
  }

  function showProductImageInPreviewPanel() {}

  return (
    <>
      <Alert alertDetails={alert} />
      {isLoading && (
        <div className="fixed top-0 left-0 w-screen h-screen bg-gray-400 ">
          <div className="flex flex-col items-center justify-center">
            <div className="w-8 h-8 border-4 border-blue-500 border-r-white rounded-full animate-spin"></div>
            <div className="text-2xl">Loading...</div>
          </div>
        </div>
      )}
      {alert && (
        <div className="fixed right-2 top-2 ">
          <Alert alertDetails={alert} />
        </div>
      )}
      <div className="text-center">
        <div className="flex h-screen max-w-7xl m-auto">
          <div className="flex w-2/3 ">
            <div className="w-[20%] border-r-gray-400 flex flex-col items-center">
              <div className="w-3/4 aspect-square overflow-hidden flex justify-center items-center rounded-lg border-2 border-black">
                {productDetails.category == "image" && <Image
                  src={`${productDetails.thumbnail}`}
                  width={50}
                  height={50}
                  alt="product_picture"
                  className="w-full"
                  onClick={() =>
                    showProductImageInPreviewPanel(
                      `${productDetails.filename}`
                    )
                  }
                />}
                {productDetails.category == "video" && <iframe className="w-full h-full" src={productDetails.filename} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>}
              </div>
            </div>
            <div className="w-[80%]">
              <div className="min-h-40 h-full overflow-hidden flex justify-center rounded-lg">
              {productDetails.category == "image" && <Image
                  src={previewPanelSrc}
                  width={500}
                  height={500}
                  alt="product_picture"
                  className="w-full"
                  onClick={() =>
                    showProductImageInPreviewPanel(
                      `/aiimages/${productDetails.filename}`
                    )
                  }
                />}
                {productDetails.category == "video" && <iframe className="w-full h-96" src={productDetails.filename} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>}
              </div>
            </div>
          </div>
          <div className="w-1/2 pl-8 text-left">
            <div className="text-3xl">{productDetails.productName}</div>
            <div>{productDetails.description}</div>
            <div className=" mt-2 p-2 text-gray-500 rounded-lg text-sm">
              <span className="text-3xl text-black p-2">
                <span className="relative -top-1.5 text-sm">&#8377;</span>
                {productDetails.sell_price}
              </span>
              M.R.P:
              <span className="line-through mr-4 p-2">
                &#8377;{productDetails.price}
              </span>
              <span className="mr-4 p-2 text-red-500 text-2xl">
                (-
                {Math.floor(
                  (1 -
                    Number(productDetails.sell_price) /
                      Number(productDetails.price)) *
                    100
                )}
                %)
              </span>
              <div className="pt-4">
                <div className="flex items-center gap-2">
                  <span>Choose the quantity:</span>
                  <QuantityInput
                    value={quantity}
                    min={1}
                    max={10} // Replace with the maximum quantity allowed for the product
                    onChange={handleQuantityChange}
                  />
                </div>
                <div className="flex space-x-2 mt-3">
                  <button className="p-4 w-full bg-orange-500 text-white rounded-lg">
                    Buy Now
                  </button>
                  <button className="p-4 w-full bg-yellow-500 text-white rounded-lg">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
