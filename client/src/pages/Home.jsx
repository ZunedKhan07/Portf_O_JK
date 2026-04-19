import { useEffect } from "react";
import { getProject } from "../services/projects.service";

function Home() {

  useEffect(() => {
    const fetchData = async () => {
      const data = await getProject();
      console.log(data);
    };

    fetchData();
  }, []);

  return <h1>Home</h1>;
}

export default Home;