import ExtraCard from "components/ExtraCard/ExtraCard";
import { IProduct, PRODUCTS } from "../../mocks/product.mock";
import style from './ExtraList.module.scss';
import { useParams } from "react-router-dom";
import { IExtra } from "pages/ProductDetailsPage/ProductDetailsPage";
import { useState } from "react";

interface ExtraListProps {
    product: IProduct;
    buildExtraList : (list: IExtra[]) => void
}

const ExtraList = (props: ExtraListProps) => {

    // décomposition du props
    const {buildExtraList, product} = props;
    
    const [extraList, setExtraList] = useState<IExtra[]>([]);
    // Créer une fonction qui va pusher dans le tableau extralist
    const createExtraList = (chosenExtra: IExtra) => {
        // Tu vérifies si l'extra existe déjà
        const foundExtra = extraList.find(extra => extra.name === chosenExtra.name )
        if(foundExtra) {
            foundExtra.quantity = chosenExtra.quantity;
            foundExtra.finalPrice = foundExtra.quantity * foundExtra.initialPrice;
            // console.log()
            setExtraList([...extraList]);
            buildExtraList([...extraList]);
        } else {
            // Sinon tu en créés un nouveau
            setExtraList([...extraList, chosenExtra]);
            buildExtraList([...extraList, chosenExtra]);
        }
    }

    return (
        <div className={style.container}>
            {
            product?.customization?.extras.map((extra) => {
                //console.log(index);
                return <ExtraCard key={extra.id} extra={extra} extraCallBack={createExtraList}/>})
            }
        </div>
    )
};

export default ExtraList;