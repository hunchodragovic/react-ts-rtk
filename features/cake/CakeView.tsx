import { useDispatch, useSelector } from "react-redux";
import { ordered, restocked } from "../../features/cake/cakeSlice"; // Importing cakeActions from cakeSlice

const CakeView = () => {
  const dispatch = useDispatch();
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);

  return (
    <>
      <h1>Cake View</h1>
      <div>
        <h2>Number of cakes : {numOfCakes}</h2>
      </div>
      <button onClick={() => dispatch(ordered())}>Order Cake</button>
      <button onClick={() => dispatch(restocked(5))}>Restock Cake</button>
    </>
  );
};

export default CakeView;
