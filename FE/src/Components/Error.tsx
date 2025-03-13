import { useParams } from "react-router";

const Error = () => {
  const { url } = useParams();
  return (
    <div className="flex flex-col items-center justify-center p-6 max-w-2xl mx-auto text-center">
      Uh-oh - missing page!
      <p>Were you expecting {url} to be a product? </p>
    </div>
  );
};

export default Error;
