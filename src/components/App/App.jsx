import React, { Component } from "react";
import { App, TitleInfo, Spinner} from "./App.styled";
import Api from "components/api/api-image";
import Search from "components/SearchBar";
import Gallery from "components/ImageGallery";
import GalleryItem from "components/ImageGalleryItem";
import BtnMore from "components/Button";
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import { ThreeDots } from  'react-loader-spinner'


const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};
const INITIAL_STATE = {
  results: [],
  totalHits: 0,
  searchValue: '',
  page: 1,
  per_page: 12,
  status: Status.IDLE,
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
        results: [...prevState.results, ...data.hits],
        totalHits: data.totalHits,
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
    this.setState({
      status: Status.PENDING
    })
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
    if(status === 'pending') {
 return <Spinner>
  <ThreeDots
     height="200" 
     width="200"
     radius="9"
     color="#3f51b5" 
     ariaLabel="three-dots-loading"
     visible={true}
      />
  </Spinner>
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
      </App>
    )}
  }
}
export default AppC;
