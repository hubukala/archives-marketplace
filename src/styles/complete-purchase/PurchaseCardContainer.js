import styled from "styled-components";

const PurchaseCardContainer = styled.div`
  display: flex;
  gap: 20px;
  text-align: left;
  line-height: 25px;
  height: 155px;
  box-sizing: border-box;
  border: 1px solid grey;
  border-radius: 5px;
  font-size: 18px;
`

const ImageThumbnail = styled.img`
  width: 100%;
  max-width: 150px;
  min-width: 100px;
  height: 150px;
  object-fit: contain;
`

export { PurchaseCardContainer, ImageThumbnail };