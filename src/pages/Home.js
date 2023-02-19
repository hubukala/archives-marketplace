import { useEffect, useState } from "react";
import { getDocs, query, where, collection } from "firebase/firestore";
import { db } from "../firebaseConfig";
import Image from "../assets/images/68532840.jpeg"
import MappingArray from "../shared/MapArray";
import HomeSection from "../styles/HomeSection";
import { HeadTwo } from "../styles/HeadTwo";
import { ProductListContainer } from "../styles/ProductListContainer";
import { ImageFullScreen } from "../styles/shared/images/ImageFullScreen";

const Home = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const q = query(collection(db, "products"), where("available", "==", true))
      const querySnapshot = await getDocs(q)
      querySnapshot.forEach((doc) => {
        setData(currentState => 
          [...currentState, 
            {
              category: doc.data().category,
              condition: doc.data().condition,
              description: doc.data().description,
              designer: doc.data().designer,
              image: doc.data().images,
              price: doc.data().price,
              id: doc.data().product_id,
              size: doc.data().size,
              title: doc.data().title,
            }
          ]
        )
      })
    }
    fetchData()
  },[])

  const displayArray = MappingArray(data);

  return (
    <HomeSection>
      <ImageFullScreen src={Image} alt="VW" />
      <HeadTwo>Recently Posted</HeadTwo>
      <ProductListContainer>
        {displayArray}
      </ProductListContainer>
    </HomeSection>
  );
};

export default Home;