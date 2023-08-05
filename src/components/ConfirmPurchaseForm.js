import { useState } from 'react';
import SuccessPopup from './SuccessPopup';
import { FormContainer } from '../styles/complete-purchase/FormContainer';
import { FormElement } from '../styles/complete-purchase/FormElement';
import { InputMain } from '../styles/post-item-form/PostItemFormStyles';
import { ButtonPrimary } from '../styles/shared/buttons/ButtonPrimary';
import { InputError } from '../styles/post-item-form/InputError';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { auth, db } from '../firebaseConfig';
import { doc, updateDoc } from 'firebase/firestore';

const ConfirmPurchaseForm = ({ productId }) => {
    const [successMessage, setSuccessMessage] = useState(false);
    const formik = useFormik({
        initialValues: {
            city: '',
            zipcode: '',
            adress: '',
            cardnumber: '',
            expirationdate: '',
            cvv: '',
        },
        validationSchema: Yup.object({
            city: Yup.string().required('Please provide your city'),
            zipcode: Yup.number().required('Please provide your zip code'),
            adress: Yup.string().required('Please provide your adress'),
            cardnumber: Yup.string()
                .required('Please provide card number')
                .matches(/^[0-9]+$/, 'Must be only digits')
                .min(16)
                .max(16),
            expirationdate: Yup.string()
                .required('Please provide expiration date')
                .typeError('Not a valid expiration date. Example: MM/YY')
                .max(5, 'Not a valid expiration date. Example: MM/YY')
                .matches(
                    /([0-9]{2})\/([0-9]{2})/,
                    'Not a valid expiration date. Example: MM/YY',
                ),
            cvv: Yup.string().required('Please provide CVV').min(3).max(4),
        }),
        onSubmit: async (value) => {
            try {
                await updateDoc(doc(db, 'products', productId), {
                    buyer_id: auth.currentUser.uid,
                    available: false,
                });
                setSuccessMessage(true);
            } catch (err) {
                console.log(err);
            }
        },
    });
    return (
        <FormContainer>
            <FormElement
                action=""
                className="form"
                onSubmit={formik.handleSubmit}
            >
                <h3>Shipping adress</h3>
                <InputMain
                    type="text"
                    name="city"
                    placeholder="City"
                    onChange={formik.handleChange}
                    value={formik.values.city}
                />
                {formik.touched.city && formik.errors.city ? (
                    <InputError>{formik.errors.city}</InputError>
                ) : null}
                <InputMain
                    type="text"
                    name="zipcode"
                    placeholder="Zip code"
                    onChange={formik.handleChange}
                    value={formik.values.zipcode}
                />
                {formik.touched.zipcode && formik.errors.zipcode ? (
                    <InputError>{formik.errors.zipcode}</InputError>
                ) : null}
                <InputMain
                    type="text"
                    name="adress"
                    placeholder="Street adress"
                    onChange={formik.handleChange}
                    value={formik.values.adress}
                />
                {formik.touched.adress && formik.errors.adress ? (
                    <InputError>{formik.errors.adress}</InputError>
                ) : null}
                <h3>Payment Details</h3>
                <InputMain
                    type="text"
                    name="cardnumber"
                    placeholder="Card number"
                    onChange={formik.handleChange}
                    value={formik.values.cardnumber}
                />
                {formik.touched.cardnumber && formik.errors.cardnumber ? (
                    <InputError>{formik.errors.cardnumber}</InputError>
                ) : null}
                <InputMain
                    type="text"
                    name="expirationdate"
                    placeholder="Expiration date (example: MM/YY)"
                    onChange={formik.handleChange}
                    value={formik.values.expirationdate}
                />
                {formik.touched.expirationdate &&
                formik.errors.expirationdate ? (
                    <InputError>{formik.errors.expirationdate}</InputError>
                ) : null}
                <InputMain
                    type="text"
                    name="cvv"
                    placeholder="CVV"
                    onChange={formik.handleChange}
                    value={formik.values.cvv}
                />
                {formik.touched.cvv && formik.errors.cvv ? (
                    <InputError>{formik.errors.cvv}</InputError>
                ) : null}
                <div>
                    <ButtonPrimary type="submit">SUBMIT</ButtonPrimary>
                </div>
            </FormElement>
            <SuccessPopup
                successMessage={successMessage}
                setSuccessMessage={setSuccessMessage}
                title="Item ordered successfully!"
                description="Go to 'Orders' tab in your profile page to see your orders."
            />
        </FormContainer>
    );
};

export default ConfirmPurchaseForm;
