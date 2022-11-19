import React, { Component } from "react";
import * as FaIcons from "react-icons/fa";
import * as cssModule from "../scss";
import withNavigate from "../utils/withNavigate";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clickSort: false,
      darkMode: false,
    };
    this.clickMode = this.clickMode.bind(this);
    this.showSort = this.showSort.bind(this);
    this.DarkMode = this.DarkMode.bind(this);
    this.LightMode = this.LightMode.bind(this);
  }

  clickMode() {
    this.setState((prev) => ({ ...prev, darkMode: !prev.darkMode }));
  }
  showSort() {
    this.setState((prev) => ({ ...prev, clickSort: !prev.clickSort }));
  }

  DarkMode() {
    this.clickMode();
    this.props.setStyleId("dark");
  }
  LightMode() {
    this.clickMode();
    this.props.setStyleId("light");
  }

  render() {
    const { navigate } = this.props;
    return (
      <>
        <div className={cssModule.Components.sortRow}>
          <div
            className={
              this.state.clickSort
                ? cssModule.Components.sortColor
                : cssModule.Components.sortColorHide
            }
          >
            <Button onclick={() => navigate("status-merah")} title="Merah" />
            <Button onclick={() => navigate("status-hijau")} title="Hijau" />
            <Button onclick={() => navigate("status-kuning")} title="Kuning" />
            <Button onclick={() => navigate("/")} title="Semua" />
          </div>
          <div className={cssModule.Components.sortButton}>
            {this.state.darkMode ? (
              <Button
                onclick={this.LightMode}
                classname={cssModule.Components.buttonLight}
                icon={<FaIcons.FaSun />}
              />
            ) : (
              <Button
                onclick={this.DarkMode}
                classname={cssModule.Components.buttonDark}
                icon={<FaIcons.FaMoon />}
              />
            )}
            <Button
              onclick={this.showSort}
              classname={cssModule.Components.buttonSort}
              title="Sortir"
              icon={<FaIcons.FaFilter />}
            />
          </div>
        </div>
      </>
    );
  }
}

class Button extends Component {
  render() {
    const { title, icon, onclick, classname } = this.props;
    return (
      <>
        <button className={classname} onClick={onclick}>
          {icon}
          <p>{title}</p>
        </button>
      </>
    );
  }
}

export default withNavigate(Menu);
