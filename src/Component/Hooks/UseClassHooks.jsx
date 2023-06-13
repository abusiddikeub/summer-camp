import { useEffect, useState } from "react";


const UseClassHooks = () => {
   const [classes, setClasses] = useState([]);

  const [loading,setLoading] = useState(true)

  useEffect(() => {
    // fetch("https://assignment-12-abusiddikeub.vercel.app/menu")
    fetch("https://assignment-12-abusiddikeub.vercel.app/instructor")
      .then((res) => res.json())
      .then(data =>{
               setClasses(data)})
               setLoading(false)
   
  }, []);
  return [classes,loading]
};

export default UseClassHooks;
