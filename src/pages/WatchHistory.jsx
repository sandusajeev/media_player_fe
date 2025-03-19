import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import { getHistory,deleteWatchHistory } from '../sevices/allApi';


function WatchHistory() {
  const [allHistory,setAllHistory]= useState([])
const getAllHistory = async () => {
  const resp = await getHistory()
  console.log("History");
  console.log(resp);
  const {data} = resp;
  setAllHistory(data)
  
}

useEffect(()=>{
  getAllHistory()
},[])

const deleteHistory =async (id) => {
  await deleteWatchHistory(id);
  getAllHistory()
}

  return (
    <>
    <div className='container mt-5 d-flex justify-content-between'>
    <h3 className='textStyle'>WATCH HISTORY</h3>
    <Link to={'/home'} style={{textDecoration:'none', color:'white'}}><i class="fa-solid fa-arrow-left fa-shake me-3"></i>BACK TO HOME</Link>
    </div>
    <table className='textStyle table mt-5 mb-5 container' data-bs-theme='dark'>
      <thead>
        <tr>
          <th>#</th>
          <th>CAPTION</th>
          <th>URL</th>
          <th>TIME</th>
          <th>ACTION</th>
        </tr>
      </thead>
      <tbody>
        {
          allHistory.length>0?
          allHistory.map((item)=>(
            <tr>
            <td>{item.id}</td>
            <td>{item.caption}</td>
            <td>{item.embededLink}</td>
            <td>{item.timeValue}</td>
            <td><Button variant="danger" onClick={() => deleteHistory(item.id)}><i class="fa-solid fa-trash"></i></Button></td>
          </tr>
          )):
          <p className='m-5 text-danger'>NO HISTROY FOUND</p>
        }
        {/* <tr>
          <td>1</td>
          <td>Leo</td>
          <td>www.youtube.com/leo/bloodysweet</td>
          <td>2025-03-05 12:45</td>
          <td><Button variant="danger"><i class="fa-solid fa-trash"></i></Button></td>
        </tr> */}
      </tbody>
    </table>

    </>
  )
}

export default WatchHistory