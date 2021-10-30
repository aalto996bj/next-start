import axios from "axios";
import { useEffect, useState } from "react";

export default (URL) => {
  // const [data,dispatch] = useReducer(dataReducer,[])
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    setLoading(true);
    async function init() {
      await axios.get(URL).then((res) => {
        setData(res.data);
      });
      setLoading(false);
    }

    init();
  }, []);
  return {data, loading};
};
