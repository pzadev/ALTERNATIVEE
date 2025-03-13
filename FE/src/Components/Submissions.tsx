import { useState } from "react";
import { postItem } from "../api";

const Submissions = () => {
  const [formData, setFormData] = useState({
    Name: "",
    Summary: "",
    AlternativeTo: [""],
    Category: [""],
    Website: "",
    Image: "",
    Country: "",
    HQ: "",
    Parent: "",
    OpenSource: false,
    Votes: 0,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await postItem(formData);
      console.log("Response:", response);
      alert("Thank you for your submission! Our team will review it soon.");
    } catch (error) {
      console.error("Submission failed:", error);
      alert("Something went wrong. Please try again.");
    }
  };
  return (
    <div className="flex flex-col items-center p-6 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-4">
        Suggest a Product, Company or Service
      </h1>
      <p className="text-gray-800 text-lg mb-4 text-center">
        Help us grow our database of friendly products, companies and services.
        Submit the information below and it will be added to the database
        instantly!
      </p>
      <p className="text-gray-700 text-sm mb-6 text-center">
        Please ensure the validity of the data you provide and that it's not a
        duplicate entry.
      </p>

      <form
        onSubmit={handleSubmit}
        className="w-full bg-white shadow-md rounded-lg p-6"
      >
        <label className="block font-semibold mb-2">
          Product/Service Name *
        </label>
        <input
          type="text"
          name="Name"
          value={formData.Name}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded-md mb-4"
        />

        <label className="block font-semibold mb-2">Alternative to *</label>
        <input
          type="text"
          name="AlternativeTo"
          value={formData.AlternativeTo}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded-md mb-4"
        />

        <label className="block font-semibold mb-2">Category *</label>
        <input
          type="text"
          name="Category"
          value={formData.Category}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded-md mb-4"
        />

        <label className="block font-semibold mb-2">Website Link *</label>
        <input
          type="url"
          name="Website"
          value={formData.Website}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded-md mb-4"
        />

        <label className="block font-semibold mb-2">Country of Service *</label>
        <input
          type="text"
          name="Country"
          value={formData.Country}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded-md mb-4"
        />

        <label className="block font-semibold mb-2">HQ *</label>
        <input
          type="text"
          name="HQ"
          value={formData.HQ}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded-md mb-4"
        />

        <label className="block font-semibold mb-2">Image *</label>
        <input
          type="text"
          name="Image"
          value={formData.Image}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded-md mb-4"
        />

        <label className="block font-semibold mb-2">Summary *</label>
        <textarea
          name="Summary"
          value={formData.Summary}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded-md mb-4"
        />

        <label className="block font-semibold mb-2">Parent</label>
        <textarea
          name="Parent"
          value={formData.Parent}
          onChange={handleChange}
          className="w-full p-2 border rounded-md mb-4"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Submissions;
