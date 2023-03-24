import axios, { AxiosError } from 'axios';
import { useContext, useEffect, useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { SelectContext } from '../Helper/selectContext';
import { Link } from 'react-router-dom';
import { ColorModeContext } from '../theme';

function DisabledExample() {

    const [getData, setGetData] = useState([]);
    const {selectVal, setSelectVal, toggle, setToggle} = useContext(SelectContext)

    

    useEffect(() => {

        axios.get("https://panorbit.in/api/users.json").then(res => setGetData(res?.data?.users, "res"))

        

    }, [])

    console.log(toggle, "getData")

    const handleChange = (data) => {
        console.log(data, "data")
        setSelectVal(data)
        setToggle(true)
    }

    console.log(selectVal, "data")




  return (
   
     <div className='container align-items-center justify-content-center h-100 d-flex'>
     <div className='container w-50'>
     <p style={{ textAlign: "center", fontSize: "2rem", fontWeight: "800" }}>Select an account</p>
     <ListGroup className='data-list'>
     { getData?.map((e, index) => (
       
      <>

      

<ListGroup.Item className='list' >
  <img src={e?.profilepicture} className="img" alt="image" ></img>
  <Link onClick={() => handleChange(e?.name)} style={{ fontSize: "1rem", fontWeight: "800", margin: "0 100px", textDecoration: "none" }}>{e?.name}</Link>
  </ListGroup.Item>
      </>
     
     )) }
      </ListGroup>

     </div>
    </div>

  
  );
}

export default DisabledExample;