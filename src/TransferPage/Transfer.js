import React from "react";
import { Modal, CloseButton } from "react-bootstrap";
import { useState, useEffect } from "react";
import tezos from "../Assets/Tezos.png";
import listBtn from "../Assets/listBtn.png";
import dropDownTriangle from "../Assets/dropDownTriangle.png";
import frenchBulldog2 from "../Assets/frenchBulldog2.png";
import dogami from "../Assets/dogami.png";
import Tezos from "../Assets/Tezos.png";
import Ethereum from "../Assets/Ethereum.png";
import Algorand from "../Assets/Algorand.png";
import Avalanche from "../Assets/Avalanche.png";
import BSC from "../Assets/BSC.png";
import Polygon from "../Assets/Polygon.png";
import Solana from "../Assets/Solana.png";
import Tron from "../Assets/Tron.png";
import Hashi from "../Assets/Hashi.png";
import info from "../Assets/info.png";
import "./Transfer.css";
import "./card.css";
import "./ListRow.css";
import comingSoon from "../Assets/comingSoon.png";

import { useNavigate } from "react-router-dom";

const data = [
  { id: 1, img: frenchBulldog2, heading: "Doggy Dog", amount: 233 },
  { id: 2, img: frenchBulldog2, heading: "Doggy Dog", amount: 263 },
  { id: 3, img: dogami, heading: "Dogami", amount: 283 },
  { id: 4, img: frenchBulldog2, heading: "Doggy Dog", amount: 233 },
  { id: 5, img: dogami, heading: "Dogami", amount: 293 },
  { id: 6, img: frenchBulldog2, heading: "Doggy Dog", amount: 233 }
];

