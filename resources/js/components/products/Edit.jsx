import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Edit = () => {

    const navigate = useNavigate();

    const { id } = useParams();

    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [photo, setPhoto] = useState("")
    const [type, setType] = useState("")
    const [quantity, setQuantity] = useState("")
    const [price, setPrice] = useState("")
    const [avatar, setAvatar] = useState(true)

    useEffect(()=> {
        getProduct()
    },[])

    const getProduct = async () => {
        await axios.get(`/api/get-edit-product/${id}`)
            .then(({data}) => {
                console.log('data', data.product);
                const { name, description, photo, type, quantity, price } = data.product;
                setName(name);
                setDescription(description);
                setPhoto(photo);
                setType(type);
                setQuantity(quantity);
                setPrice(price);
            })
            .catch(({response:{data}})=>{

            })
    }

    const ourImage = (img) => {
        return "/upload/"+img
    }

    const changeHandler = (e) => {

        let file = e.target.files[0]
        let reader = new FileReader()
        let limit = 1024 * 1023 * 2
        if(file['size'] > limit){
            Swal.fire({
                type: 'error',
                title: 'Oops...',
                text: 'Something went wrong',
                footer: 'Why do I have issue ?'
            })
        }else{
            let reader = new FileReader()
            reader.onload = e => {
                setAvatar(false)
                setPhoto(e.targer.result)
            }
            reader.readAsDataURL(file)
        }
    }

    const updateProduct = async (e) => {
        e.preventDefault()

        const formData = new FormData()

        formData.append('name', name)
        formData.append('description', description)
        formData.append('photo', photo)
        formData.append('type', type)
        formData.append('quantity', quantity)
        formData.append('price', price)
        
        await axios.post(`/api/update_product/${id}`, formData)
            .then((data)=> {
                toast.fire({
                    icon:'success',
                    title: "Product updated succesfully"
                })
                navigate('/');
            })
            .catch((error)=>{

            })
    }

    return (
        <div className='container'>
            <div className="product_edit">
                <div className="titlebar">
                    <div className="titlebar_item">
                        <h1>Edit Products</h1>
                    </div>
                    <div className="titlebar_item">
                        <button className="btn" onClick={(event)=>updateProduct(event)} >
                            Save
                        </button>
                    </div>
                </div>

                <div className="card_wrapper">
                    <div className="wrapper_left">
                        <div className="card">
                            <p>Name</p>
                            <input type="text" value={name} onChange={(event)=>{setName(event.target.value)}} />

                            <p>Description</p>
                            <textarea cols="10" rows="5" value={description} onChange={(event)=>{setDescription(event.target.value)}} ></textarea>

                            <div className="media">
                                <ul className="images_list">
                                    <li className="image_item">
                                        <div className="image_item-imgWrapper">
                                            {
                                                avatar === true
                                                ?<img src={ourImage(photo)} alt="image" width="117px" height="100px" />
                                                :<img src={photo} alt="image" width="117px" height="100px" />
                                            }
                                            
                                        </div>
                                    </li>
                                    <li className='image_item'>
                                        <form action="" className="image_item_form">
                                            <label className="image_item-form--label">Add Image</label>
                                            <input type="file" className='image_item-form--input' />
                                        </form>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="wrapper_right">
                        <div className="card">
                            <p>Product Type</p>
                            <input type="text" value={type} onChange={(event) => {setType(event.target.value)}} />

                            <hr className="hr" />

                            <p>Inventory</p>
                            <input type="text" value={quantity} onChange={(event) => {setQuantity(event.target.value)}} />

                            <hr className="hr" />

                            <p>Price</p>
                            <input type="text" value={price} onChange={(event) => {setPrice(event.target.value)}} />

                            <br className="br" />
                        </div>
                    </div>
                </div>

                <div className="titlebar">
                    <div className="titlebar_item">

                    </div>
                    <div className="titlebar_item">
                        <button className="btn" onClick={(event)=>updateProduct(event)} >
                            Save
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Edit;
