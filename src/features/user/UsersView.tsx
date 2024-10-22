import {useEffect} from 'react'
import  {fetchUsers, fetchUserById} from './userSlice'
import { useAppDispatch, useAppSelector } from '../../app/hooks';
function UsersView() {

  const dispatch = useAppDispatch();
  const state = useAppSelector((state)=>state.persistedState
  .user)
  useEffect(()=>{
   dispatch(fetchUsers())
   dispatch(fetchUserById('1'))
  },[])


  return (
    <div>
        <h2>List of Users</h2>
        {state.loading && <p>Loading ...</p>}
        {state.error && <p>{state.error}</p>}
        {
          state.user.length > 0  && state.user.map((ele,i)=>{
          return  <div key={i}> <button  onClick={()=>dispatch(fetchUserById(ele.id))}>{ele.name}</button> </div>
          })
        }

        <h2>Single User Detail</h2>
        {state?.singleUser?.loading && <p>Loading ...</p>}
        {state?.singleUser?.error && <p>{state?.singleUser?.error}</p>}
        <p>Name - {state?.singleUser?.data?.name}</p>
        <p>Email - {state?.singleUser?.data?.email}</p>
        <p>Phone - {state?.singleUser?.data?.phone}</p>
        <p>Company - {state?.singleUser?.data?.company?.name}</p>
        <p>Address - {state?.singleUser?.data?.address?.name}</p>

    </div>
  )
}

export default UsersView