import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../firebaseConfig';
import { collection, query, where, getDocs } from 'firebase/firestore';
import MappingArray from '../shared/MapArray';
import HomeSection from '../styles/HomeSection';
import { HeadTwo } from '../styles/HeadTwo';
import { ProductListContainer } from '../styles/ProductListContainer';

const SearchResults = () => {
    const { inputId } = useParams();
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const q = query(
                collection(db, 'products'),
                where('title', '>=', `${inputId.toLocaleUpperCase()}`),
                where('title', '<', `${inputId.toLocaleUpperCase()}\uf8ff'`),
            );
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                console.log(doc.id, ' => ', doc.data());
                console.log(doc.data().price);
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
    }, [inputId]);

    const displayArray = MappingArray(data);

    return (
        <HomeSection>
            <HeadTwo>Search results for '{inputId}'</HeadTwo>
            <ProductListContainer>
                {data.length < 1 ? 'No items found' : displayArray}
            </ProductListContainer>
        </HomeSection>
    );
};

export default SearchResults;
