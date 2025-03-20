const Resources = () => {
  const resources = [
    {
      name: "Go European",
      link: "https://www.goeuropean.org",
      description:
        "Go European is an advocacy platform that promotes the use and support of European-made products and services. It aims to showcase the quality and innovation of European industries and to encourage consumers to choose European goods.",
    },
    {
      name: "Made in Europe",
      link: "https://www.madeineurope.org",
      description:
        "Made in Europe is an initiative that highlights products that are manufactured in Europe. The website provides resources to help consumers make informed choices, emphasizing sustainable practices and quality standards of European-made products.",
    },
    {
      name: "European Union Products",
      link: "https://europa.eu/youreurope/business/market-regulation/product-requirements/eu-products_en",
      description:
        "The European Union's official portal on product regulations provides detailed information about products manufactured or sold within the EU. It focuses on high-quality European standards for products and services, ensuring consumer safety and promoting EU industries.",
    },
    {
      name: "Buy Canadian",
      link: "https://www.buycanadian.ca",
      description:
        "Buy Canadian is a website that advocates for the purchase and support of Canadian-made products and services. The platform promotes local industries, farmers, artisans, and businesses, emphasizing quality and sustainability in Canadian products.",
    },
    {
      name: "Canadian Manufacturers & Exporters (CME)",
      link: "https://cme-mec.ca",
      description:
        "CME is Canada's leading trade and industry association, focusing on the advancement of Canadian manufacturing. Their platform provides resources and support for Canadian manufacturers, promoting innovation, sustainability, and international trade for Canadian-made goods.",
    },
  ];

  return (
    <div className="flex flex-col items-center text-center">
      <h1 className="text-center text-[26px] text-blue-700">Resources</h1>
      <h2 className="text-gray-700 text-center text-[15px]  mb-5">
        Below are a wide range of resources you can use to help make better
        choices
      </h2>
      {resources.map((resource, index) => (
        <div
          key={index}
          className="hover:scale-105 transition-transform duration-100 font-bold bg-blue-200 w-100 h-auto p-6 mb-5 rounded-lg shadow-sm flex flex-col items-center text-center cursor-pointer"
        >
          <a href={resource.link}>
          <h3 className="text-[22px] hover:text-green-500 text-blue-700 cursor-pointer 
text-decoration-line: underline;">{resource.name}</h3>
          </a>
          <span className="text-[14px]">{resource.description}</span>
        </div>
      ))}
    </div>
  );
};
export default Resources;
