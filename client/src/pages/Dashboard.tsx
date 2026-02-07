import axios from "axios";
import { BACKEND_URL } from "../config";
import { useEffect, useState } from "react";

export function Dashboard() {
  const [data, setData] = useState(null);


  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/v1/content`, {
        headers: {
          token: `${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        setData(res.data);
        console.log(res.data.content)
      });
  }, []);

  return (
    <div>
      {JSON.stringify(data)}
    </div>
  );
}
