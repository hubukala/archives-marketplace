import { useState } from "react";
import SuccessPopup from "./SuccessPopup";
import { FormContainer } from "../styles/complete-purchase/FormContainer";
import { FormElement } from "../styles/complete-purchase/FormElement";
import { InputMain } from "../styles/post-item-form/PostItemFormStyles";
import { ButtonPrimary } from "../styles/shared/buttons/ButtonPrimary";

const ConfirmPurchaseForm = () => {
    const [successMessage, setSuccessMessage] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault();
        setSuccessMessage(true)
    }
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
                    <ButtonPrimary onClick={handleSubmit}>SUBMIT</ButtonPrimary>
                </div>
            </FormElement>
            <SuccessPopup 
                successMessage={successMessage} 
                setSuccessMessage={setSuccessMessage}
                title="Item ordered successfully!"
                description="Go to 'Orders' tab in your profile page to see your orders."
            />
        </FormContainer>
    )
}

export default ConfirmPurchaseForm;