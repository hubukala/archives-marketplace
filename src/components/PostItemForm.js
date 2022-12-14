import { InputMain, InputSelect, InputTextArea } from "../styles/post-item-form/PostItemFormStyles";
import { FormContainer } from "../styles/post-item-form/FormContainer";

const SellForm = () => {
  return (
    <FormContainer>
      <h1>Add a new listing</h1>
      <form action="">
        <h3>ITEM DETAILS</h3>
        <InputMain type="text" name="category" placeholder="Category"/>
        <InputMain type="text" name="designer" placeholder="Designer"/>
        <InputMain type="text" name="size" placeholder="Size"/>
        <InputMain type="text" name="item-title" placeholder="Item title"/>
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
          <option value="2">NEW WITH TAGS</option>
          <option value="3">NEW WITHOUT TAGS</option>
          <option value="4">PRE-OWNED</option>
        </InputSelect> <br/>
        <InputMain type="text" name="shipping-price" placeholder="Shipping cost (USD)"/>
        <h3>UPLOAD IMAGES</h3>
        <button>select</button>
      </form>
    </FormContainer>
  )
}

export default SellForm;