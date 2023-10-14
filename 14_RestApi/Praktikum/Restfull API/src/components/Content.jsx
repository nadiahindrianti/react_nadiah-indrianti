import React, { useState } from 'react'
import logo from '../assets/bootstrap.png'
import data from '../components/language.json'
import toast from 'react-hot-toast';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';
import {addProductAxios} from "../features/slice/productSlice";

export default function Content() {
    const [productData, setProductData] = useState([]);
    const [productName, setProductName] = useState("");
    const [productCategory, setProductCategory] = useState("");
    const [productImage, setProductImage] = useState("");
    const [productFreshness, setProductFreshness] = useState("");
    const [productDescription, setProductDescription] = useState("");
    const [productPrice, setProductPrice] = useState("");
    const [language, setLanguage] = useState("english")
    const [productNameError, setProductNameError] = useState(false);
    const [productCategoryError, setProductCategoryError] = useState(false);
    const [productImageError, setProductImageError] = useState(false);
    const [productDescriptionError, setProductDescriptionError] = useState(false);
    const [productPriceError, setProductPriceError] = useState(false);
    

    const handleLanguage = () => {
        if (language == "english"){
            setLanguage("indonesian")
        } else {
            setLanguage("english");
        }
    }

    const handleProductName = (e) => {
        const value = e.target.value;
        if(value.length <= 10){
            setProductName(value)
            setProductNameError(value === "");
        }
    }

    const handleProductCategory = (e) => {
        const value = e.target.value;
        setProductCategory(value);
        setProductProductError(value === "");
    }

    const handleProductImage = (e) => {
        const value = e.target.value;
        setProductImage(value);
        setProductImageError(value === "");
    }

    const handleProductFreshness = (e) => {
        const value = e.target.value;
        setProductFreshness(value);
        setProductFreshnessError(value === "");
    }

    const handleProductDescription = (e) => {
        const value = e.target.value;
        setProductDescription(value);
        setProductDescriptionError(value === "");
    }

    const handleProductPrice = (e) => {
        const value = e.target.value;
        setProductPrice(value);
        setProductPriceError(value === "");
    }

    const handleClick = (e) => {
        const randomNumber = Math.floor(Math.random() * 100);
        console.log({randomNumber});
        e.preventDefault();
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newProduct ={
            id : uuidv4(),
            productName,
            productCategory,
            productFreshness,
            productPrice,
        };

        if (productName === ""){
            setProductNameError(true)
        }
        if (productCategory === ""){
            setProductCategoryError(true)
        }
        if (productImage === ""){
            setProductImageError(true)
        }
        if (productDescription === ""){
            setProductDescriptionError(true)
        }
        if (productPrice === ""){
            setProductPriceError(true)
        }

        if (!productName && !productCategory && !productFreshness && !productPrice) {
            return;
        }

        dispatch(addProductAxios({ id: crypto.randomUUID(), name: prodName, category, image: filePath, freshness, description, price }));
    
        alert("Success Submit");
        setProdName("");
        setPrice("");
        setCategory("");
        setFilePath("");
        setFreshness("");
        setDescription("");
    };
    

    const handleEdit = (id) => {
        const editItem = tableData.find((data) => data.id === id);
        if (editItem) {
          setFormData(editItem);
          setEdit(true);
        }
      };

    const handleDelete = (i) =>{
        const confirmDelete = window.confirm("Apakah Anda Ingin Menghapus")
        if (confirmDelete) {
            const deleteData = [...productData]
            deleteData.splice(i,1)
            setProductData(deleteData);
            toast.success('Data Berhasil Dihapus')
        }
    };

  return (
    <>
    <div className="container my-5">
        <div className="">
            <div className="col-md-6 offset-md-3">
                <div className='text-center'>
                    <img src={logo} style={{width: "20%"}}/>
                    <h2 className='text-center'>{language === "english" ? data.title.en : data.title.id }</h2>
                    <p className='text-center'>{language === "english" ? data.description.en : data.description.id}</p>
                    <div className='text-center'>
                        <button onClick={handleLanguage} className="btn btn-info center-block alert alert-info mt-5 w-50"> {language === "english" ? "Bahasa Indonesian" : "Bahasa Inggris"}
                        </button>
                        <button type='generate' onClick={handleClick} className="btn btn-success center-block alert alert-success mt-5 w-50" >Generate Number
                        </button>
                    </div>
                </div>
                <form className="create-product" onSubmit={(e) => handleSubmit(e)}>
                <div className="form-group my-3">
                    <label htmlFor="productName">Product Name</label>
                    <input value={productName} onChange={handleProductName} type="text" className={productNameError ? "form-control border border-danger" : "form-control"} id="productName" 
                    /> {productNameError && <span className='error-message text-danger'>Product Name is Required</span>}
                </div>
                <div className="form-group my-3">
                    <label htmlFor="">Product Category</label>
                    <select value={productCategory} onChange={handleProductCategory} className={productCategoryError ? "form-control border border-danger" : "form-control"} id="productCategory">
                    <option>Choose...</option>
                    <option>Electronic devices</option>
                    <option>Fashion</option>
                    <option>Food</option>
                    </select>
                    {productCategoryError && <span className='error-message text-danger'>Product Category is Required</span>}
                </div>
                <div className="row mt-2">
                    <div className="col-6 position-relative">
                    <label className="form-label fw-semibold" htmlFor="customFile"> Image of product </label>
                    <input type="file" value={productImage} onChange={handleProductImage} className={productImageError ? "form-control border border-danger" : "form-control"} id="uploadFile"  />
                    {productImageError && <span className='error-message text-danger'>Product Category is Required</span>}
                    </div>
                </div>
                <div className="row my-3" id="prodFres">
                    <p>Product Freshness</p>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" defaultValue="Brand New" name="btnRadio" id="Radio1" onChange={handleProductFreshness}/>
                        <label className="form-check-label" htmlFor="Radio1"> Brand New</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" defaultValue="Second Hand" name="btnRadio" id="Radio2" onChange={handleProductFreshness}/>
                        <label className="form-check-label" htmlFor="Radio2">Second Hand</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" defaultValue="Refufbhised" name="btnRadio" id="Radio3" onChange={handleProductFreshness}/>
                        <label className="form-check-label" htmlFor="Radio3"> Refufbhised </label>
                    </div>
                </div>
                <div className="form-group my-3">
                    <label htmlFor="description">Additional Description</label>
                    <textarea value={productDescription} onChange={handleProductDescription} className={productDescriptionError ? "form-control border border-danger" : "form-control"} id="addDesc" rows={3} defaultValue={""}/> {productDescriptionError && <span className='error-message text-danger'>Product Category is Required</span>}
                </div>
                <div className="form-group my-3">
                    <label htmlFor="productPrice">Product Price</label>
                    <input type="number" value={productPrice} onChange={handleProductPrice} className={productPriceError ? "form-control border border-danger" : "form-control"} id="productPrice" />{productPriceError && <span className='error-message text-danger'>Product Category is Required</span>}
                </div>
                <button type="submit"className="btn btn-primary center-block alert alert-primary"style={{ width: 400, marginLeft: "12%", marginTop: 50 }}> Submit</button>
                </form>
            </div>
        </div>
        <div>
            <div className="col-xs-3">
                <input type="text" className="form-control" id="Search" placeholder="Search by Product Name" />
                </div>
                <div className="btn-group" style={{marginTop: "10px"}}>
                <button type="button" className="btn btn-primary"> Deletion </button>
                <button type="button" className="btn btn-outline-primary"> Search </button>
            </div>
        </div>
      </div>
    </>
  )
}