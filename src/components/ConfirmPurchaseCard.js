import { PurchaseCardContainer, ImageThumbnail } from "../styles/complete-purchase/PurchaseCardContainer";

const ConfirmPurchaseCard = (props) => {
  return (
    <PurchaseCardContainer>
      <ImageThumbnail src={props.image} alt="image"/><br/>
      {props.title}<br/>
      SIZE: {props.size}<br/>
      $ {props.price}<br/>
    </PurchaseCardContainer>
  )
}

export default ConfirmPurchaseCard;