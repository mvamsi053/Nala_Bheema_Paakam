import React, { useRef } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import emailjs from "@emailjs/browser";
import "../styles/contactus.css";

function Contcatus(props) {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_n8kc0dl",
        "template_4b8tcs5",
        form.current,
        "1hUntq7cmCfGjjj22"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    props.onHide();
  };
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className="top-section">
        <h5 className="contatcus-title"> Contact Us</h5>
        <img
          className="contactus-logo"
          src="/icons/NBP_logo_preview_rev_1.png"
          alt="Nbp Logo"
        />
      </Modal.Header>
      <Modal.Body>
        <Form ref={form} onSubmit={sendEmail}>
          <Form.Group className="mb-3">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              type="text"
              id="user_name"
              name="user_name"
              placeholder="Full Name"
              className="txtarea_field"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="email"
              id="email"
              name="email"
              className="txtarea_field"
              placeholder="Enter email"
              required
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Subject</Form.Label>
            <Form.Control
              type="text"
              id="subject"
              name="subject"
              className="txtarea_field"
              placeholder="Subject"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              id="message"
              name="message"
              className="txtarea_field"
              rows={3}
              required
            />
          </Form.Group>
          <Button className="send" type="submit">
            Send
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Contcatus;
