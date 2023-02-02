import { InputMain, InputSelect, InputTextArea } from "../styles/post-item-form/PostItemFormStyles";
import { FormContainer } from "../styles/post-item-form/FormContainer";
import { db } from '../firebaseConfig';
import { collection, doc, setDoc } from 'firebase/firestore';
import { getAuth } from "firebase/auth";
import { uuidv4 } from "@firebase/util";

const SellForm = () => {
  const auth = getAuth()
  const productsRef = collection(db, 'products');
  const uniqueId = uuidv4()
  
  const handleSubmit = (event) => {
    event.preventDefault()
    setDoc(doc(productsRef, uniqueId), {
      user_id: auth.currentUser.uid,
      product_id: uniqueId,
      title: event.target.itemTitle.value,
      description: event.target.description.value,
      size: event.target.size.value,
      color: event.target.color.value,
      designer: event.target.designer.value,
      category: event.target.category.value, 
      condition: event.target.condition.value, 
      price: event.target.price.value, 
    })
  }
  return (
    <FormContainer>
      <h1>Add a new listing</h1>
      <form onSubmit={handleSubmit}>
        <h3>ITEM DETAILS</h3>
        <InputSelect type="text" name="category" placeholder="Category">
          <option value="" disabled hidden selected>Select category</option>
          <option value="tops">TOPS</option>
          <option value="bottoms">BOTTOMS</option>
          <option value="sneakers">SNEAKERS</option>
          <option value="accessories">ACCESSORIES</option>
        </InputSelect>
        <InputMain type="text" name="designer" placeholder="Designer"/>
        <InputMain type="text" name="size" placeholder="Size"/>
        <InputMain type="text" name="itemTitle" placeholder="Item title"/>
        <h3>COLOR</h3>
        <InputMain type="text" name="color" placeholder="Exmaple: 'Light Grey'" />
        <h3>CONDITION</h3>
        <InputSelect name="condition" id="condition">
          <option value="" disabled hidden selected>Select condition</option>
          <option value="brand-new">NEW WITH TAGS</option>
          <option value="new-no-tags">NEW WITHOUT TAGS</option>
          <option value="used">PRE-OWNED</option>
        </InputSelect>
        <h3>DESCRIPTION</h3>
        <InputTextArea type="text" name="description" placeholder="Details about condition, garment fit and other informations that might be important for the buyer."/>
        <h3>PRICE</h3>
        <InputMain type="text" name="price" placeholder="Price (USD)"/>
        <h3>SHIPPING</h3>
        <InputSelect defaultValue={'DEFAULT'} name="shipping-carrier" id="shipping">
          <option value="DEFAULT" disabled selected hidden>Choose carrier</option>
          <option value="dhl">DHL</option>
          <option value="fedex">FEDEX</option>
          <option value="ups">UPS</option>
        </InputSelect> <br/>
        <InputMain type="text" name="shippingPrice" placeholder="Shipping cost (USD)"/>
        <h3>UPLOAD IMAGES</h3>
        <button type="submit">select</button>
      </form>
    </FormContainer>
  )
}

export default SellForm;