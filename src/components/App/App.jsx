import React, { Component } from "react";
import { App, TitleInfo } from "./App.styled";
import Api from "components/api/api-image";
import Search from "components/SearchBar";
import Gallery from "components/ImageGallery";
import GalleryItem from "components/ImageGalleryItem";
import BtnMore from "components/Button";
import { ToastContainer } from 'react-toastify';
//import ModalC from "components/Modal";
const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};
const INITIAL_STATE = {
  results: [],
  searchValue: '',
  page: 1,
  per_page: 12,
  status: Status.IDLE
}



class AppC extends Component {
  state={...INITIAL_STATE}
  async componentDidMount() {
    try {
      if(this.setState.searchValue==='') {
        return;
      }
      const {data} = await Api();
      this.setState({data})
    }
    catch(error) {
      this.setState({error});
    }
  }
  
  componentDidUpdate(_, prevState) {
    if(prevState.searchValue !== this.state.searchValue) {
      this.setState({ status: Status.PENDING });
      this.getPhotos();
    }
  }
  
  async getPhotos() {
    const {searchValue, page, per_page} = this.state;
    const params = {searchValue, page, per_page};
    try {
      const {data} = await Api(params);
      this.setState(prevState=>({
        results: [...data.hits],
        page: prevState.page+1,
        status: Status.RESOLVED 
      }))
    }
    catch(error) {
        this.setState({error})
        this.setState(({
          status: Status.REJECTED
        }))
    }
  }

  handleFormSubmit = searchValue => {
    this.setState({...INITIAL_STATE})
    this.setState({ searchValue });
  };

  handleBtnMore = () => {
    this.getPhotos();
  }


  render() {
    const {results, status} = this.state;
    if(status === 'idle') {
      return (
        <App>
      <Search onSubmitForm={this.handleFormSubmit}/>
      <TitleInfo>Try to enter a value...</TitleInfo>
      </App>
      )
    }
    if(status === 'resolved') {
      return (
      <App>
      <Search onSubmitForm={this.handleFormSubmit}/>
      <Gallery results={results}>
       <GalleryItem/>
      </Gallery>
      <BtnMore text='Load more' type='button' onClickBtn={this.handleBtnMore}></BtnMore>
      <ToastContainer/>
      {/* <ModalC></ModalC> */}
      </App>
    )}
  }
}
export default AppC;
