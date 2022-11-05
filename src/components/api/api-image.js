import axios from 'axios';
import PropTypes from 'prop-types';

const API_KEY = '29999099-708b113120f887f079bd929c2';
const BASE_URL = 'https://pixabay.com/api/';

const Api = ({searchValue, page, per_page}) => {
    let params = new URLSearchParams({
            q: searchValue,
            key: API_KEY,
            page: page,
            per_page: per_page,
            image_type: 'photo',
            orientation: 'horizontal'
        }) 
    return axios.get(`${BASE_URL}?${params}`) 
}

export default Api;

Api.propTypes = {
    searchValue: PropTypes.string,
    page: PropTypes.number,
    per_page: PropTypes.number
}