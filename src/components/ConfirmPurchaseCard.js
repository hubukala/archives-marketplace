import { PurchaseCardContainer, ImageThumbnail, DescriptionContainer, TitleSize, Paragraph, ParagraphLight } from "../styles/complete-purchase/PurchaseCardContainer";

const ConfirmPurchaseCard = (props) => {
  return (
    <PurchaseCardContainer>
      <ImageThumbnail src={props.image} alt="image"/><br/>
      <DescriptionContainer>
        <TitleSize>
            <Paragraph>{props.title}</Paragraph>
            <Paragraph>SIZE: {props.size}</Paragraph>
        </TitleSize>
        <TitleSize>
            <ParagraphLight>$ {props.price}</ParagraphLight>
        </TitleSize>
      </DescriptionContainer>
    </PurchaseCardContainer>
  )
}

export default ConfirmPurchaseCard;