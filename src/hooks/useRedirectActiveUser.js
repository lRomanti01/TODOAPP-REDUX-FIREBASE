import {useNavigate} from 'react-router-dom'
import { useEffect } from 'react';

//This function helps to keep the user (if the user is signed in) in 'Home' 

export const useRedirectActiveUser = (user, path) => {
	const navigate = useNavigate();

  useEffect(() => {
    if(user) {
        navigate(path)
    }
  }, [user])
}