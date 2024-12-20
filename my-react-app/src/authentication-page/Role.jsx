import { useNavigate } from "react-router-dom";
function Role(){
  const navigate = useNavigate();
  const goToSeller = (event) =>{
    event.preventDefault();
    navigate('/seller');
  }
  const goToCustomer = (event) =>{
    event.preventDefault();
    navigate('/customer');
  }
  return(
    <div className="flex flex-col gap-4 items-center justify-center ">
      <h1 className="text-3xl font-sans font-semibold">
        Tell us what you want?
      </h1>
      <div className="bg-white rounded-lg p-8 w-full max-w-md shadow-lg">
        <h2 className="text-center font-semiboldlis">You created this account for :</h2>
        <ul className="my-2">
          <li>
            Choose To Be a Seller(To list and sell your products)
          </li>
          <li>
            Choose To Be a Customer(To shop for products)
          </li>
        </ul>
        <div className="flex gap-3 w-full">
        <button
        onClick={goToSeller}
          type="submit"
          className="w-full bg-green-800 text-white py-2 rounded-md hover:bg-green-600 transition font-semibold" 
        >
          Seller
        </button>
        <button
        onClick={goToCustomer}
          type="submit"
          className="w-full bg-green-800 text-white py-2 rounded-md hover:bg-green-600 transition font-semibold"
        >
          Customer
        </button>
        </div>
      </div>
    </div>
  );
}
export default Role;