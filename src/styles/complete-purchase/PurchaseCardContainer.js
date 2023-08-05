import styled from "styled-components";

const PurchaseCardContainer = styled.div`
  display: flex;
  gap: 20px;
  height: 155px;
  box-sizing: border-box;
  border: 1px solid grey;
  border-radius: 5px;
  font-size: 18px;
  min-width: 500px;
`

const ElementContainer = styled.div`
  margin: 1.5rem;
`

const ImageThumbnail = styled.img`
  width: 100%;
  max-width: 150px;
  min-width: 100px;
  height: 150px;
  object-fit: contain;
`

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const OrderDetailsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

const TitleSize = styled.div`
  line-height: 0px;
`

const Paragraph = styled.p`
  font-weight: bold
`

const ParagraphLight = styled.p`
`

export { PurchaseCardContainer, ElementContainer, ImageThumbnail, DescriptionContainer, TitleSize, Paragraph, ParagraphLight, OrderDetailsContainer };