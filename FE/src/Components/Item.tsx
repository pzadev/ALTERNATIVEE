import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getItems } from "../api";
import { updateVotes } from "../api";

const Item = () => {
  const { alternative } = useParams();
  const [product, setProduct] = useState<any | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchItemData = async () => {
      try {
        const products = await getItems();
        const foundProduct = products.find(
          (it) =>
            it.Name.split(" ").join("").toLowerCase() ===
            alternative?.toLowerCase()
        );

        if (foundProduct) {
          setProduct(foundProduct);
        } else {
          return;
        }
      } catch (error) {
        setError("Failed to fetch data!");
        console.log(error);
        console.log("failed");
      } finally {
        setLoading(false);
      }
    };

    if (alternative) {
      fetchItemData();
    }
  }, []);

  const handleVoteUpdate = async (voteChange: number, productName: string) => {
    try {
      await updateVotes(voteChange, productName);
    } catch (error) {
      console.error("Error updating votes:", error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="flex justify-center items-center bg-white p-8 rounded-lg shadow-lg max-w-3xl mx-auto">
      {product ? (
        <div className="w-full flex flex-col items-center space-y-6">
          <img
            src={product.Image}
            alt={product.Name}
            className="h-[40%] w-[40%] object-cover rounded-md shadow-md"
          />

          <div className="text-left space-y-4">
            <h1 className="text-3xl font-semibold text-gray-800">
              {product.Name}
            </h1>

            <div className="flex items-center justify-center mt-3 space-x-3">
              <button
                className=" cursor-pointer bg-green-500 px-3 py-1 rounded text-white text-sm hover:bg-green-600 transition"
                onClick={() => handleVoteUpdate(1, product.Name)}
              >
                ▲ Upvote
              </button>
              <span className="text-lg font-bold">{product.Votes}</span>

              <button
                className="cursor-pointer bg-red-500 px-3 py-1 rounded text-white text-sm hover:bg-red-600 transition"
                onClick={() => handleVoteUpdate(-1, product.Name)}
              >
                ▼ Downvote
              </button>
            </div>

            <p className="text-lg text-black">
              <strong className="font-medium"></strong>
              {product.Website || ""}
            </p>

            <p className="text-lg text-black">
              <strong className="font-medium"></strong>
              {product.Summary || "No summary available."}
            </p>

            <p className="text-lg text-black">
              <strong className="font-medium">Country:</strong>{" "}
              {product.Country}
            </p>

            <p className="text-lg text-black">
              <strong className="font-medium">Category:</strong>{" "}
              {product.Category}
            </p>

            <p className="text-lg text-black">
              <strong className="font-medium">Parent Company:</strong>{" "}
              {product.Parent || "N/A"}
            </p>

            <p className="text-lg text-black">
              <strong className="font-medium">HQ:</strong> {product.HQ || "N/A"}
            </p>

            <p className="text-lg text-black">
              <strong className="font-medium">Alternative To: </strong>
              {product.AlternativeTo.length > 0 ? (
                <span className="text-blue-600">
                  {product.AlternativeTo.join(", ")}
                </span>
              ) : (
                <span className="italic text-gray-500">
                  No alternatives listed
                </span>
              )}
            </p>

            <p className="text-lg text-gray-600">
              <strong className="font-medium">Open Source:</strong>{" "}
              {product.OpenSource ? "Yes" : "No"}
            </p>
          </div>
        </div>
      ) : (
        <div className="text-center text-xl text-gray-600">
          No product found
        </div>
      )}
    </div>
  );
};

export default Item;
