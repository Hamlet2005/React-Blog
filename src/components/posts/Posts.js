import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addPosts, getPosts } from "../../redux/reducers/postSlice";
import Modal from "../modal/Modal";
import { POST_PAGE } from "../utils/urls";

const Posts = () => {

    const dispatch = useDispatch()
    const {posts, isLoading, error} = useSelector(state => state.postReducer)
    const [modalActive, setModalActive] = useState(false)
    const [value, setValue] = useState('')
    const [value1, setValue1] = useState('')
    const [date, setDate] = useState('')
    
    useEffect(() => {
        dispatch(getPosts())
    }, [])

    const [post, setPost] = useState('')

    const add = () => {
        if(value.trim() && value1.trim() && date.trim()){
            dispatch(addPosts({title: value, description: value1, date: date})).then(_ => dispatch(getPosts()))
            setModalActive(false)
            setValue('')
            setValue1('')
            setDate('')
            setPost('')
        }
      
    }

    return (
        <div>
            {
                isLoading 
                    ? <div>Loading...</div>
                    : <div className="w-full md:w-2/3 flex flex-col items-center px-3">
                        {
                            posts.map(({id, title, description, date}) => {
                                return <div key={id} 
                                className='flex flex-col shadow my-4 w-500 mt-8'>
                                    <div className="bg-white flex flex-col justify-start p-6">
                                        <h1 className="text-3xl font-bold hover:text-gray-700 pb-4 cursor-pointer uppercase">{title}</h1>
                                        <p className="text-sm pb-3">Published on {date}</p>
                                        <p className="pb-6">{description}</p>
                                        <Link to={`${POST_PAGE}/${id}`}
                                            className='uppercase text-gray-800 hover:text-black'
                                        >
                                            Go To Post Page
                                        </Link>
                                        </div>
                                    
                                </div>
                            })
                        }
                    </div>
            }
            <button className="m-5 border-solid border-2 border-slate-800 h-12 w-24 text-3xl bg-white"
                onClick={() => setModalActive(true)}
            >
                +
            </button>

            <Modal active={modalActive} setActive={setModalActive}>
                <div className="flex justify-around mt-5">
                    <h1 className="font-bold">
                        Add The Post
                    </h1>
                    <button
                        className="text-xl"
                        onClick={() => setModalActive(false)}
                    >
                        &#10006;
                    </button>
                </div>
            
                <div className="flex justify-center flex-wrap gap-10">
                    <input 
                        className="pl-4 block mt-8 border-2 border-gray-600 border-solid rounded-xl w-64" 
                        type="text" 
                        placeholder="please enter the name"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                    />
                    <textarea 
                        cols="30" rows="7"
                        className="pl-4 block border-2 border-gray-600 border-solid rounded-xl w-64" 
                        type="text" 
                        placeholder="please enter the description"
                        value={value1}
                        onChange={(e) => setValue1(e.target.value)}
                    />
                    <input 
                        className="pl-4 block border-2 border-gray-600 border-solid rounded-xl w-64" 
                        type="date" 
                        placeholder="please enter date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                    />
                </div>
                <button
                    className="mt-8 ml-48 border-gray-600 border-solid rounded-xl bg-blue-700 w-28 h-12"
                    onClick={add}
                >
                    Add
                </button>
            </Modal>
        </div>
    )
}

export default Posts