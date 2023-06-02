import React from "react";
import { BsFillPlayFill } from "react-icons/bs";
import { AiOutlineLink } from "react-icons/ai";
import { Link } from "react-router-dom";

const Show = (props) => {
  return (
    <>
    
    <div className="showh">
      <div className="image">
        <img src={props.data?.show?.image?.original} alt="" />
      </div>
      <div className="content">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
          >
          <h1 style={{ fontWeight: 600, margin: "16pxpx", marginLeft: "0px" }}>
            {props.data?.show?.name}
          </h1>

          <Link to="/details">
            <button
              className="btn btn-primary"
              onClick={() => {
                localStorage.setItem("Id", props.index);
              }}
            >
              Watch
              <BsFillPlayFill />
            </button>
          </Link>
        </div>
        <div className="cont_main">
          <div className="lang">
            <span style={{ fontWeight: 600 }}>
              <i>{props.data.show.language}</i>
            </span>
            <span>Rating: {props.data.show.rating.average || "Not rated"}</span>
            <span>Released : {props.data.show.premiered}</span>
            <span>
              {props.data.show.genres.map((value) => {
                return (
                  <span
                    class="badge text-bg-secondary px-2"
                    style={{ marginRight: "4px" }}
                    >
                    {value}
                  </span>
                );
              })}
            </span>
          </div>
          <div className="icon">
            <a href={props.data.show.url} className="nostyle" target="__blank">
              <AiOutlineLink />
            </a>
          </div>
        </div>
      </div>
    </div>
                </>
  );
};

export default Show;
