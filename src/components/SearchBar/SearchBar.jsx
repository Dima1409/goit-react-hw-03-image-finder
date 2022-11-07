import React, {Component} from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { SearchBar, SearchForm, SearchFormButton, SearchFormInput, SearchFormButtonLabel} from './Searchbar.styled';

class Search extends Component {
    state = {
        searchValue: ''
    }
    handleChange = event => {
        const searchValueNormalized = event.currentTarget.value.toLowerCase();
        this.setState({
            searchValue: searchValueNormalized
        })
    }
    handleSubmit = event => {
        event.preventDefault();
        const {searchValue} = this.state;
        if(searchValue.trim() === '') {
              return  toast.warn('Please enter a value', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "light",
                })
    }
        this.props.onSubmitForm(this.state.searchValue);
        this.setState({searchValue: ''});
    }
    render() {
        const {searchValue} = this.state;
        return (
            <SearchBar>
        <SearchForm onSubmit={this.handleSubmit}>
            <SearchFormButton type='submit'>
                <SearchFormButtonLabel/>
            </SearchFormButton>
            <SearchFormInput 
            type='text' 
            autoComplete='off' 
            autoFocus 
            placeholder='Search images and photos'
            value={searchValue}
            onChange={this.handleChange}></SearchFormInput>
        </SearchForm>
        <ToastContainer/>
    </SearchBar>
        )
    }
    
}

export default Search;

