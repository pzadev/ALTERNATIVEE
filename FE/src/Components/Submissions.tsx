import { useState } from "react";

const Submissions = () => {
  const [formData, setFormData] = useState({
    name: "",
    summary: "",
    alternativeTo: "",
    category: "",
    link: "",
    image: "",
    country: "",
    hq: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
    alert("Thank you for your submission! Our team will review it soon.");
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
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded-md mb-4"
        />

        <label className="block font-semibold mb-2">Alternative to *</label>
        <input
          type="text"
          name="alternativeTo"
          value={formData.alternativeTo}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded-md mb-4"
        />

        <label className="block font-semibold mb-2">Category *</label>
        <input
          type="text"
          name="category"
          value={formData.category}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded-md mb-4"
        />

        <label className="block font-semibold mb-2">Website Link *</label>
        <input
          type="url"
          name="link"
          value={formData.link}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded-md mb-4"
        />

        <label className="block font-semibold mb-2">Country of Service *</label>
        <input
          type="text"
          name="country"
          value={formData.country}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded-md mb-4"
        />

        <label className="block font-semibold mb-2">HQ</label>
        <input
          type="text"
          name="hq"
          value={formData.hq}
          onChange={handleChange}
          className="w-full p-2 border rounded-md mb-4"
        />

        <label className="block font-semibold mb-2">Image *</label>
        <input
          type="text"
          name="image"
          value={formData.image}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded-md mb-4"
        />

        <label className="block font-semibold mb-2">Summary *</label>
        <textarea
          name="summary"
          value={formData.summary}
          onChange={handleChange}
          required
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
