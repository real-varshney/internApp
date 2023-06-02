import React, { useEffect, useState } from "react";
import { AiFillStar, AiOutlineLink } from "react-icons/ai";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const Details = (props) => {
  const id = localStorage.getItem("Id");
  const [form, setForm] = useState({})
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPass] = useState("")

  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      <div className="parentbox">
        <div className="box">
          <div className="img">
            <img src={props.data[id]?.show?.image?.original} alt="" />
          </div>
          <div className="content2">
            <div style={{ paddingBottom: "40px" }}>
              <h2
                className="display-3 display-inline"
                style={{ fontWeight: 400 }}
              >
                <span>{props.data[id]?.show?.name}</span>
              </h2>
              <span
                className="icon"
                style={{ display: "inline", marginInline: "4px" }}
              >
                <a
                  href={props.data[0]?.show?.url}
                  className="nostyle"
                  target="__blank"
                >
                  <AiOutlineLink />
                </a>
              </span>
              <span style={{ fontWeight: 600, marginRight: "8px" }}>
                <i>{props.data[id]?.show?.language}</i>
              </span>
              <span>
                {props.data[id]?.show?.genres?.map((value) => {
                  return (
                    <span
                      class="badge text-bg-secondary px-2"
                      style={{ marginRight: "6px" }}
                    >
                      {value}
                    </span>
                  );
                })}
              </span>
              <span style={{ marginLeft: "8px", fontSize: "20px" }}>
                {props.data[id].show?.rating?.average || "Not rated"}
                <AiFillStar />
              </span>
            </div>
            <div className="synopsis">
              <p>
                {props.data[id]?.show?.summary.replace(/(<([^>]+)>)/gi, "")}
              </p>
            </div>
            <button
              className="btn btn-primary"
              onClick={() => setModalShow(true)}
            >
              Book Now
            </button>
          </div>
        </div>
        <Modal
          show={modalShow}
          onHide={() => setModalShow(false)}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Body>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div style={{ width: "-webkit-fill-available" }}>
                <h4
                  className="display-4 "
                  style={{ marginLeft: "30px", fontWeight: 450}}
                >
                  {props.data[id]?.show?.name}
                </h4>
                <span style={{ marginLeft: "30px" }}>
                  {props.data[id]?.show?.genres?.map((value) => {
                    return (
                      <span
                        class="badge text-bg-secondary px-2"
                        style={{ marginRight: "6px" }}
                      >
                        {value}
                      </span>
                    );
                  })}
                  <span style={{fontSize: '15px', marginInline: '4px'}}>
                    {props.data[id]?.show?.runtime} min
                  </span>
                </span>
                <div>
                  <div className="image">
                    <img src={props.data[id]?.show?.image?.original} alt="" />
                  </div>
                </div>
              </div>

              <form action="submit" className="form">
                <input
                  type="text"
                  name="FullName"
                  id="name"
                  className="inp_form"
                  placeholder="FullName"
                  value={name}
                  required
                  onChange={(e)=> {setName(e.target.value);}}
                />
                <input
                  type="Email"
                  name="Email"
                  id="name"
                  className="inp_form"
                  required
                  placeholder="Email"
                  onChange={(e)=> {setEmail(e.target.value);}}
                />
                <input
                  type="password"
                  name="FullName"
                  id="name"
                  className="inp_form"
                  required
                  placeholder="Password"
                  onChange={(e)=> {setPass(e.target.value);}}
                />
                
                <Link to="/">
                  <button className="btn btn-success" onClick={() => {
                    setTimeout(()=> {
                      sessionStorage.setItem('name', name);
                      sessionStorage.setItem('password', password);
                      sessionStorage.setItem('email', email);
                    }, 1000)
                  }}>
                    Watch
                  </button>
                </Link>
              </form>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button
              onClick={() => setModalShow(false)}
              className="btn btn-danger"
            >
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};

export default Details;
