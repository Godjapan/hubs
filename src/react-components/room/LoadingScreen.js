import React from "react";
import PropTypes from "prop-types";
import { LoadingScreenLayout } from "../layout/LoadingScreenLayout";
import { Spinner } from "../misc/Spinner";
import { useRandomMessageTransition } from "./useRandomMessageTransition";
import MetawithHowToControlImg from "../../assets/images/metawith_howto_control.png";
export function LoadingScreen({ message, infoMessages }) {
  const infoMessage = useRandomMessageTransition(infoMessages);
  return (
    <LoadingScreenLayout
      center={
        <>
          <div className="metawith-loading-message-wrap">
            <div className="metawith-spinner-wrap">
              <Spinner />
            </div>
            <p>{message}</p>
          </div>
          <img src={MetawithHowToControlImg} className="metawith-howto-control" alt={"how to control"} />
        </>
      }
      bottom={
        <>
          <div className="metawith-loading-tips-wrap">
            <h3>{infoMessage.heading}</h3>
            <p>{infoMessage.message}</p>
          </div>
        </>
      }
    />
  );
}

LoadingScreen.propTypes = {
  message: PropTypes.node,
  infoMessages: PropTypes.arrayOf(
    PropTypes.shape({
      heading: PropTypes.node.isRequired,
      message: PropTypes.node.isRequired
    })
  )
};

LoadingScreen.defaultProps = {
  infoMessages: []
};
