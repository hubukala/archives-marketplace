import { useEffect, useState } from "react";
import { db, storage } from '../firebaseConfig';
import { collection, doc, setDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { auth } from "../firebaseConfig";
import { uuidv4 } from "@firebase/util";
import { useFormik } from "formik";
import * as Yup from 'yup';
import SuccessPopup from "./SuccessPopup";
import { ButtonSecondary } from "../styles/shared/buttons/ButtonSecondary";
import { FileUploadPrimary, FileUploadInput, FilesPreviewContainer, FilesPreviewElement } from "../styles/FileUpload";
import { InputMain, InputSelect, InputTextArea } from "../styles/post-item-form/PostItemFormStyles";
import { InputError } from "../styles/post-item-form/InputError";
import { FormContainer } from "../styles/post-item-form/FormContainer";
import { ButtonPrimary } from "../styles/shared/buttons/ButtonPrimary";

const SellForm = () => {
  const productsRef = collection(db, 'products');
  const uniqueId = uuidv4()
  const [successMessage, setSuccessMessage] = useState(false)

  const [filesPreview, setFilesPreview] = useState([]);
  const [imageUpload, setImageUpload] = useState([]);
  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
    if (imageUpload.length !== 0 && imageUrls.length === imageUpload.length) {
      setDoc(doc(productsRef, uniqueId), {
        user_id: auth.currentUser.uid,
        product_id: uniqueId,
        available: true,
        title: formik.values.itemTitle.toLocaleUpperCase(),
        description: formik.values.description,
        size: formik.values.size,
        color: formik.values.color,
        designer: formik.values.designer,
        category: formik.values.category, 
        condition: formik.values.condition, 
        price: formik.values.price,
        images: imageUrls
      })
      setSuccessMessage(true)
    } else {
      console.log("imageurls empty")
    }
  }, [imageUrls])

  const uploadFile = () => {
    imageUpload.map((el) => {
      const imageRef = ref(storage, `products/${el.name + uniqueId}`);
      uploadBytes(imageRef, el).then((snapshot) => {
        getDownloadURL(snapshot.ref).then((url) => {
          setImageUrls((prev) => [...prev, url]);
        })
      })
    })
  };

  const formik = useFormik({
    initialValues: {
      category: '',
      designer: '',
      size: '',
      itemTitle: '',
      color: '',
      condition: '',
      description: '',
      price: '',
      shippingCarrier: '',
      shippingPrice: '',
    },
    validationSchema: Yup.object({
      category: Yup.string()
        .required('Please select category'),
      designer: Yup.string()
        .required('Designer name is required'),
      size: Yup.string()
        .required('Size is required'),
      itemTitle: Yup.string()
        .required('Item title is required'),
      color: Yup.string()
        .required('Color is required'),
      condition: Yup.string()
        .required('Please select condition'),
      description: Yup.string()
        .required('Description is required'),
      price: Yup.number()
        .required('Price is required'),
      shippingCarrier: Yup.string()
        .required('Please select shipping carrier'),
      shippingPrice: Yup.number()
        .required('Shipping price is required'),
      // file: Yup.mixed().required('Please upload at least one image'),
    }),
    onSubmit: async values => {
      uploadFile()
    },
  });

  const handleOnChange = (event) => {
    const files = event.target.files
    Array.from(files).map((el) => (
      setImageUpload((prev) => [...prev, el]),
      setFilesPreview((prev) => [...prev, URL.createObjectURL(el)])
    ))
  }

  const handleRemove = (index) => {
    const currentFilesPreview = filesPreview
    const currentFilesList = imageUpload
    const currentImageUrls = imageUrls
    console.log(currentFilesPreview)
    console.log(currentFilesList)
    console.log(currentImageUrls)
    setFilesPreview(filesPreview.filter((o, i) => index !== i))
    setImageUpload(imageUpload.filter((o, i) => index !== i))
  }

  return (   
    <FormContainer>
      <h1>Add a new listing</h1>
      <form onSubmit={formik.handleSubmit}>
        <h3>ITEM DETAILS</h3>
        <InputSelect type="text" name="category" placeholder="Category" onChange={formik.handleChange} value={formik.values.category}>
          <option value="" disabled hidden selected>Select category</option>
          <option value="tops">TOPS</option>
          <option value="bottoms">BOTTOMS</option>
          <option value="sneakers">SNEAKERS</option>
          <option value="accessories">ACCESSORIES</option>
        </InputSelect>
        {formik.touched.category && formik.errors.category ? (
          <InputError>{formik.errors.category}</InputError>
        ) : null}
        <InputMain type="text" name="designer" placeholder="Designer" onChange={formik.handleChange} value={formik.values.designer}/>
        {formik.touched.designer && formik.errors.designer ? (
          <InputError>{formik.errors.designer}</InputError>
        ) : null}
        <InputMain type="text" name="size" placeholder="Size on tag" onChange={formik.handleChange} value={formik.values.size}/>
        {formik.touched.size && formik.errors.size ? (
          <InputError>{formik.errors.size}</InputError>
        ) : null}
        <InputMain type="text" name="itemTitle" placeholder="Item title" onChange={formik.handleChange} value={formik.values.itemTitle}/>
        {formik.touched.itemTitle && formik.errors.itemTitle ? (
          <InputError>{formik.errors.itemTitle}</InputError>
        ) : null}
        <h3>COLOR</h3>
        <InputMain type="text" name="color" placeholder="Exmaple: 'Light Grey'" onChange={formik.handleChange} value={formik.values.color}/>
        {formik.touched.color && formik.errors.color ? (
          <InputError>{formik.errors.color}</InputError>
        ) : null}
        <h3>CONDITION</h3>
        <InputSelect name="condition" id="condition" onChange={formik.handleChange} value={formik.values.condition}>
          <option value="" disabled hidden selected>Select condition</option>
          <option value="brand-new">NEW WITH TAGS</option>
          <option value="new-no-tags">NEW WITHOUT TAGS</option>
          <option value="used">PRE-OWNED</option>
        </InputSelect>
        {formik.touched.condition && formik.errors.condition ? (
          <InputError>{formik.errors.condition}</InputError>
        ) : null}
        <h3>DESCRIPTION</h3>
        <InputTextArea type="text" name="description" placeholder="Details about condition, garment fit and other informations that might be important for the buyer." onChange={formik.handleChange}/>
        {formik.touched.description && formik.errors.description ? (
          <InputError>{formik.errors.description}</InputError>
        ) : null}
        <h3>PRICE</h3>
        <InputMain type="text" name="price" placeholder="Price (USD)" onChange={formik.handleChange} value={formik.values.price}/>
        {formik.touched.price && formik.errors.price ? (
          <InputError>{formik.errors.price}</InputError>
        ) : null}
        <h3>SHIPPING</h3>
        <InputSelect name="shippingCarrier" id="shipping" onChange={formik.handleChange} value={formik.values.shippingCarrier}>
          <option value="" disabled selected hidden>Choose carrier</option>
          <option value="dhl">DHL</option>
          <option value="fedex">FEDEX</option>
          <option value="ups">UPS</option>
        </InputSelect> <br/>
        {formik.touched.shippingCarrier && formik.errors.shippingCarrier ? (
          <InputError>{formik.errors.shippingCarrier}</InputError>
        ) : null}
        <InputMain type="text" name="shippingPrice" placeholder="Shipping cost (USD)" onChange={formik.handleChange} value={formik.values.shippingPrice}/>
        {formik.touched.shippingPrice && formik.errors.shippingPrice ? (
          <InputError>{formik.errors.shippingPrice}</InputError>
        ) : null}
        <h3>UPLOAD IMAGES</h3>
        {filesPreview.length > 0 ?
          <FilesPreviewContainer>
            {filesPreview.map((el, index) => {
              return (
                <FilesPreviewElement>
                  <img src={el} alt={el} key={index} width="200" height="200"/>
                  <ButtonPrimary type="button" onClick={() => handleRemove(index)}>REMOVE IMAGE</ButtonPrimary>
                </FilesPreviewElement>
              )
            })}
          </FilesPreviewContainer> : null
        }
        <FileUploadPrimary>
          <FileUploadInput
            type="file"
            id="file"
            name="file"
            multiple
            onChange={(event) => {
              handleOnChange(event)
            }}
          />
          SELECT IMAGES
        </FileUploadPrimary>
        {imageUpload.length < 1 && formik.errors.file ? (
          <InputError>{formik.errors.file}</InputError>
        ) : null} 
        <br />
        <ButtonSecondary type="submit">POST ITEM</ButtonSecondary>
      </form>
      <SuccessPopup 
        successMessage={successMessage} 
        setSuccessMessage={setSuccessMessage}
        title="Item posted successfully!"
        description="Go to 'My items' tab in your profile page to see your listings."
      />
    </FormContainer>
  )
}

export default SellForm;