import { useEffect, useState } from "react"
import { auth, db } from "../firebaseConfig"
import { collection, query, where, getDocs } from "firebase/firestore"
import MappingArray from "../shared/MapArray"
import { ProductsContainer } from "../styles/ProductsContainer"
import Loader from "./Loader"

const AccountMyItems = () => {
    const [productsLoaded, setProductsLoaded] = useState(false)
    const [data, setData] = useState([])
    
    useEffect(() => {
        const fetchData = async () => {
            const userId = auth.currentUser.uid
            const q = query(collection(db, "products"), where("user_id", "==", userId))
            const querySnapshot = await getDocs(q)
            querySnapshot.forEach((doc) => {
                setProductsLoaded(true)
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

    const displayArray = MappingArray(data)

    return (
        <>
            <h1>My Items</h1>
            {!productsLoaded ? <Loader/> :
            <ProductsContainer>
                {data.length < 1 ? "You didn't post any items yet." : displayArray}
            </ProductsContainer>}
        </>
    )
}

export default AccountMyItems