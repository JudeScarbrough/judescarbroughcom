import React, { useState } from "react";
import "./Project.css";
import Modelnode from "./projects/modelnode";
import VPN from "./projects/vpn"
import Amidala from "./projects/amidala"
import HB from "./projects/hb"
import Lax from "./projects/lax"
import RCT from "./projects/rct"

function Project({ page, resetPage }) {
  const [isOpen, setIsOpen] = useState(false);

  const openPopup = () => {
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
  };


  if (page == "none"){
    return
  }


  
    return (
        <>

            <div className="popup-overlay">
            <div className="popup-content">
                <h2>{page}</h2>

                
                <ProjectPage page={page}></ProjectPage>



                <button onClick={resetPage} className="close-btn">
                Close
                </button>
            </div>
            </div>
        </>
    );



}

export default Project;




function ProjectPage({page}){
    

    if (page == "Model Node"){
        return <Modelnode></Modelnode>
    }

    if (page == "VPN Service"){
        return <VPN></VPN>
    }

    if (page == "Amidala One"){
        return <Amidala></Amidala>
    }

    if (page == "Racing Simulator Handbrake"){
      return <HB></HB>
    }
    if (page == "Reaction Time Metrics"){
      return <Lax></Lax>
    }

    if (page == "React Web Apps"){
      return <RCT></RCT>
    }
}
