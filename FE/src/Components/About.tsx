import friendImage from "../assets/friendlyImage.jpg";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center p-6 max-w-2xl mx-auto text-center">
      <h1 className="text-3xl font-bold text-blue-700 mb-4">About VARIAATIO</h1>
      <p className="text-gray-700 text-lg mb-4">
      VARIAATIO is a platform dedicated to educating people on where products,
        software, and companies originate from. We provide insights into their
        origins, ownership, and history, helping users make informed choices.
      </p>
      <img src={friendImage} className="h-[30%] w-[50%] mb-5"></img>
      <p className="text-gray-700 text-lg font-semibold mb-4">
        As a playful twist, VARIAATIO adopts the term "friendly countries" in
        the same ironic way Russia does— meaning that the list of "friendly"
        alternatives reflects a certain worldview, but with a touch of humor and
        perspective.
      </p>
      <p className="text-gray-700 text-lg">
        We also highlight alternative options from various countries, allowing
        users to discover alternatives based on their personal preferences,
        ethical considerations, or geopolitical concerns.
      </p>
    </div>
  );
};

export default About;
