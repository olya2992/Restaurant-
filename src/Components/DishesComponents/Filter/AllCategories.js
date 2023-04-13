import Filter from "./Filter"
const AllCategories = () =>{
    return(
        <div className="app" >
           <h1>What kind of food do you like?</h1>

           {['SEAFOOD', 'ITALIAN', 'APPETTIZERS','SALADS', 'ALL', ].map(category => <Filter category ={category}/> 
           )}
          
        </div>
    )
}
export default AllCategories