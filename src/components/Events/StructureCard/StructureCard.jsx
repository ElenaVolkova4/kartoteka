import "./StructureCard.css";
import DownImg from "../../../images/arr_down.svg";
import UpImg from "../../../images/arr_up.svg";
import MapIcon from "../../../images/MapIcon.svg";
import EmpIcon from "../../../images/emp.svg";
import SignIcon from "../../../images/SignIcon.svg";

import { useState } from "react";

const StructureCard = (props) => {
  const [isActive, setIsActive] = useState(true);

  return (
    <div className="structure_card">
      <div className="accordion">
        <div className="accordion_item">
          <div
            className="accordion_item_title"
            onClick={() => setIsActive(!isActive)}
          >
            <div>
              <div className="accordion_item_title_name">{props.name}</div>
              <div className="accordion_item_title_status">{props.status}</div>
            </div>
            <div>
              {isActive ? (
                <img src={UpImg} alt="Down" />
              ) : (
                <img src={DownImg} alt="Down" />
              )}
            </div>
          </div>

          {isActive && (
            <div className="accordion_content">
              <div className="accordion_content_director">
                Директор: {props.director}
              </div>
              <div className="accordion_content_director_info">
                {props.director_info}
              </div>
              <div className="accordion_content_address">
                <img src={MapIcon} alt="map" />
                <div>{props.address}</div>
              </div>
              <div className="accordion_content_stuff">
                <img src={EmpIcon} alt="stuff" />
                <div>{props.employees}</div>
              </div>

              {props.old_name ? (
                <div className="accordion_content_old_names">
                  <div>Наименование организации до реорганизации</div>
                  <img src={SignIcon} alt="sign" />{" "}
                  <span>{props.old_name}</span>
                  <br />
                  <img src={SignIcon} alt="sign" />{" "}
                  <span>{props.old_name2}</span>
                </div>
              ) : undefined}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StructureCard;
