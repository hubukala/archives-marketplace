import { useEffect, useState } from 'react';
import { auth, db } from '../firebaseConfig';
import { collection, query, where, getDocs } from 'firebase/firestore';
import MappingArray from '../shared/MapArray';
import { ProductsContainer } from '../styles/ProductsContainer';
import Loader from './Loader';

const AccountOrders = () => {
    const [productsLoaded, setProductsLoaded] = useState(false);
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const userId = auth.currentUser.uid;
            const q = query(
                collection(db, 'products'),
                where('buyer_id', '==', userId),
            );
            const querySnapshot = await getDocs(q);
            setProductsLoaded(true);
            querySnapshot.forEach((doc) => {
                setData((currentState) => [
                    ...currentState,
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
                    },
                ]);
            });
        };
        fetchData();
    }, []);

    const displayArray = MappingArray(data);

    return (
        <>
            <h1>Ordered items</h1>
            {!productsLoaded ? (
                <Loader />
            ) : (
                <ProductsContainer>
                    {data.length < 1
                        ? "You didn't order anything yet."
                        : displayArray}
                </ProductsContainer>
            )}
        </>
    );
};

export default AccountOrders;
