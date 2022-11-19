import React from "react";
import { useNavigate } from "react-router-dom";

export default function withNavigate(Component) {
  return (props) => <Component {...props} navigate={useNavigate()} />;
}
