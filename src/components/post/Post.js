import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { getPosts } from '../../redux/reducers/postSlice'
import { BsInstagram, BsFacebook, BsTwitter, BsYoutube } from 'react-icons/bs';
import { POST_PAGE } from '../utils/urls';

const Post = () => {

    const { id } = useParams()
    const id1 = id;
    const dispatch = useDispatch()
    const { posts, isLoading, error } = useSelector(state => state.postReducer)

    useEffect(() => {
        dispatch(getPosts())
    }, [])

    console.log(posts.length - id);

    return (
        <div className='w-screen min-h-calc'>
            <div className='flex justify-center gap-96 pt-12 '>
                <div>
                    <BsInstagram className='mb-24 cursor-pointer w-6 h-6 mt-12' />
                    <BsFacebook className='mb-24 cursor-pointer w-6 h-6' />
                    <BsTwitter className='mb-24 cursor-pointer w-6 h-6' />
                    <BsYoutube className='mb-24 cursor-pointer w-6 h-6' />
                </div>

                {
                    isLoading ? <p>Loading ...</p> : <div>
                        {
                            posts.map(({ id, title, description, date }) => {
                                return id == id1 && <div key={id} className='max-w-screen-md bg-white flex flex-col justify-start p-6 w-500'>
                                    <h1 className='text-center text-3xl font-bold hover:text-gray-700 pb-4 cursor-pointer uppercase'>{title}</h1>
                                    <p className="capitalize leading-8 ">{description}</p>
                                    <p className="font-bold mt-12">Вay of publication {date}</p>
                                </div>
                            })
                        }
                    </div>
                }
            </div>

            <div className='flex justify-around text-xl'>
                <Link className={id > 1 ? 'w-60 bg-yellow-400 h-12 text-center pt-3' : 'w-60 h-12 text-center pt-3 bg-gray-800 text-white cursor-default'}
                    to={id > 1 && `${POST_PAGE}/${+id-1}`} 
                >
                    Previvs
                </Link>

                <Link className={id < posts.length ? 'w-60 bg-yellow-400 h-12 text-center pt-3' : 'w-60 h-12 text-center pt-3 bg-gray-800 text-white cursor-default'}
                    to={id < posts.length && `${POST_PAGE}/${+id+1}`}
                >
                    Next
                </Link>
            </div>
        </div>

    )
}

export default Post