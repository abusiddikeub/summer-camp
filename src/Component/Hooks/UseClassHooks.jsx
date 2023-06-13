import { useEffect, useState } from "react";


const UseClassHooks = () => {
   const [classes, setClasses] = useState([]);

  const [loading,setLoading] = useState(true)

  useEffect(() => {
    // fetch("http://localhost:5000/menu")
    fetch("http://localhost:5000/instructor")
      .then((res) => res.json())
      .then(data =>{
               setClasses(data)})
               setLoading(false)
   
  }, []);
  return [classes,loading]
};

export default UseClassHooks;
