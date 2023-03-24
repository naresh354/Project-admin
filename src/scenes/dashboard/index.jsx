import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { mockTransactions } from "../../data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
import GeographyChart from "../../components/GeographyChart";
import BarChart from "../../components/BarChart";
import StatBox from "../../components/StatBox";
import ProgressCircle from "../../components/ProgressCircle";
import Img from "../../../src/man.png"
import { useContext } from "react";
import { SelectContext } from "../../Helper/selectContext";
import Image from "../../../src/download.jpeg"

const Dashboard = ({ data }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const { selectVal, setSelectVal } = useContext(SelectContext)

  console.log(selectVal, "data")

 



  return (
   <>
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
      </Box>
    </Box>
         <div className="container">
         
       { data.filter( e => e.name === selectVal).map((e, index) => (
      
      <div className="row align-items-center justify-content-center">
       
        <div className="col-4">
           <div>
             <img src={e?.profilepicture} className="image" alt="image"></img>
           </div>
           <div>
             <ul className="name">
               <li>User Name: <span>{e?.username}</span></li>
               <li>Email: <span>{e?.email}</span> </li>
               <li>Phone: <span>{e?.phone}</span></li>
               <li>Website: <span>{e?.website}</span></li>
             </ul>
           </div>
           <div>
             <p className="company">Company</p>
             <ul className="name">
               <li>Name: <span>{e?.company?.name}</span></li>
               <li>Catchpharse: <span>{e?.company?.catchPhrase}</span></li>
               <li>bs: <span>{e?.company?.bs} </span></li>
             </ul>
           </div>
          </div>
          <div className="col-8">
          <div>
             <p className="company">Address</p>
             <ul className="name">
               <li>Street:<span> {e?.address?.street}</span></li>
               <li>Suite: <span>{e?.address?.suite}</span></li>
               <li>City: <span>{e?.address?.city} </span></li>
               <li>ZipCode: <span>{e?.address?.zipcode}</span></li>
             </ul>
           </div>

           <div>
            <img className="map" src={Image}></img>
           </div>
         
        </div>
        </div>

       )) }
        
       </div>
   </>
  );
};

export default Dashboard;
