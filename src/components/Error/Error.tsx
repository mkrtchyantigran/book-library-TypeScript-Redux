import { ToastContainer, toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { clearError, selectErrorMessage } from '../../redux/slices/errorSlice';
import { useEffect } from 'react';



export default function Error() {
  const errorMessage = useSelector(selectErrorMessage);
  const dispatch = useDispatch()

  useEffect(() => {
    if (errorMessage) {
      toast.error(errorMessage)
      dispatch(clearError())
    }
  }, [errorMessage, dispatch])
  return <ToastContainer position='top-right' autoClose={2000} />
}