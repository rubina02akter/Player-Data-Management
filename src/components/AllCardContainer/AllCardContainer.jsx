import './AllCardContainer.css'
const AllCardContainer = ({handleIsActive,isActive}) => {
  return (
    <div className="mt-12">
      <div className="flex justify-between">
        <h2 className="font-bold text-2xl">Available Players</h2>
        <div className="flex">
          <button
          onClick={()=>{handleIsActive("available")}}
           className={`${isActive.cart?"btn rounded-none active":"btn rounded-none"}`}>Available</button>
          <button
          onClick={()=>{handleIsActive("selected")}}
          className={`${isActive.cart?"btn rounded-none ":"btn active rounded-none"}`}>Selected (0)</button>
        </div>
      </div>
    </div>
  );
};

export default AllCardContainer;