import React, { Component } from "react";
import { Popup } from "react-map-gl";
import * as cssModule from "../scss";

export default class PopUp extends Component {
  render() {
    const { popupInfo, setPopupInfo } = this.props;

    return (
      <>
        <Popup
          longitude={popupInfo.geometry.coordinates[0]}
          latitude={popupInfo.geometry.coordinates[1]}
          onClose={() => setPopupInfo(null)}
        >
          <div className={cssModule.Components.popUp}>
            <Card title="Nama" desc={popupInfo.properties.Nama} />
            <Card title="Status" desc={popupInfo.properties.Status} />
            <Card title="Angka" desc={popupInfo.properties.Angka} />
          </div>
        </Popup>
      </>
    );
  }
}

class Card extends Component {
  render() {
    const { title, desc } = this.props;
    return (
      <>
        <div>
          <h3>{title}</h3>
          <p>{desc}</p>
        </div>
      </>
    );
  }
}