function TransferPage() {
  let [show1, setShow1] = useState(false);
  let [show2, setShow2] = useState(false);
  let [checkedObjects, setCheckedObjects] = useState([]);

  let navigate = useNavigate();

  function check(e) {
    if (e.target.checked) {
      const newObject = data.filter((object) => e.target.id === `${object.id}`);
      setCheckedObjects(checkedObjects.concat(newObject));
    } else {
      setCheckedObjects(
        checkedObjects.filter((object) => e.target.id !== `${object.id}`)
      );
    }
  }

  function remove(e) {
    setCheckedObjects(
      checkedObjects.filter((object) => e.target.id !== `${object.id}`)
    );
    document.getElementById(`${e.target.id}`).checked = false;
  }

  function handleClose2() {
    setShow2(false);
  }
  function handleShow2() {
    setShow2(true);
  }
  const [list, setList] = useState(false);
  function handleClose1() {
    setShow1(false);
  }
  function handleShow1() {
    setShow1(true);
  }

  const modalContent = {
    list1: {
      heading: "Select Departure BlockChain",
      list: [
        { src: Tezos, value: "Tezos" },
        { src: Ethereum, value: "Ethereum" },
        { src: Algorand, value: "Algorand", text: "Coming soon" },
        { src: Avalanche, value: "Avalanche", text: "Coming soon" },
        { src: BSC, value: "BSC", text: "Coming soon" },
        { src: Polygon, value: "Polygon", text: "Coming soon" },
        { src: Solana, value: "Solana", text: "Coming soon" },
        { src: Tron, value: "Tron", text: "Coming soon" }
      ]
    }
  };

  function toggleList() {
    if (list) setList(false);
    else setList(true);
  }
  return (
    <div className="transferParent">
      <div style={{ maxWidth: "1269px", margin: "auto" }}>
        <div
          className="transferbox"
          style={{
            border: "1px solid",
            borderColor:
              "-moz-linear-gradient(85deg, rgba(59, 65, 85, 1) 8%, rgba(161, 77, 175, 1) 47%, rgba(76, 101, 150, 1) 74%, rgba(56, 27, 61, 1) 99%) -webkit-linear-gradient(85deg, rgba(59, 65, 85, 1) 8%, rgba(161, 77, 175, 1) 47%, rgba(76, 101, 150, 1) 74%, rgba(56, 27, 61, 1) 99%) -o-linear-gradient(85deg, rgba(59, 65, 85, 1) 8%, rgba(161, 77, 175, 1) 47%, rgba(76, 101, 150, 1) 74%, rgba(56, 27, 61, 1) 99%) progid:DXImageTransform.Microsoft.gradient( startColorstr='#381B3D', endColorstr='#3B4155', GradientType=0 ) -ms-linear-gradient(85deg, rgba(59, 65, 85, 1) 8%, rgba(161, 77, 175, 1) 47%, rgba(76, 101, 150, 1) 74%, rgba(56, 27, 61, 1) 99%) linear-gradient(85deg, rgba(59, 65, 85, 1) 8%, rgba(161, 77, 175, 1) 47%, rgba(76, 101, 150, 1) 74%, rgba(56, 27, 61, 1) 99%)"
          }}
        >
          <div
            className="separator"
            style={{
              borderTopLeftRadius: "36px"
            }}
          >
            <div
              style={{
                position: "sticky",
                top: "0px",
                zIndex: "50",
                backgroundColor: "#21242d"
              }}
              className="selectPanel"
            >
              <p>Select the Tezos NFT you want to wrap</p>
              <div className="selectPanelSection2">
                <input placeholder="Search" />
                <button
                  className="selectAllbtn"
                  style={{
                    border: "none",
                    backgroundColor: "transparent",
                    color: "rgba(112, 120, 200, 1)",

                    height: "40px"
                  }}
                >
                  Select all
                </button>
                <button
                  className="listBtn"
                  style={{
                    border: "none",
                    backgroundColor: "transparent",
                    height: "40px"
                  }}
                  onClick={toggleList}
                >
                  <img src={listBtn} alt="listButton" />
                </button>
              </div>
            </div>
            {list ? (
              <div>
                {data.map((object, index) => (
                  <div>
                    <div className="listRowBox">
                      <div className="bulldogWithtext">
                        <img src={object.img} alt="frenchBulldog" />
                        <div className="textWithImg">
                          <div className="text">
                            <p style={{ color: "white" }}>{object.heading}</p>
                            <p style={{ color: "white" }}>{object.amount}</p>
                          </div>
                          <button onClick={handleShow2} className="infoBtnList">
                            <img src={info} alt="infoImg" />
                          </button>
                        </div>
                      </div>
                      <input
                        type="checkbox"
                        className="checkBox"
                        id={object.id}
                        onClick={check}
                      />
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="gridViewer">
                <div className="grid-container">
                  {data.map((object, index) => (
                    <div className="grid-item">
                      <div className="card">
                        <img
                          src={object.img}
                          alt="frenchBulldog"
                          className="mainImg"
                        />
                        <div className="cardContainer">
                          <p className="heading">{object.heading}</p>
                          <p className="heading">{object.amount}</p>
                        </div>
                        <button
                          className="infoBtn"
                          style={{
                            position: "absolute",
                            top: "13rem"
                          }}
                          onClick={handleShow2}
                        >
                          <img src={info} alt="info" className="info" />
                        </button>
                        <input
                          type="checkbox"
                          className="checkBox"
                          id={object.id}
                          onClick={check}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          <div className="wrapBox">
            <p className="wrapBoxHeading">Wrap your NFT</p>
            <div className="selectedNFT">
              <p className="heading">Enter the destination address</p>
              <div
                style={{
                  backgroundColor: "rgba(37, 40, 49, 1)"
                }}
                className="inputBar"
              >
                <input placeholder="Wallet Address" />
                <div>
                  <img
                    src={Ethereum}
                    alt="tezos"
                    onClick={handleShow1}
                    style={{ cursor: "pointer" }}
                  />
                  <button
                    style={{
                      backgroundColor: "transparent"
                    }}
                  >
                    <img src={dropDownTriangle} alt="Triangle" />
                  </button>
                </div>
              </div>
              <div className="countDiv">
                <p className="heading">NFTs selected</p>
                <p>
                  {checkedObjects.length}/{data.length}
                </p>
              </div>

              <div className="allRows">
                {checkedObjects.map((object) => (
                  <div className="selectedNFTrow">
                    <div className="eachRow">
                      <img src={object.img} alt="frenchBulldog" />
                      <p>{object.heading}</p>
                    </div>
                    <button id={object.id} onClick={remove}>
                      X
                    </button>
                  </div>
                ))}
              </div>
            </div>
            <div className="fees">
              <p>Fees</p>
              <p>0.345 XTZ</p>
            </div>
            <button className="wrapButton">Wrap my NFT</button>
          </div>
        </div>
        <div className="TransferPowerSection">
          <p className="TransferPower">Powered by</p>
          <img src={Hashi} alt="hashi.png" />
        </div>
        <Modal
          show={show1}
          onHide={handleClose1}
          className="homepageModal"
          centered
        >
          <Modal.Header>
            <Modal.Title className="modalHeading">
              {modalContent.list1.heading}
            </Modal.Title>
            <CloseButton variant="white" onClick={handleClose1} />
          </Modal.Header>
          <Modal.Body>
            {modalContent.list1.list.map((object) => {
              return (
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div style={{ cursor: "pointer" }} className="modalRow">
                    <img src={object.src} alt="tezos" className="boxImages" />
                    <p>{object.value}</p>
                  </div>
                  <div
                    style={{
                      backgroundImage: `url(${comingSoon})`,
                      backgroundRepeat: "no-repeat",
                      backgroundPositionY: "17px"
                    }}
                  >
                    <p style={{ marginTop: "15px", fontSize: "15px" }}>
                      {" "}
                      {object.text}{" "}
                    </p>
                  </div>
                </div>
              );
            })}
          </Modal.Body>
        </Modal>
        <Modal
          show={show2}
          onHide={handleClose2}
          style={{ width: "100%" }}
          centered
        >
          <Modal.Header>
            <Modal.Title className="modalHeading">
              Select Departure BlockChain
            </Modal.Title>
            <CloseButton variant="white" onClick={handleClose2} />
          </Modal.Header>
          <Modal.Body>
            <div className="infoModalBody">
              <img
                src={frenchBulldog2}
                alt="InfoImg"
                className="modalInfoImg"
              />
              <div>
                <div className="infoRow">
                  <p style={{ color: "rgba(103, 109, 128, 1)" }}>Name</p>
                  <p>Doggy Dog</p>
                </div>
                <div className="infoRow">
                  <p style={{ color: "rgba(103, 109, 128, 1)" }}>Token ID</p>
                  <p>1</p>
                </div>
                <div className="infoRow">
                  <p style={{ color: "rgba(103, 109, 128, 1)" }}>Description</p>
                  <p>Hello world, this is a description.</p>
                </div>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
}

export default TransferPage;
