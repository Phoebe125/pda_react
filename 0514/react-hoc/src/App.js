import React, { useState } from "react";
import { UserIdDisplay, UserNameDisplay } from "./components/UserDisplay";
import withUser from "./components/WithUser";
import "bootstrap/dist/css/bootstrap.min.css";
import { ListGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const UserDisplay1 = withUser(UserIdDisplay);
const UserDisplay2 = withUser(UserNameDisplay);

function App() {
  // List Group.Item 을 클릭했을 때,
  // 해당하는 사람의 정보를 Modal에 rendering
  // modal-header:id, modal-body: 이름
  const [show, setShow] = useState(false);
  const [userId, setUserId] = useState();

  // const handleClose = () => setShow(false);
  const handleClose = () => {
    setShow(false);
  };
  const handleShow = (e) => {
    setShow(true);
    setUserId(e.target.id);  
  };

  return (
    <div>
      <ListGroup>
        <ListGroup.Item onClick={handleShow} action>
          <UserDisplay2 userId={1} />
        </ListGroup.Item>
        <ListGroup.Item onClick={handleShow} action>
          <UserDisplay2 userId={2} />
        </ListGroup.Item>
        <ListGroup.Item onClick={handleShow} action>
          <UserDisplay2 userId={3} />
        </ListGroup.Item>
        <ListGroup.Item onClick={handleShow} action>
          <UserDisplay2 userId={4} />
        </ListGroup.Item>


        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>
              <UserDisplay1 userId={userId} />
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <UserDisplay2 userId={userId} />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </ListGroup>

      {/* <ListGroup>
        {item.map(item=>{
          <ListGroup.Item action key={item.id} onClick={e=>{
            setModalInfo();
            handleShow()
          }}></ListGroup.Item>
        })}
      </ListGroup> */}
    </div>
  );
}

export default App;
