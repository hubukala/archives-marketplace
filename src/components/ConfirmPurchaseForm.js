import { FormContainer } from "../styles/complete-purchase/FormContainer";
import { FormElement } from "../styles/complete-purchase/FormElement";
import { InputMain } from "../styles/post-item-form/PostItemFormStyles";

const ConfirmPurchaseForm = () => {
    return(
        <FormContainer>
            <FormElement action="" className="form">
                <h3>Shipping adress</h3>
                <InputMain placeholder="City"/>
                <InputMain placeholder="Zip code"/>
                <InputMain placeholder="Street adress"/>
                <h3>Payment Details</h3>
                <InputMain placeholder="Card number"/>
                <InputMain placeholder="Expiration date"/>
                <InputMain placeholder="CVC"/>
                <div>
                    <button disabled>SUBMIT</button>
                </div>
            </FormElement>
        </FormContainer>
    )
}

export default ConfirmPurchaseForm;