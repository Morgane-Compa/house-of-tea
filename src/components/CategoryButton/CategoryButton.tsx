import { ICategory } from 'mocks/product.mock';
import style from './CategoryButton.module.scss'

export interface CategoryButtonProps {
    category: ICategory
}
const CategoryButton = (props: CategoryButtonProps) => {
    const {category} = props;
    return(
        <button className={style.categoryBtn}>
            {category.name}
        </button>
    )
}

export default CategoryButton