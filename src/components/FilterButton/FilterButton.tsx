import { CATEGORIES, ISubCategory } from 'mocks/product.mock'
import style from './FilterButton.module.scss'

interface FilterButtonProps {
    subCategory: ISubCategory;
    selectSubCategory: (subCategory: ISubCategory) => void;
}
const FilterButton = (props: FilterButtonProps) => {
    const {subCategory} = props;
    const {selectSubCategory} = props;
    const getSubCategory = () => {
        selectSubCategory(subCategory);
        CATEGORIES.map(c => c.subCategories.map(sc => sc.isSelected = false));
        subCategory.isSelected = !subCategory.isSelected;
    }
    return(
        <button className={`${style.filterButton}`} onClick={() => {getSubCategory()}}>
            <img src={subCategory.image.src} alt={subCategory.image.alt} />
            <span className={`${subCategory.isSelected && style.active}`}>{subCategory.name}</span>
        </button>
    )
}

export default FilterButton