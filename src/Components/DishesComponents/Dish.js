const Dish =({dish})=>{
    return(
        <div>
            <img src={`${dish.img}.jpg`}/>
            <h2>{dish.name}</h2>
            <p>${dish.price}</p>
            {/*to fix later*/}
            <button>How many portions?</button>
            <button>Add to cart</button>


        </div>
    )
}
export default Dish