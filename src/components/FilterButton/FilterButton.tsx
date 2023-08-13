import { ISubCategory } from 'mocks/product.mock'
import style from './FilterButton.module.scss'

interface FilterButtonProps {
    subCategory: ISubCategory
}
const FilterButton = (props: FilterButtonProps) => {
    const {subCategory} = props;
    return(
        <button className={style.filterButton}>
            <img src={subCategory.image.src} alt={subCategory.image.alt} />
            <span>{subCategory.name}</span>
        </button>
    )
}

export default FilterButton