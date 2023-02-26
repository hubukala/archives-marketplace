import { useParams } from "react-router-dom"
import { Section } from "../styles/Section"
import ConfirmPurchaseForm from "../components/ConfirmPurchaseForm"
import { CompletePurchaseContainer } from "../styles/complete-purchase/CompletePurchaseContainer"

const CompletePurchase = () => {
    const productId = useParams()
    console.log(productId)

    return (
        <Section>
            <CompletePurchaseContainer>
                <div className="border1">
                    <ConfirmPurchaseForm />
                </div>
                <div className="border1">
                    place for purchased item details
                </div>
            </CompletePurchaseContainer>
        </Section>
    )
}

export default CompletePurchase