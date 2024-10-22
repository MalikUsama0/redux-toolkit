import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {useGetAllPostsQuery} from "../../app/apiSlice"


function ProductsView() {
 const {data} = useGetAllPostsQuery('')

  const state = useAppSelector((state) => state.persistedState
    .icecream)

  console.log(data,'here is product list data')
  return (
    <div>

    <h1> here is list of products</h1>
    </div>
  )
}

export default ProductsView     