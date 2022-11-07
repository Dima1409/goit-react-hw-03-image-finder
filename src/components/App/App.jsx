import React, { Component} from "react";
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
      if(this.state.searchValue==='') {
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
    this.setState({ status: Status.PENDING })
    try {
      const {data} = await Api(params);
      if(searchValue.trim()==='') {
        return;
      }
      this.setState(prevState=>({
        results: [...prevState.results, ...data.hits],
        totalHits: data.totalHits,
        page: prevState.page+1,
        status: Status.RESOLVED 
      }))
      this.totalResults(data)
    }
    
    catch(error) {
        this.setState({error})
        this.setState(({
          status: Status.REJECTED
        }))
    }
  }

  totalResults=(value) => {
      if(value.totalHits!==0 && this.state.page===1) {
      toast.success(`We found ${value.totalHits} images for your request`)
      }
      if(value.totalHits===0) {
      toast.info(`No results for your search '${this.state.searchValue}', please try again`)
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
    const {results, status, totalHits, per_page, page} = this.state;
      return (
        <App>
      <Search onSubmitForm={this.handleFormSubmit}/>
      {status==='idle' && <TitleInfo>Try to enter a value...</TitleInfo>}
      <Gallery results={results}>
       {status==='resolved' && <GalleryItem/>}
      </Gallery>
      {status==='pending' && <Spinner>
  <ThreeDots
     height="200" 
     width="200"
     radius="9"
     color="#3f51b5" 
     ariaLabel="three-dots-loading"
     visible={true} 
      />
  </Spinner>}
      {totalHits!==0 && totalHits / per_page > page-1 && <BtnMore text='Load more' type='button' onClickBtn={this.handleBtnMore}></BtnMore>}
      <ToastContainer/>
      </App>
      )
//     if(status === 'pending') {
//  return <Spinner>
//   <ThreeDots
//      height="200" 
//      width="200"
//      radius="9"
//      color="#3f51b5" 
//      ariaLabel="three-dots-loading"
//      visible={true} 
//       />
//   </Spinner>
//     }
    //   return (
    //   <App>
    //   <Search onSubmitForm={this.handleFormSubmit}/>
    //   <Gallery results={results}>
    //    <GalleryItem/>
    //   </Gallery>
    //   {totalHits!==0 && totalHits / per_page > page-1 && <BtnMore text='Load more' type='button' onClickBtn={this.handleBtnMore}></BtnMore>}
    //   <ToastContainer/>
    //   </App>
    // )
  }
}
export default AppC;
