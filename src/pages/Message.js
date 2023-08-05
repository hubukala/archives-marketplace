import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getDocs, query, where, collection } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import ConfirmPurchaseCard from '../components/ConfirmPurchaseCard';
import { MessageContainer } from '../styles/message/MessageContainer';
import { FormContainer } from '../styles/complete-purchase/FormContainer';
import {
    InputTextArea,
    InputsSection,
} from '../styles/post-item-form/PostItemFormStyles';
import { useFormik } from 'formik';
import { InputError } from '../styles/post-item-form/InputError';
import * as Yup from 'yup';

const Message = () => {
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

    const formik = useFormik({
        initialValues: {
            message: '',
        },
        validationSchema: Yup.object({
            description: Yup.string().required('Message content is required'),
        }),
        onSubmit: async (values) => {
            console.log('sent');
        },
    });

    return (
        <>
            <ConfirmPurchaseCard
                key={data.id}
                image={data.image}
                title={data.title}
                size={data.size}
                price={data.price}
                id={data.id}
                category={data.category}
            />
            <MessageContainer>
                <form onSubmit={formik.handleSubmit}>
                    <InputsSection>
                        <h3>MESSAGE</h3>
                        <InputTextArea
                            type="text"
                            name="message"
                            placeholder="Type in your message"
                            onChange={formik.handleChange}
                        />
                        {formik.touched.message && formik.errors.message ? (
                            <InputError>{formik.errors.message}</InputError>
                        ) : null}
                    </InputsSection>
                </form>
            </MessageContainer>
        </>
    );
};

export default Message;
