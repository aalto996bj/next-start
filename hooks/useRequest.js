import axios from "axios";
import { useEffect, useState } from "react";

const useRequest = (URL) => {
  // const [data,dispatch] = useReducer(dataReducer,[])
  const [loading, setLoading] = useState(true);
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
  return [data, loading];
};

export default useRequest;
