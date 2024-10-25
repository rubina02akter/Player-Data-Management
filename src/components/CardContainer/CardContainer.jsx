import AllPlayers from "../AllPlayers/AllPlayers";
import SelectedPlayers from "../SelectedPlayers/SelectedPlayers";
import "./CardContainer.css";
const CardContainer = ({ handleIsActive, isActive, handleSelectPlayer, selectedPlayers,handleDeletePlayer}) => {
  return (
    <div>
      <div className="mt-12  mx-12">
        <div className="flex justify-between">
          <h2 className="font-bold text-2xl">Available Players</h2>
          <div className="flex">
            <button
              onClick={() => {
                handleIsActive("available");
              }}
              className={`${
                isActive.cart ? "btn rounded-none active " : "btn rounded-none"
              }`}
            >
              Available
            </button>
            <button
              onClick={() => {
                handleIsActive("selected");
              }}
              className={`${
                isActive.cart ? "btn rounded-none " : "btn active rounded-none"
              }`}
            >
             Selected ({selectedPlayers.length})
            </button>
          </div>
        </div>
      </div>
      {isActive.cart ? (
        <AllPlayers handleSelectPlayer={handleSelectPlayer}></AllPlayers>
      ) : (
        <SelectedPlayers handleIsActive={handleIsActive} selectedPlayers={selectedPlayers} handleDeletePlayer={handleDeletePlayer}></SelectedPlayers>
      )}
    </div>
  );
};

export default CardContainer;
