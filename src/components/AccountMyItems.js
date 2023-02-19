import { useEffect, useState } from "react"
import { auth, db } from "../firebaseConfig"
import { collection, query, where, getDocs } from "firebase/firestore"
import MappingArray from "../shared/MapArray"
import ProductCard from "./ProductCard"
import { ProductsContainer } from "../styles/ProductsContainer"

const AccountMyItems = () => {
    const [data, setData] = useState([])
    
    useEffect(() => {
        const fetchData = async () => {
            const userId = auth.currentUser.uid
            const q = query(collection(db, "products"), where("user_id", "==", userId))
            const querySnapshot = await getDocs(q)
            querySnapshot.forEach((doc) => {
                console.log(doc.id, " => ", doc.data())
                console.log(doc.data().price)
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

    const displayArray = MappingArray(data)

    return (
        <>        
            <h1>My Items</h1>
            <ProductsContainer>
                {displayArray}
            </ProductsContainer>
        </>
    )
}

export default AccountMyItems