import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { ordered, restocked } from './icecreamSlice'


function IceCreamView() {
  const dispatch = useAppDispatch();

  const state = useAppSelector((state) => state.persistedState
    .icecream)

  const handleOrderCake = () => {
    dispatch(ordered())
  }

  const handleRestockedCake = () => {
    dispatch(restocked(3))
  }
  return (
    <div>

      <p>Number of IceCreams - {state.numberOfIcecreams}</p>
      <button onClick={() => handleOrderCake()}>Order IceCreams</button>
      <button onClick={() => handleRestockedCake()}>Restock IceCreams</button>
    </div>
  )
}

export default IceCreamView