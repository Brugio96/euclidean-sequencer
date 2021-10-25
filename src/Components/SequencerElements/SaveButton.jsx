

const SaveButton = ({ currentUnitList, userList, setUserList, tempo }) => {
  const saveUnitList = async () => {
    const request = { unitList: currentUnitList, tempo: tempo };
    

    if (!userList) {
      setUserList(request);
    } else setUserList([...userList, request]);
  };

  return (
    <div className="save-cont">
      <button
        id="saveButton"
        className="save-button"
        onClick={saveUnitList}
      ></button>
    </div>
  );
};

export default SaveButton;
