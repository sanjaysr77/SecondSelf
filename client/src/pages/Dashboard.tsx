import axios from "axios";
import { BACKEND_URL } from "../config";

export async function Dashboard () {
    await axios.get(`${BACKEND_URL}/v1/content`, {
        headers: {
            "Authorization": localStorage.getItem("token")
        }
    }).then((res) =>{
        console.log(res)
    })

    return (
        <div>
            {/* {res} */}
        </div>
    )
}