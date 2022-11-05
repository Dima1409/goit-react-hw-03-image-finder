import React, { Component } from "react";
import { App } from "./App.styled";
import Search from "components/SearchBar";
import Gallery from "components/ImageGallery";
import GalleryItem from "components/ImageGalleryItem";
import BtnMore from "components/Button";
//import ModalC from "components/Modal";

class AppC extends Component {
  render() {
    return (
      <App>
      <Search/>
      <Gallery>
        <GalleryItem/>
        <BtnMore></BtnMore>
      </Gallery>
      {/* <ModalC></ModalC> */}
      </App>
    )
  }
}
export default AppC;
