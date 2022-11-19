import "mapbox-gl/dist/mapbox-gl.css";
import { Component, Fragment } from "react";
import Map from "react-map-gl";
import { connect } from "react-redux";
import { Route, Routes } from "react-router-dom";
import * as Components from "./components";
import * as Configs from "./configs";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      popupInfo: null,
      styleId: "light",
    };
    this.handlePopupInfo = this.handlePopupInfo.bind(this);
    this.handleStyleId = this.handleStyleId.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    this.props.configAPI(Configs.GetApi());
  }

  handlePopupInfo(value) {
    this.setState((prev) => ({ ...prev, popupInfo: value }));
  }

  handleStyleId(value) {
    this.setState((prev) => ({ ...prev, styleId: value }));
  }

  render() {
    const { Datas, token, isLoading } = this.props;
    const styles = {
      light: "mapbox://styles/mapbox/outdoors-v9",
      dark: "mapbox://styles/vinoarystio/cl6ttky7b000y14my3f7khdlk",
    };

    return (
      <>
        {isLoading ? (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              minHeight: "100vh",
            }}
          >
            <h1>Loading . . .</h1>
          </div>
        ) : (
          <Map
            style={{ width: "100%", height: "100vh" }}
            mapStyle={styles[this.state.styleId]}
            initialViewState={{
              longitude: 107.608238,
              latitude: -6.914864,
              zoom: 12,
            }}
            mapboxAccessToken={token}
          >
            <Routes>
              <Route
                path="/"
                element={
                  <FilterColor
                    Datas={Datas}
                    setPopupInfo={this.handlePopupInfo}
                  />
                }
              />
              <Route
                path="status-merah"
                element={
                  <FilterColor
                    Datas={Datas}
                    color="Merah"
                    setPopupInfo={this.handlePopupInfo}
                  />
                }
              />
              <Route
                path="status-hijau"
                element={
                  <FilterColor
                    Datas={Datas}
                    color="Hijau"
                    setPopupInfo={this.handlePopupInfo}
                  />
                }
              />
              <Route
                path="status-kuning"
                element={
                  <FilterColor
                    Datas={Datas}
                    color="Kuning"
                    setPopupInfo={this.handlePopupInfo}
                  />
                }
              />
            </Routes>

            {this.state.popupInfo && (
              <Components.PopUp
                popupInfo={this.state.popupInfo}
                setPopupInfo={this.handlePopupInfo}
              />
            )}
            <Components.Menu setStyleId={this.handleStyleId} />
          </Map>
        )}
      </>
    );
  }
}

class FilterColor extends Component {
  render() {
    const { Datas, color, setPopupInfo } = this.props;

    return (
      <>
        {Datas?.map((data, index) => (
          <Fragment key={index}>
            {color ? (
              <>
                {data.properties.Status === color ? (
                  <Components.Layer
                    setPopupInfo={setPopupInfo}
                    data={data}
                    key={index}
                  />
                ) : null}
              </>
            ) : (
              <>
                {Datas?.map((data, index) => (
                  <Components.Layer
                    setPopupInfo={setPopupInfo}
                    data={data}
                    key={index}
                  />
                ))}
              </>
            )}
          </Fragment>
        ))}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  Datas: state.dataApi.Datas,
  isLoading: state.dataApi.loading,
  token: state.token.value,
});

function mapDispatchToProps(dispatch) {
  return {
    configAPI: (value) => {
      dispatch(value);
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
