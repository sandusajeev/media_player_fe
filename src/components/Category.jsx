import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-toastify';
import { addCategory, deleteVideoCatergory, getAllCategories, getVideoDetailsById } from '../sevices/allApi';

function Category() {
  const [show, setShow] = useState(false);
  const [categories, setCategories] = useState([])
  const handleClose = () => {
    setShow(false)
    setCategoryName("")
  }
  const handleShow = () => setShow(true);

  const [categoryName, setCategoryName] = useState("")

  const handeleAddCategory = async () => {
    if (!categoryName) {
      toast.warning("Please fill the category name")
    }
    else {
      const body = {
        categoryName: categoryName,
        allVideos: []
      }
      const response = await addCategory(body)
      console.log("category response");
      console.log(response);
      if (response.status === 201) {
        toast.success(`${categoryName} successfully saved`)
      }
      handleClose()
    }
  }

  const getCategories = async () => {
    const response = await getAllCategories()
    console.log("Categories");
    console.log(response);
    const { data } = response;
    setCategories(data)

  }

  useEffect(() => {
    getCategories()
  }, [categoryName])

  const deleteCategory = async (id) => {
    const response = await deleteVideoCatergory(id);
    // console.log("respone");
    // console.log(response);
    if (response.status === 200) {
      toast.success(`${categoryName} successfully deleted`)
      getCategories()
    }
  }

  const dragOver = (e) => {
    e.preventDefault()
    console.log("Inside dragOver");

  }

  const videoDropped = async (e,id)=> {
    console.log(`dropped inside category with id ${id}`);
    const vId = e.dataTransfer.getData('videoId');
    console.log(`Video with id ${vId} is dropped in category with id ${id}`);
    const result = await getVideoDetailsById(vId)
    console.log(result);
    const {data} = result;
    let setlectedCategory = categories?.find(item => item.id == id);
    console.log("Selected category");
    console.log(setlectedCategory);
    setlectedCategory.allVideos.push(data);
    console.log("final category");
    console.log(setlectedCategory);
    
    
    
    
    
  }

  return (
    <>
      <div>
        <button className='btn btn-warning' onClick={handleShow}>ADD NEW CATEGORY</button>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        data-bs-theme='dark'
      >
        <Modal.Header closeButton>
          <Modal.Title className='textStyle'><i class="fa-solid fa-list text-warning me-3"></i>ADD CATEGORY</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className='textStyle fw-bolder'>PLEASE FILL THE FORM</p>
          <Form className='border border-secondary p-3 rounded'>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control type="text" placeholder="CATEGORY NAME"
                onChange={(e) => setCategoryName(e.target.value)} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            CANCEL
          </Button>
          <Button variant="primary" onClick={handeleAddCategory}>ADD</Button>
        </Modal.Footer>
      </Modal>

      {
        categories?.map((item) => (
          <div className='border border-secondary rounded p-3 mt-3' droppable
            onDragOver={(e) => dragOver(e)}
            onDrop={(e) => videoDropped(e,item.id)}>
            <div className='d-flex justify-content-between align-items-center'>
              <h6>{item.categoryName}</h6>
              <button className='btn btn-danger' onClick={(e) => deleteCategory(item.id)}><i class="fa-solid fa-trash"></i></button>
            </div>
          </div>
        ))
      }



    </>
  )
}

export default Category