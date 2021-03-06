import axios from "axios"
import { createContext, useEffect, useState } from "react"
import ShowCourtTable from "../components/courtTable"
import ShowTime from "../components/time"
import Container from '@mui/material/Container';
import gql from 'graphql-tag'
import { print } from 'graphql'
import { API_URL } from "../variable";
import { useNavigate } from "react-router-dom";

export const court = createContext([])
const Fetch = gql`
query{
  courts{
    id,
    name,
    state{
      detail{
        stuInfo1,
        stuInfo2,
        stuInfo3,
        stuInfo4
      },
      status,
      index
    }
  }
}
`

const ShowBookpage = () => {
    const [courtData, setCourtData] = useState([])
    let navigate = useNavigate();
    useEffect(
        () => {
          if(localStorage.getItem("Token")){
            axios.post(API_URL, {query : print(Fetch)}).then((res)=>{setCourtData(res.data.data.courts)})
          }else{
            alert("Please Login First")
            navigate("/")
          }
        },
        [courtData],
    )

    if (courtData.length === 0) return <div></div>
    return (
        <Container style={{marginTop: 30}}>
          <ShowTime/>
          <court.Provider value={courtData}>
            <ShowCourtTable/>
          </court.Provider>
        </Container>
    )
}

export default ShowBookpage
