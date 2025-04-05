import { useDispatch, useSelector } from "react-redux";
import { ordered, restocked } from "../../features/iceCream/iceCreamSlice"; // Importing ice cream actions from iceCreamSlice

const IceCreamView = () => {
  const dispatch = useDispatch();
  const numOfIceCreams = useSelector((state) => state.iceCream.numOfIceCreams); // Selecting numOfIceCreams from the state

  return (
    <>
      <h1>Ice Cream View</h1>
      <div>
        <h2>Number of Ice Creams: {numOfIceCreams}</h2>
      </div>
      <button onClick={() => dispatch(ordered())}>Order Ice Cream</button>
      <button onClick={() => dispatch(restocked(5))}>Restock Ice Cream</button>
    </>
  );
};

export default IceCreamView;
