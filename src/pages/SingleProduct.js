import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";
import ReactImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import ButtonProduct from '../components/ButtonProduct';
import { ProductSection, GallerySection, ProductDescription, ProductDetails, ProductPrice } from '../styles/SingleProductStyles';
import { ButtonSection } from '../styles/shared/buttons/ButtonProductStyles';
import Loader from '../components/Loader';

const SingleProduct = () => {
    const navigate = useNavigate()
    const [data, setData] = useState({})
    const {productId} = useParams();

    useEffect(() => {
        const fetchData = async () => {
            const docRef = doc(db, "products", productId)
            const docSnap = await getDoc(docRef);
            console.log("Document data:", docSnap.data());
            setData({
                category: docSnap.data().category,
                condition: docSnap.data().condition,
                description: docSnap.data().description,
                designer: docSnap.data().designer,
                image: docSnap.data().images.map((item) => ({original: item, thumbnail: item})),
                price: docSnap.data().price,
                id: docSnap.data().product_id,
                size: docSnap.data().size,
                title: docSnap.data().title,
                buyer_id: docSnap.data().buyer_id
            })
        }
        fetchData()
    }, [productId, data.buyer_id])

    const onClickPurchase = (id) => {
        console.log("purchase button clicked")
        navigate(`/shop/${id}/complete`);
    }
    return (
        <ProductSection>
            {data.image ? (
                <>        
                    <GallerySection>
                        <ReactImageGallery items={data.image}/>
                    </GallerySection>
                    <ProductDescription>
                        <h2>{data.title}</h2>
                        <ProductDetails>SIZE: {data.size}</ProductDetails>
                        <ProductDetails>CONDITION: {data.condition}</ProductDetails>
                        <ProductPrice>$ {data.price ?? ""}</ProductPrice>
                    </ProductDescription>
                    <ButtonSection>
                        {data.buyer_id ?
                            <>                            
                                <ButtonProduct disabled label="SOLD OUT"/>
                            </> :
                            <>                           
                                <ButtonProduct label="PURCHASE" handleOnClick={() => onClickPurchase(data.id)}/>
                                {/* todo: add offer function and messages */}
                                {/* <ButtonProduct label="OFFER"/>
                                <ButtonProduct label="MESSAGE"/> */}
                            </>
                        }         
                    </ButtonSection>
                </> 
            ) : <Loader/> }
        </ProductSection>
    );
};

export default SingleProduct;