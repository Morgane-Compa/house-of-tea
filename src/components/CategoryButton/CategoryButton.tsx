import { CATEGORIES, ICategory } from 'mocks/product.mock';
import style from './CategoryButton.module.scss'

export interface CategoryButtonProps {
    category: ICategory
    selectCategory: (category: ICategory) => void
}
const CategoryButton = (props: CategoryButtonProps) => {
    const {category} = props;
    const {selectCategory} = props;
    const getCategory = () => {
        selectCategory(category);
        CATEGORIES.map(c => c.isSelected = false);
        category.isSelected = !category.isSelected;
    }
    return(
        <button className={`${style.categoryBtn} ${category.isSelected && style.active}`} onClick={() => getCategory()}>
            {category.name}
        </button>
    )
}

export default CategoryButton