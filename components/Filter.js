/* JSON data format => [{productName, shortDescription, description, category, filename, price, sellPrice}, {..}, ...] */

import Card from "@/components/Card";
import { useState, useEffect, useRef } from "react";
import { PropTypes } from "prop-types";
import Link from "next/link";

export default function Filter({ currentCategory, categories }) {
  const [product, setProduct] = useState([]);
  const [filterView, setFilterView] = useState("card");
  const cardViewBtnRef = useRef(null);
  const listViewBtnRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isProductFound, setIsProductFound] = useState(true);

  function loadProducts(url) {
    // fetching products details
    setIsLoading(true);
    setIsProductFound(true);

    let dataProduct = fetchData(url, "", "POST").then(
      (data) => {
        setProduct([data]);
        setTimeout(
          () => {
            setIsLoading(false);
            if (data && data.status == 0) setIsProductFound(false);
          },
          1000,
          data
        );
      },
      (error) => {
        console.error("Problem in Fetching product", error);
      }
    );
  }

  useEffect(() => {
    loadProducts(`/api/category/${currentCategory}`);
  }, []);

  // Filter the Product based on whether they are already downloaded or not
  // const filteredProduct = product.filter((image) => {
  //   if (downloadedProduct.includes(image)) return false;
  //   setDownloadedImages([...downloadedImages, image]);
  //   return true;
  // });

  function handleFilterButtonClick() {
    let filterDropdown = document.getElementById("filterDropdown");
    filterDropdown.classList.toggle("group-hover/dropdown:block");
  }

  function changeCardView(view) {
    setFilterView(view);
    listViewBtnRef.current.firstElementChild.classList.add("opacity-0");
    cardViewBtnRef.current.firstElementChild.classList.add("opacity-0");
    if (view == "card")
      cardViewBtnRef.current.firstElementChild.classList.remove("opacity-0");
    if (view == "list")
      listViewBtnRef.current.firstElementChild.classList.remove("opacity-0");
  }

  return (
    <>
      <div className="flex min-h-screen">
        <div className="w-1/6 h-screen">
          <div className="p-6">
            <h1 className="text-xl font-bold">Category</h1>
            <ul>
              {categories &&
                categories.map((category, index) => {
                  return (
                    <>
                      <li key={index + "123"} className="">
                        <Link
                          className="pl-2 cursor-pointer hover:text-orange-500"
                          href={`/category/${category}`}
                          onClick={() => {
                            loadProducts(`/api/category/${category}`);
                          }}
                        >
                          {category}
                        </Link>
                      </li>
                    </>
                  );
                })}
            </ul>
          </div>
        </div>
        <div className="w-9/12">
          <div className="flex justify-between p-5">
            <span className="text-4xl font-bold">{currentCategory.toUpperCase()}</span>

            {/* Filter Dropdown */}
            <span>
              <div className="relative inline-block text-left group/dropdown">
                <div>
                  <button
                    type="button"
                    className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                    id="menu-button"
                    aria-expanded="true"
                    aria-haspopup="true"
                    onClick={handleFilterButtonClick}
                  >
                    Filter
                    <svg
                      className="-mr-1 h-5 w-5 text-gray-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
                <div
                  id="filterDropdown"
                  className="group-hover/dropdown:block absolute hidden border-2 border-gray-300 right-0 z-10 w-56 origin-top-right rounded-md bg-white shadow-lg focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="menu-button"
                  tabIndex="-1"
                >
                  <div className="py-1" role="none">
                    <button
                      onClick={() => changeCardView("card", this)}
                      ref={cardViewBtnRef}
                      href="#"
                      className="w-full text-gray-700 block px-4 py-2 text-sm hover:bg-gray-300 "
                      role="menuitem"
                      tabIndex="-1"
                      id="menu-item-0"
                    >
                      <span className="mr-3">✓</span>Card view
                    </button>
                    <button
                      onClick={() => changeCardView("list", this)}
                      ref={listViewBtnRef}
                      href="#"
                      className="w-full text-gray-700 block px-4 py-2 text-sm hover:bg-gray-300 "
                      role="menuitem"
                      tabIndex="-1"
                      id="menu-item-1"
                    >
                      <span className="mr-3 opacity-0">✓</span>List View
                    </button>
                  </div>
                </div>
              </div>
            </span>
          </div>
          <hr className="text-black bg-black h-1 mb-4" />
          {isLoading && (
            <>
              <div className="flex flex-col items-center justify-center">
                <div className="w-8 h-8 border-4 border-blue-500 border-r-white rounded-full animate-spin"></div>
                <div className="text-2xl">Loading...</div>
              </div>
            </>
          )}
          {!isProductFound && (
            <div className="text-center text-2xl">Product not found</div>
          )}
          {
            <div
              className={`text-center text-2xl ${
                product &&
                product.length > 0 &&
                product[0] &&
                product[0].status == 1 &&
                product[0].response.length == 0
                  ? "block"
                  : "hidden"
              }`}
            >
              Data not found
            </div>
          }
          <div
            className={`relative mt-10 min-h-screen ${
              filterView == "card" ? "grid" : "flex"
            } ${
              filterView == "card" ? "grid-cols-4" : "flex-col"
            } gap-10 p-3 justify-center`}
          >
            {product &&
              product.length > 0 &&
              product[0] &&
              product[0].status == 1 &&
              product[0].response.map((productDetails, index) => {
                return (
                  <Card
                    key={index}
                    view={filterView}
                    productDetails={productDetails}
                  />
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
}

export async function fetchData(url, body, requestType) {
  requestType = String(requestType).toUpperCase();
  console.log(JSON.stringify(body));
  try {
    // Fetch Product from the API here and store them in 'Product'
    // For simplicity, let's assume you have the fetched data as 'ProductData'
    let response = await fetch(url, {
      headers: {
        accept: "text/json",
      },
      // referrerPolicy: "strict-origin-when-cross-origin",
      body: JSON.stringify(body),
      method: requestType,
      // mode: "cors",
    });
    let data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching Data:", error);
  }
}

Filter.defaultProps = {
  body: "category:image&limit=20",
  path: "/category/image",
  category: "image",
  type: "POST",
};

Filter.propTypes = {
  body: PropTypes.string,
  hostnameWithSchema: PropTypes.string,
  path: PropTypes.string,
  requestType: PropTypes.string,
};
