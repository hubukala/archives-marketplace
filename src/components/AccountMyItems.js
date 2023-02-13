import { auth, db } from "../firebaseConfig"
import { collection, query, where, getDocs } from "firebase/firestore"
import { useEffect, useState } from "react"

const AccountMyItems = () => {
    const [data, setData] = useState({})
    
    useEffect(() => {
        const fetchData = async () => {
            const userId = auth.currentUser.uid
            const q = query(collection(db, "products"), where("user_id", "==", userId))
            const querySnapshot = await getDocs(q)
            querySnapshot.forEach((doc) => {
                console.log(doc.id, " => ", doc.data())
                console.log(doc.data().price)
                setData({
                    "price": doc.data().price, 
                    "category": doc.data().category
                })
            })
        }
        fetchData()
    },[])
    return (
        <>        
            <h1>My Items</h1>
            <h1>{data.price}</h1>
            <h1>{data.category}</h1>
        </>
    )
}

export default AccountMyItems