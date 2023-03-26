import { useState } from "react";
import { db, storage } from '../firebaseConfig';
import { collection, doc, setDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL, listAll, list } from "firebase/storage";
import { auth } from "../firebaseConfig";
import { uuidv4 } from "@firebase/util";
import { useFormik } from "formik";
import * as Yup from 'yup';
import SuccessPopup from "./SuccessPopup";
import { InputMain, InputSelect, InputTextArea } from "../styles/post-item-form/PostItemFormStyles";
import { InputError } from "../styles/post-item-form/InputError";
import { FormContainer } from "../styles/post-item-form/FormContainer";

const SellForm = () => {
  const productsRef = collection(db, 'products');
  const uniqueId = uuidv4()
  const [successMessage, setSuccessMessage] = useState(false)

  const [imageUpload, setImageUpload] = useState([]);
  const [imageUrls, setImageUrls] = useState([]);

  const imagesListRef = ref(storage, "products/");

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
    onSubmit: values => {
      imageUpload.map((el) => {
        const imageRef = ref(storage, `products/${el.name + uniqueId}`);
        uploadBytes(imageRef, el).then((snapshot) => {
          getDownloadURL(snapshot.ref).then((url) => {
            setImageUrls((prev) => [...prev, url]);
          });
        });
      })
      setDoc(doc(productsRef, uniqueId), {
        user_id: auth.currentUser.uid,
        product_id: uniqueId,
        available: true,
        title: values.itemTitle,
        description: values.description,
        size: values.size,
        color: values.color,
        designer: values.designer,
        category: values.category, 
        condition: values.condition, 
        price: values.price,
        image: imageUrls
      })
      setSuccessMessage(true)
    },
  });

  const uploadFile = () => {
    const imageRef = ref(storage, `products/${imageUpload.name + uniqueId}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrls((prev) => [...prev, url]);
      });
    });
  };

  const handleOnChange = (event) => {
    const files = event.target.files
    Array.from(files).map((el) => (
      console.log(el.name),
      setImageUpload((prev) => [...prev, el])
    ))
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
        <InputSelect defaultValue={'DEFAULT'} name="shippingCarrier" id="shipping" onChange={formik.handleChange} value={formik.values.shippingCarrier}>
          <option value="DEFAULT" disabled selected hidden>Choose carrier</option>
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
        {imageUpload.map((el) => {
          return <p>{el.name}</p>
        })}
        <input 
          type="file"
          id="file"
          name="file"
          multiple
          onChange={(event) => {
            handleOnChange(event)
          }}
        />
        {imageUpload.length < 1 && formik.errors.file ? (
          <InputError>{formik.errors.file}</InputError>
        ) : null} 
        <br />
        <button type="submit">SUBMIT</button>
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