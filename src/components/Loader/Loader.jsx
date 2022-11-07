import { ThreeDots } from  'react-loader-spinner'
import { Spinner } from './Loader.styled';

const Loader = () => {
    return (
        <Spinner>
  <ThreeDots
     height="200" 
     width="200"
     radius="9"
     color="#3f51b5" 
     ariaLabel="three-dots-loading"
     visible={true} 
      />
  </Spinner>
    )
}

export default Loader;