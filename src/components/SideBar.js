import { SideBarStyle } from "../styles/SideBarStyle";
import { SideBarButton } from "../styles/SideBarButton";

const SideBar = (props) => {
  return (
    <SideBarStyle>
      <SideBarButton onClick={props.all}>ALL</SideBarButton>
      <SideBarButton onClick={props.tops}>TOPS</SideBarButton>
      <SideBarButton onClick={props.bottoms}>BOTTOMS</SideBarButton>
      <SideBarButton onClick={props.sneakers}>SNEAKERS</SideBarButton>
      <SideBarButton onClick={props.accessories}>ACCESSORIES</SideBarButton>
    </SideBarStyle>
  )
}

export default SideBar;