import * as React from "react";

const Tracklist = () => {
    const [checkedVictoria, setCheckedVictoria] = React.useState(false);
    const [checkedJubilee, setCheckedJubilee] = React.useState(false);
    const [checkedCentral, setCheckedCentral] = React.useState(false);
    const [checkedMetropolitan, setCheckedMetropolitan] = React.useState(false);
    const [checkedNorthern, setCheckedNorthern] = React.useState(false);
    const [checkedBakerloo, setCheckedBakerloo] = React.useState(false);
    const [checkedPiccadilly, setCheckedPiccadilly] = React.useState(false);
    const [checkedDistrict, setCheckedDistrict] = React.useState(false);

    const handleChangeVictoria = () => {
      setCheckedVictoria(!checkedVictoria);
    };

    const handleChangeJubilee = () => {
        setCheckedJubilee(!checkedJubilee);
    };

    const handleChangeCentral = () => {
        setCheckedCentral(!checkedCentral);
      };
  
    const handleChangeMetropolitan = () => {
        setCheckedMetropolitan(!checkedMetropolitan);
    };

    const handleChangeNorthern = () => {
    setCheckedNorthern(!checkedNorthern);
    };

    const handleChangeBakerloo = () => {
        setCheckedBakerloo(!checkedBakerloo);
    };

    const handleChangePiccadilly = () => {
    setCheckedPiccadilly(!checkedPiccadilly);
    };

    const handleChangeDistrict = () => {
        setCheckedDistrict(!checkedDistrict);
    };
  
    return (
      <div>
        <Checkbox
          label="Victoria" value={checkedVictoria} onChange={handleChangeVictoria}
        />
        <Checkbox
          label="Jubilee" value={checkedVictoria} onChange={handleChangeJubilee}
        />
        <Checkbox
          label="Central" value={checkedCentral} onChange={handleChangeCentral}
        />
        <Checkbox
          label="Metropolitan" value={checkedMetropolitan} onChange={handleChangeMetropolitan}
        />
        <Checkbox
          label="Northern" value={checkedNorthern} onChange={handleChangeNorthern}
        />
        <Checkbox
          label="Bakerloo" value={checkedBakerloo} onChange={handleChangeBakerloo}
        />
        <Checkbox
          label="Piccadilly" value={checkedPiccadilly} onChange={handleChangePiccadilly}
        />
        <Checkbox
          label="District" value={checkedDistrict} onChange={handleChangeDistrict}
        />
      </div>
    );
  };
  
  const Checkbox = ({ label, checked, onChange }) => {
    return (
      <label>
        <input type="checkbox" checked={checked} onChange={onChange} />
        {label}
        {checked && <span> ✓</span>}
      </label>
    );
  };

export default Tracklist;