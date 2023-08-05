import { useParams } from 'react-router-dom';
import { Section } from '../styles/Section';
import ConfirmPurchaseForm from '../components/ConfirmPurchaseForm';
import { CompletePurchaseContainer } from '../styles/complete-purchase/CompletePurchaseContainer';
import { useEffect, useState } from 'react';
import { getDocs, query, where, collection } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import ConfirmPurchaseCard from '../components/ConfirmPurchaseCard';
import {
    ElementContainer,
    Paragraph,
    OrderDetailsContainer,
    ParagraphLight,
} from '../styles/complete-purchase/PurchaseCardContainer';

const CompletePurchase = () => {
    const productId = useParams();
    const [data, setData] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            const q = query(
                collection(db, 'products'),
                where('product_id', '==', productId.productId),
            );
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                setData({
                    category: doc.data().category,
                    condition: doc.data().condition,
                    description: doc.data().description,
                    designer: doc.data().designer,
                    image: doc.data().images[0],
                    price: doc.data().price,
                    id: doc.data().product_id,
                    size: doc.data().size,
                    title: doc.data().title,
                });
            });
        };
        fetchData();
    }, [productId.productId]);

    return (
        <Section>
            <CompletePurchaseContainer>
                <div className="border1">
                    <ConfirmPurchaseForm productId={productId.productId} />
                </div>
                <ElementContainer>
                    <ConfirmPurchaseCard
                        key={data.id}
                        image={data.image}
                        title={data.title}
                        size={data.size}
                        price={data.price}
                        id={data.id}
                        category={data.category}
                    />
                    <Paragraph>ORDER DETAILS:</Paragraph>
                    <OrderDetailsContainer>
                        <ParagraphLight>Listing price:</ParagraphLight>
                        <ParagraphLight>{data.price}</ParagraphLight>
                    </OrderDetailsContainer>
                    <OrderDetailsContainer>
                        <Paragraph>TOTAL:</Paragraph>
                        <Paragraph>{data.price}</Paragraph>
                    </OrderDetailsContainer>
                </ElementContainer>
            </CompletePurchaseContainer>
        </Section>
    );
};

export default CompletePurchase;
