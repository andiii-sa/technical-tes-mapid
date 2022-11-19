import React, { Component } from "react";
import { Marker } from "react-map-gl";

export default class Layer extends Component {
  render() {
    const { data, setPopupInfo } = this.props;
    return (
      <>
        <Display
          title={data.key}
          data={data}
          onClick={(e) => {
            e.originalEvent.stopPropagation();
            setPopupInfo(data);
          }}
        />
      </>
    );
  }
}

class Display extends Component {
  render() {
    const { title, data, onClick } = this.props;
    return (
      <>
        <Marker
          key={title}
          longitude={data?.geometry?.coordinates[0]}
          latitude={data?.geometry?.coordinates[1]}
          anchor="bottom"
          onClick={onClick}
        >
          <Pin color={data?.properties?.Status} />
        </Marker>
      </>
    );
  }
}

class Pin extends Component {
  render() {
    const { size = 20, color } = this.props;
    const ICON =
      "M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z";

    const pinStyle = {
      cursor: "pointer",
      fill:
        color === "Merah"
          ? "#FF0000"
          : color === "Hijau"
          ? "#008000"
          : color === "Kuning"
          ? "#FFFF00"
          : "#1B659D",
      stroke: "none",
    };

    return (
      <>
        <svg height={size} viewBox="0 0 384 512" style={pinStyle}>
          <path d={ICON} />
        </svg>
      </>
    );
  }
}
