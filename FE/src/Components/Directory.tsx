import { useEffect, useState } from "react";
import { getItems, getProducts } from "../api";
import { Link } from "react-router-dom";
import Flag from "react-world-flags";

interface Product {
  name: string;
  image: string;
  country: string;
  parent: string;
  category: string[];
  alternative: string[];
}

interface Item {
  Name: string;
  Image: string;
  Country: string;
  Category: string[];
  AlternativeTo: string[];
  Parent: string;
  HQ: string;
  OpenSource: boolean;
  Summary: string;
  Website: string;
  Votes: number;
}

const Directory = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [friendlyItems, setFriendlyItems] = useState<Item[]>([]);
  const [filteredFriendlyProducts, setFilteredFriendlyProducts] = useState<
    Item[]
  >([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [productSearchQuery, setProductSearchQuery] = useState<string>("");
  const [friendlySearchQuery, setFriendlySearchQuery] = useState<string>("");
  const [showProducts, setShowProducts] = useState<boolean>(false);
  const [countryFilter, setCountryFilter] = useState<string[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [categoryFilter, setCategoryFilter] = useState<string[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const items = await getProducts();
      setProducts(items);
      setFilteredProducts(items);
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    if (productSearchQuery.trim() === "") {
      setFilteredProducts(products);
    } else {
      const lowerQuery = productSearchQuery.toLowerCase();
      const filtered = products.filter((product) =>
        product.name.toLowerCase().startsWith(lowerQuery)
      );
      setFilteredProducts(filtered);
    }
  }, [productSearchQuery, products]);

  useEffect(() => {
    if (friendlySearchQuery.trim() === "") {
      setFilteredFriendlyProducts(friendlyItems);
    } else {
      const lowerQuery = friendlySearchQuery.toLowerCase();
      const filteredFriendly = friendlyItems.filter((friendlyItems) =>
        friendlyItems.Name.toLowerCase().startsWith(lowerQuery)
      );
      setFilteredFriendlyProducts(filteredFriendly);
    }
  }, [friendlySearchQuery, friendlyItems]);

  useEffect(() => {
    if (selectedCategory) {
      const filteredItems = friendlyItems.filter((item) =>
        item.Category.includes(selectedCategory)
      );
      setFilteredFriendlyProducts(filteredItems);
    } else {
      setFilteredFriendlyProducts(friendlyItems);
    }
  }, [selectedCategory, friendlyItems]);

  useEffect(() => {
    const fetchFriendly = async () => {
      const friendlyItems = await getItems();
      setFriendlyItems(friendlyItems);
      setFilteredFriendlyProducts(friendlyItems);

      const countries = Array.from(
        new Set(friendlyItems.map((item) => item.Country))
      );
      const categories = Array.from(
        new Set(friendlyItems.flatMap((item) => item.Category))
      );
      setCountryFilter(countries);
      setCategoryFilter(categories);
    };
    fetchFriendly();
  }, []);

  useEffect(() => {
    if (selectedCountry) {
      const filteredByCountry = friendlyItems.filter(
        (item) => item.Country === selectedCountry
      );
      setFilteredFriendlyProducts(filteredByCountry);
    } else {
      setFilteredFriendlyProducts(friendlyItems);
    }
  }, [selectedCountry, friendlyItems]);

  const handleProductButton = () => {
    setShowProducts((prev) => !prev);
  };

  return (
    <div className="flex flex-col justify-center items-center mt-0">
      <h2 className="text-black font-bold text-[24px] text-center mt-5">
        Alternative Products and Software from Friendly Countries
      </h2>
      <h3 className="text-gray-500 text-[16px] text-center font-style: italic m-5">
        A directory to help educate what alternatives there are to leading
        products, who owns what, and who do they support
      </h3>
      <div className="flex gap-4 w-[85%] justify-center items-center">
        {categoryFilter.length > 0 && !showProducts && (
          <div className="flex ">
            <select
              className="h-9 w-[100%] max-w-100 rounded-xl border border-grey-300"
              value={selectedCategory || "all"}
              onChange={(e) => {
                if (e.target.value === "all") {
                  setSelectedCategory(null);
                } else {
                  setSelectedCategory(e.target.value);
                }
              }}
            >
              <option
                value="all"
                className="bg-gradient-to-b from-blue-600 to-blue-800 text-white"
              >
                All Categories
              </option>
              {categoryFilter.map((cat, index) => (
                <option
                  key={index}
                  value={cat}
                  className="bg-gradient-to-b from-blue-600 to-blue-800 text-white"
                >
                  {cat}
                </option>
              ))}
            </select>
          </div>
        )}

        {!showProducts && (
          <div className="flex">
            <select
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
              className="h-9 w-[100%] max-w-100 border border-black rounded-xl"
            >
              <option value="">All Countries</option>
              {countryFilter.map((country, index) => (
                <option key={index} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </div>
        )}
        {/* {showProducts && (
          <p className="ml-5 text-gray-800 font-bold">
            Below you will find popular products from American companies and
            their friendly alternatives. Simply click on an alternative to go to
            it's product page where you can see it's info and their website
            link.
          </p>
        )} */}
      </div>

      <div className="flex gap-5 w-[100%] mt-4 justify-center items-center">
        <button
          className={`w-15 h-7 flex items-center bg-gray-300 rounded-full p-1 transition ${
            showProducts ? "bg-green-500" : "bg-gray-400"
          }`}
          onClick={handleProductButton}
        >
          <span
            className={`w-6 h-6 bg-white rounded-full shadow-md transition-transform transform ${
              showProducts ? "translate-x-7" : "translate-x-0"
            }`}
          ></span>
        </button>

        {showProducts ? (
          <input
            type="text"
            placeholder="Find An Alternative To..."
            value={productSearchQuery}
            onChange={(e) => setProductSearchQuery(e.target.value)}
            className="p-2 border border-black rounded-xl w-[65%] max-w-80"
          />
        ) : (
          <input
            type="text"
            placeholder="Search Friendly Products"
            value={friendlySearchQuery}
            onChange={(e) => setFriendlySearchQuery(e.target.value)}
            className="p-2 border border-black rounded-xl w-[65%] max-w-80"
          />
        )}
      </div>

      {/* Friendly Products */}

      {filteredFriendlyProducts.length > 0 && !showProducts ? (
        <div className="flex flex-wrap justify-center gap-10 mt-3">
          {filteredFriendlyProducts.map((item, index) => (
            <div
              key={index}
              className="bg-gray-200 w-100 h-auto p-6 rounded-lg shadow-md flex flex-col items-center text-center"
            >
              <Link
                to={`/${item.Name.replace(
                  /[^\p{L}\p{N}]/gu,
                  ""
                ).toLowerCase()}`}
                className="text-xl font-bold text-black hover:underline mt-0"
              >
                {item.Image ? (
                  <img
                    src={item.Image}
                    alt={item.Name}
                    className="w-85 h-20 object-cover rounded-md mb-2"
                  />
                ) : (
                  ""
                )}
                <p className="text-xl">{item.Name}</p>
              </Link>

              <div className="w-full text-left">
                <p className="text-lg text-black font-bold">About:</p>
                <p className="text-md text-gray-700">
                  {item.Summary.split(".")[0]}.
                </p>
              </div>

              {item.Website && (
                <div className="w-full text-left">
                  <p className="text-lg text-black font-bold">Website:</p>
                  <Link
                    to={item.Website}
                    className="text-blue-700 hover:underline"
                  >
                    {item.Website}
                  </Link>
                </div>
              )}

              <div className="w-full text-left mt-3">
                <p className="text-lg text-black font-bold">Open Source?</p>
                <p className="text-md text-gray-700">
                  {item.OpenSource ? "Yes" : "No"}
                </p>
              </div>

              <div className="w-full text-left mt-3">
                <p className="text-lg text-black font-bold">Alternative To:</p>
                <div className="flex flex-wrap gap-1">
                  {item.AlternativeTo.length > 0 ? (
                    item.AlternativeTo.map((alt, idx) => (
                      <span
                        key={idx}
                        className="bg-blue-600 px-2 py-1 rounded text-white text-sm"
                      >
                        {alt}
                      </span>
                    ))
                  ) : (
                    <span className="text-gray-700">
                      No alternatives available
                    </span>
                  )}
                </div>
              </div>

              <div className="flex-row w-full text-left mt-3">
                <p className="text-lg text-black font-bold">HQ & Origin</p>
                <p className="text-md text-gray-700">
                  {item.HQ}, {item.Country}
                </p>
              </div>

              <div className="w-full text-left mt-3">
                <p className="text-lg text-black font-bold">Categories:</p>
                <div className="flex flex-wrap gap-1">
                  {item.Category.length > 0 ? (
                    item.Category.map((cat, idx) => (
                      <span
                        key={idx}
                        className="bg-green-700 px-2 py-1 rounded text-white text-sm"
                      >
                        {cat}
                      </span>
                    ))
                  ) : (
                    <span className="text-gray-700">
                      No categories available
                    </span>
                  )}
                </div>
              </div>
              <div className="w-full text-left mt-2 ">
                <p className="text-lg text-black font-bold">Total Votes:</p>
                <div className="flex items-center text-gray-700">
                  <span className="text-lg">{item.Votes}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        ""
      )}
      {/* Unfriendly Products */}
      {filteredProducts.length > 0 && showProducts ? (
        <div className="flex flex-wrap justify-center gap-10">
          {filteredProducts.map((item, index) => (
            <div
              key={index}
              className="bg-gray-200 w-100 h-60 p-4 rounded-lg shadow-md flex items-center"
            >
              {item.image ? (
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-25 h-30 object-cover rounded-md mr-4"
                />
              ) : (
                <div className="w-25 h-30 bg-gray-400 rounded-md mr-4"></div>
              )}
              <div className="flex flex-col">
                <h2 className="text-xl font-bold mb-2">{item.name}</h2>

                <p className="text-md text-black font-bold">Country:</p>
                <p className="text-md text-black">
                  {item.country ? (
                    <Flag
                      code={item.country.slice(0, 2)}
                      style={{ width: 32, height: 22, borderRadius: "5px" }}
                    />
                  ) : (
                    <span>No country data</span>
                  )}
                </p>
                <p className="text-md text-black font-bold">Alternatives:</p>
                <p className="text-sm text-black">
                  {item.alternative.length > 0 ? (
                    item.alternative.map((alt, idx) => (
                      <Link
                        key={idx}
                        to={`/${alt
                          .replace(/[^\p{L}\p{N}]/gu, "")
                          .toLowerCase()}`}
                        className="inline-block bg-blue-600 p-1 mr-2 mb-1 rounded text-white"
                      >
                        {alt}
                      </Link>
                    ))
                  ) : (
                    <span>No alternatives available</span>
                  )}
                </p>
                <p className="text-sm text-black font-bold">Categories:</p>
                <p className="text-sm text-black">
                  {item.category.length > 0 ? (
                    item.category.map((cat, idx) => (
                      <span
                        key={idx}
                        className="inline-block bg-green-700 p-1 mr-2 rounded text-white"
                      >
                        {cat}
                      </span>
                    ))
                  ) : (
                    <span>No categories available</span>
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Directory;
