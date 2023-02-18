import { useSelector,useDispatch } from "react-redux"
import { logout } from "../loginReducer"
function DashBoardComponent(){
    const result=useSelector((state)=>state.userinfo.state)
    const dispatch=useDispatch()
    return(
        <div>
            {console.log(useSelector((state)=>{console.log(state.userinfo.state.email)}))}
            <h1>Welcome {result.username}!</h1>
            <p>{result.email}</p>
            <h2>Role:{result.role}</h2>
            <button onClick={(e)=>{
                e.preventDefault()
                dispatch(logout())
            }}>logout</button>
        </div>
    )
}
export default DashBoardComponent