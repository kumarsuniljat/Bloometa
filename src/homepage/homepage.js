import React from "react";
import { Box, Container } from "@material-ui/core";
import { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import { CloseButton } from "react-bootstrap";
import "./homepage.css";
import Tezos from "../Assets/Tezos.png";
import Ethereum from "../Assets/Ethereum.png";
import Algorand from "../Assets/Algorand.png";
import Avalanche from "../Assets/Avalanche.png";
import BSC from "../Assets/BSC.png";
import Polygon from "../Assets/Polygon.png";
import Solana from "../Assets/Solana.png";
import Tron from "../Assets/Tron.png";
import togglePng from "../Assets/togglePng.png";
import Hashi from "../Assets/Hashi.png";
import DropDownTriangle from "../Assets/dropDownTriangle.png";
import Beacon from "../Assets/Beacon.png";
import Metamask from "../Assets/MetaMask.png";
import Temple from "../Assets/Temple.png";
import TrustWallet from "../Assets/TrustWallet.png";
import WalletConnect from "../Assets/WalletConnect.png";
import comingSoon from "../Assets/comingSoon.png";
import { useNavigate } from "react-router-dom";
import line from "../Assets/line.png";

const Homepage = () => {
  let navigate = useNavigate();
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
    },
    list2: {
      heading: "Select Destination BlockChain",
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
    },
    list3: {
      heading: "Select Wallet",
      list: [
        { src: Metamask, value: "Metamask" },
        { src: WalletConnect, value: "Wallet Connect" },
        { src: TrustWallet, value: "Trust Wallet" },
        { src: Temple, value: "Temple" },
        { src: Beacon, value: "Beacon" }
      ]
    }
  };
  let flag = true;

  let [show1, setShow1] = useState(false);
  let [show2, setShow2] = useState(false);
  let [show3, setShow3] = useState(false);

  function handleClose1() {
    setShow1(false);
  }
  function handleShow1() {
    setShow1(true);
  }

  function handleClose2() {
    setShow2(false);
  }
  function handleShow2() {
    setShow2(true);
  }

  function handleClose3() {
    setShow3(false);
  }
  function handleShow3() {
    setShow3(true);
  }

  function toggle() {
    if (flag) {
      document.querySelector(".homepageBox").style.flexDirection =
        "column-reverse";
      flag = false;
    } else {
      document.querySelector(".homepageBox").style.flexDirection = "column";
      flag = true;
    }

    document.querySelector(".tezos").classList.toggle("border-top-rounded");
    document.querySelector(".tezos").classList.toggle("border-bottom-rounded");

    document.querySelector(".ethereum").classList.toggle("border-top-rounded");
    document
      .querySelector(".ethereum")
      .classList.toggle("border-bottom-rounded");
  }

  return (
    <div className="homepage">
      <Container>
        <div className="homepageHeadingDiv">
          <p className="homepageHeading">#1 Cross-Chain Bridge for your NFTs</p>
        </div>
        <Box className="homepageBox">
          <div
            className="boxImagesDiv tezos border-top-rounded"
            onClick={handleShow1}
          >
            <img src={Tezos} alt="tezos" className="boxImages" />
            <p>Tezos</p>
            <button
              className="triangleDiv"
              onClick={handleShow1}
              style={{ border: "none", backgroundColor: "transparent" }}
            >
              <img
                src={DropDownTriangle}
                alt="DropDownImage"
                className="DropDownImage"
                style={{ height: "10px", width: "14px" }}
              />
            </button>
          </div>
          <img src={line} alt="line" className="line" />
          <div
            className="toggleBtn border-below"
            onClick={toggle}
            style={{ cursor: "pointer" }}
          >
            <img src={togglePng} alt="togglePng" />
          </div>
          <div
            className="boxImagesDiv border-top ethereum border-bottom-rounded"
            onClick={handleShow2}
          >
            <img src={Ethereum} alt="tezos" className="boxImages" />
            <p>Ethereum</p>
            <button
              className="triangleDiv"
              onClick={handleShow2}
              style={{ border: "none", backgroundColor: "transparent" }}
            >
              <img
                src={DropDownTriangle}
                alt="DropDownImage"
                className="DropDownImage"
                style={{ height: "10px", width: "14px" }}
              />
            </button>
          </div>
        </Box>

        <div className="TransferBtnDiv">
          <button
            type="button"
            className="btn btn-primary TransferBtn"
            onClick={handleShow3}
          >
            Transfer NFT
          </button>
        </div>

        <div className="powerDiv">
          <p className="poweredBy">Powered by</p>
          <img src={Hashi} alt="Hashi" />
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
          className="homepageModal"
          centered
        >
          <Modal.Header>
            <Modal.Title className="modalHeading">
              {modalContent.list2.heading}
            </Modal.Title>
            <CloseButton variant="white" onClick={handleClose2} />
          </Modal.Header>
          <Modal.Body>
            {modalContent.list2.list.map((object) => {
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
          show={show3}
          onHide={handleClose3}
          className="homepageModal"
          centered
        >
          <Modal.Header>
            <Modal.Title className="modalHeading">
              {modalContent.list3.heading}
            </Modal.Title>
            <CloseButton variant="white" onClick={handleClose3} />
          </Modal.Header>
          <Modal.Body>
            {modalContent.list3.list.map((object) => {
              return (
                <div
                  style={{ cursor: "pointer" }}
                  onClick={() => navigate("/transfer")}
                  className="ModalRowWallet"
                >
                  <img src={object.src} alt="tezos" className="boxImages" />
                  <p>{object.value}</p>
                </div>
              );
            })}
          </Modal.Body>
        </Modal>
      </Container>
    </div>
  );
};

export default Homepage;
