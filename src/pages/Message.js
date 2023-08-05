import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getDocs, query, where, collection } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import ConfirmPurchaseCard from '../components/ConfirmPurchaseCard';
import { MessageContainer } from '../styles/message/MessageContainer';
import { InputTextArea } from '../styles/post-item-form/PostItemFormStyles';
import { ItemContainer } from '../styles/message/ItemContainer';
import { InputContainer } from '../styles/message/InputContainer';
import { HeaderOne } from '../styles/shared/text/HeaderOne';
import { ButtonPrimary } from '../styles/shared/buttons/ButtonPrimary';
import { ButtonSecondary } from '../styles/shared/buttons/ButtonSecondary';
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
        <MessageContainer>
            <HeaderOne>MESSAGE</HeaderOne>
            <ItemContainer>
                <ConfirmPurchaseCard
                    key={data.id}
                    image={data.image}
                    title={data.title}
                    size={data.size}
                    price={data.price}
                    id={data.id}
                    category={data.category}
                />
            </ItemContainer>
            <form onSubmit={formik.handleSubmit}>
                <InputContainer>
                    <InputTextArea
                        type="text"
                        name="message"
                        placeholder="Type in your message"
                        onChange={formik.handleChange}
                    />
                    {formik.touched.message && formik.errors.message ? (
                        <InputError>{formik.errors.message}</InputError>
                    ) : null}
                    <div>
                        <ButtonSecondary>CANCEL</ButtonSecondary>
                        <ButtonPrimary>SEND</ButtonPrimary>
                    </div>
                </InputContainer>
            </form>
        </MessageContainer>
    );
};

export default Message;
