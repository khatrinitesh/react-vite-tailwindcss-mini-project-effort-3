import React,{useState,useEffect} from "react";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";

const ServiceList = () => {

  const [listdata,setListdata] = useState([]);
  const [loading,setLoading] = useState(false);

  const baseurl = 'https://jsonplaceholder.typicode.com/users'

  const fetchData = async () => {
    try {
      const response = await fetch(baseurl)
      const result = await response.json()
      console.log(result)
      setListdata(result)
    } catch (error) {
      console.error('Error',error)
      setLoading(false)
    }
  }
  useEffect(() => {
    fetchData()
  },[])

  const btnDelete= (id) => {
    const newData = listdata.filter((val) => val.id !== id)
    setListdata(newData)
  }

  const listBullet = listdata.map((val)=> {
    const {id,name} = val
    return(
      <>
        <li key={id}>
          <Link to={`/servicelist/${id}`}>{name}</Link>
          <button onClick={() => btnDelete(id)} className="bg-white rounded p-[5px] m-[5px]">Delete</button>
        </li>
        </>
    )
  });

 
  useEffect(() => {
    if(loading){
      return(
        <div>loading..</div>
      )
    }
  }, [loading]);

  return  (
    <div className="content">
      <div className="container mx-auto">
      <Banner
        title="ServiceList"
        desc="Elit irure laborum commodo qui labore tempor deserunt. Qui amet laboris magna aute elit amet elit eu reprehenderit velit. Aliquip labore cupidatat sit cupidatat culpa eiusmod consectetur in.

Velit eu Lorem consequat non laboris sunt minim mollit dolore aliqua do. Id excepteur laborum ad adipisicing nostrud et velit Lorem labore deserunt non ut. Do est nisi ut nisi nulla duis excepteur. Nisi amet sit adipisicing reprehenderit nulla nisi ad eiusmod dolore tempor cupidatat aliquip quis."
      />
      <ul className="list-inside list-disc">
       {listBullet}
      </ul>
      </div>
    </div>
  )
};

export default ServiceList;
