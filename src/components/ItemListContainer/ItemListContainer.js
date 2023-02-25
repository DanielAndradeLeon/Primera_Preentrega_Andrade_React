import '../ItemListContainer/ItemListContainer.css'

const ItemListContainer = ({greeting}) => {
    return(
        <div>
            <h2 className="titleItemList">Item List Container</h2>
            <div className="greeting">
                {greeting}
            </div>
        </div>
    )
}
export default ItemListContainer