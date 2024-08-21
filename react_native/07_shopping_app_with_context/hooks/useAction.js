import {useState,useEffect,useContext} from 'react';
import ActionContext from '../context/ActionContext';
import useAppState from './useAppState';
import * as actionConstants from '../types/actionConstants';

const useAction = () => {

	const {dispatch} = useContext(ActionContext);
	
	const [urlRequest,setUrlRequest] = useState({
		url:"",
		request:{},
		action:""
	})
	
	const {token} = useAppState();
	
	const baseUrl = "https://cautious-fishstick-y5hp.onrender.com/";
	
	//FETCH USEEFFECT
	
	useEffect(() => {
		
		const fetchData = async () => {
			if(urlRequest.action === "changemode") {
				dispatch({
					type:actionConstants.CHANGE_MODE,
					mode:urlRequest.request.mode,
					editable:urlRequest.request.editable
				})
				return;
			}
			dispatch({
				type:actionConstants.LOADING
			})
			let url = baseUrl+urlRequest.url;
			const respose = await fetch(url,urlRequest.request);
			dispatch({
				type:actionConstants.STOP_LOADING
			})
			if(!response) {
				dispatch({
					type:actionConstants.LOGOUT
				})
				return;
			}
			if(response.ok) {
				
			} else {
				
			}
		}
		
		fetchData();
		
	},[urlRequest]);
	
	//LOGIN API
	
	const register = (user) => {
		setUrlRequest({
			url:"/register",
			request:{
				method:"POST",
				headers:{
					"Content-type":"application/json"
				},
				body:JSON.stringify(user)
			},
			action:"register"
		})
	}
	
	const login = (user) => {
		setUrlRequest({
			url:"/login",
			request:{
				method:"POST",
				headers:{
					"Content-type":"application/json"
				},
				body:JSON.stringify(user)
			},
			action:"login"
		})
	}
	
	const logout = () => {
		setUrlRequest({
			url:"/logout",
			request:{
				method:"POST",
				headers:{
					"token":token
				}
			},
			action:"logout"
		})
	}
	
	//SHOPPING API
	
	const getList = () => {
		setUrlRequest({
			url:"/api/shopping",
			request:{
				method:"GET",
				headers:{
					"token":token
				}
			},
			action:"getlist"
		})
	}
	
	const addItem = (item) => {
		setUrlRequest({
			url:"/api/shopping",
			request:{
				method:"POST",
				headers:{
					"Content-type":"application/json",
					"token":token
				},
				body:JSON.stringify(item)
			},
			action:"additem"
		})
	}
	
	const remove = (id) => {
		setUrlRequest({
			url:"/api/shopping/"+id,
			request:{
				method:"DELETE",
				headers:{
					"token":token
				}
			},
			action:"removeitem"
		})
	}
	
	const edit = (item) => {
		setUrlRequest({
			url:"/api/shopping/"+item._id,
			request:{
				method:"PUT",
				headers:{
					"Content-type":"application/json",
					"token":token
				},
				body:JSON.stringify(item)
			},
			action:"edititem"
		})
	}
	
	const changeMode = (mode,editable) => {
		setUrlRequest({
			url:"",
			request:{
				mode:mode,
				editable:editable
			},
			action:"changemode"
		})
	}
	
	return {register,login,logout,getList,addItem,remove,edit,changeMode}
}

export default useAction;