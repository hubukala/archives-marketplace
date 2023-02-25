import { useState, useEffect } from "react";
import { getDocs, query, where, collection } from "firebase/firestore";
import { db } from "../firebaseConfig";
import MappingArray from "../shared/MapArray";
import FilterArray from "../shared/FilterArray";
import SideBar from "../components/SideBar";
import { CategoryContent } from "../styles/CategoryContent";
import { ProductsContainer } from "../styles/ProductsContainer";

const Shop = () => {
  const [currentCategory, setCategory] = useState("All");
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
              image: doc.data().images[0],
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

  const NewFilter = FilterArray(currentCategory, data);
  const displayArray = MappingArray(NewFilter);

  return (
    <CategoryContent>
      <SideBar
        all={() => {setCategory("All")}}
        tops={() => {setCategory("tops")}}
        bottoms={() => {setCategory("bottoms")}}
        sneakers={() => {setCategory("footwear")}}
        accessories={() => {setCategory("accessories")}}
      />
      <ProductsContainer>
        {displayArray}
      </ProductsContainer>
    </CategoryContent>
  );
};

export default Shop;