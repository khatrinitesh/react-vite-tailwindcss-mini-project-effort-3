import React,{useState,useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";

const ServiceDetail = () => {
    const [listdata,setListdata] = useState([]);
    const {id} = useParams();
    const baseurl = 'https://jsonplaceholder.typicode.com/users'
    const navigate = useNavigate();

    const btnBack =()=>{
        navigate(-1);
    }

    const fetchData = async () => {
        if(id){
            try {
            const response = await fetch(`${baseurl}/${id}`)
            const result = await response.json()
            console.log(result)
            setListdata(result)
            } catch (error) {
            console.error('Error',error)
            setLoading(false)
            }
        }
    }

      useEffect(() => {
        fetchData()
      },[])
    

  return (
    <div>
    <button onClick={btnBack} className="rounded p-[5px] bg-blue-600 text-white">Back</button>
      <h2 className="text-red-500 font-bold text-[30px]">{listdata.id} - {listdata.name}</h2>
      <p>{listdata.username}</p>
      <p>{listdata?.address?.street}</p>
      <p>{listdata?.address?.suite}</p>
      <p>{listdata?.address?.city}</p>
      <p>{listdata?.address?.geo.lat}</p>
      <p>{listdata?.address?.geo.lng}</p>
      <p>{listdata?.website}</p>
      <p>{listdata?.phone}</p>
      <p>{listdata?.company?.name}</p>
      <p>{listdata?.company?.catchPhrase}</p>
      <p>{listdata?.company?.bs}</p>
      {/* {listdata.address && (
        <>
         <p>{listdata.address.street}</p>
         <p>{listdata.address.suite}</p>
         <p>{listdata.address.city}</p>
         {listdata.address.geo && (
            <>
            <p>{listdata.address.geo.lat}</p>
            <p>{listdata.address.geo.lng}</p>
            </>
         )}
        </>
      )}
      <p>{listdata.phone}</p>
        <p>{listdata.website}</p>
        {listdata.company && (
                <>
                    <p>{listdata.company.name}</p>
                    <p>{listdata.company.catchPhrase}</p>
                    <p>{listdata.company.bs}</p>
                </>
            )} */}
    </div>
  )
}

export default ServiceDetail
