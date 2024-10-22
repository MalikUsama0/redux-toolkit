
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { ordered, restocked } from './cakeSlice'
function CakeView() {
  const state = useAppSelector((state) => state.persistedState
    .cake);
  const dispatch = useAppDispatch();
  const handleOrderCake = () => {
    dispatch(ordered())
  }

  const handleRestockedCake = () => {
    dispatch(restocked(3))
  }
  return (
    <div>
      <p>Number of cakes - {state.numberOfCakes}</p>
      <button onClick={() => handleOrderCake()}>Order Cake</button>
      <button onClick={() => handleRestockedCake()}>Restock Cake</button>
    </div>
  )
}

export default CakeView