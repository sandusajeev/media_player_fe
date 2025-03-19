import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { addToHistory, deleteVideo } from '../sevices/allApi';
import { ToastContainer, toast } from 'react-toastify';


function VideoCard({ displayVideo, setDeleteVideoStatus }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = async () => {
    setShow(true);
    const { caption, embededLink } = displayVideo;
    const today = new Date();
    // console.log(today);
    const year = today.getFullYear();
    const month = today.getMonth();
    const day = today.getDay();

    // console.log(year, month, day);

    const hour = today.getHours();
    const minutes = String(today.getMinutes()).padStart(2, '0');
    const timeValue = day + '-' + month + 1 + '-' + year + " " + hour + ":" + minutes
    // console.log(`${day}-${month}-${year}  ${hour}:${minutes}`);


    // console.log(timeValue);

    const history = {
      caption: caption,
      embededLink: embededLink,
      timeValue: timeValue
    }

    await addToHistory(history)

  }
  console.log("Each video item");
  console.log(displayVideo);


  const removeVideo = async (id) => {
    const response = await deleteVideo(id)
    console.log("delete response");
    console.log(response);
    if (response.status === 200) {
      setDeleteVideoStatus(response)
      toast.error(`${displayVideo.caption} successfully deleted !!`)
    }
  }

  const dragStarted = (e, id) => {
    console.log(`video with ${id} started dragging`);
    e.dataTransfer.setData("videoId",id)

  }
  return (
    <>
      <Card style={{ width: '16rem' }} draggable onDragStart={(e) => dragStarted(e,displayVideo.id)}>
        <Card.Img variant="top" height={'200px'} src={displayVideo.thumbnailUrl}
          onClick={handleShow}
        />
        <Card.Body>
          <div className='d-flex justify-content-between'>
            <Card.Title>{displayVideo.caption.slice(0, 12)}</Card.Title>
            <Button variant="danger" onClick={() => removeVideo(displayVideo.id)}><i class="fa-solid fa-trash"></i></Button>
          </div>
        </Card.Body>
      </Card>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{displayVideo.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe width="100%" height="400px" src={displayVideo.embededLink}></iframe>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
          {/* <Button variant="primary">Understood</Button> */}
        </Modal.Footer>
      </Modal>
      {/* <ToastContainer 
       position="top-center"
       autoClose={3000}
       pauseOnHover
       theme="colored"
       /> */}
    </>
  )
}

export default VideoCard