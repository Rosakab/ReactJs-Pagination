

const Products = ({ fullName, imageUrl, title }) => {
  return (
    <div className="border rounded shadow-lg bg-gray-100 border-red-500 p-2">
      <img
        src={imageUrl}
        alt=""
        className="mx-auto w-32 h-32 my-4 object-fit  rounded shadow-lg"
      ></img>
      <p className=" m-2 font-bold text-sm">{fullName}</p>
      <p className="text-sm m-2 ">Title: {title}</p>
    </div>
  );
};

export default Products;
