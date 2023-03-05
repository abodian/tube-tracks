function TrackList({ handleCheckboxChange, checkedLines }) {
  return (
    <div>

      <div>
      <input
          type="checkbox"
          id="victoria-checkbox"
          name="victoria"
          checked={checkedLines.victoria}
          onChange={handleCheckboxChange}
        />
        <label for="victoria-checkbox">Victoria</label>
      </div>

      <div>
        <input 
          type="checkbox" 
          id="jubilee-checkbox" 
          name="jubilee" 
          checked={checkedLines.jubilee}
          onChange={handleCheckboxChange} 
        />
        <label for="jubilee-checkbox">Jubilee</label>
      </div>

      <div>
        <input 
          type="checkbox" 
          id="central-checkbox" 
          name="central" 
          checked={checkedLines.central}
          onChange={handleCheckboxChange} />
        <label for="central-checkbox">Central</label>
      </div>

      <div>
        <input           
          type="checkbox" 
          id="metropolitan-checkbox" 
          name="metropolitan" 
          checked={checkedLines.metropolitan}
          onChange={handleCheckboxChange} />
        <label for="metropolitan-checkbox">Metropolitan</label>
      </div>

      <div>
        <input           
          type="checkbox" 
          id="northern-checkbox" 
          name="northern" 
          checked={checkedLines.northern}
          onChange={handleCheckboxChange} />
        <label for="northern-checkbox">Northern</label>
      </div>

      <div>
        <input           
          type="checkbox" 
          id="bakerloo-checkbox" 
          name="bakerloo" 
          checked={checkedLines.bakerloo}
          onChange={handleCheckboxChange} />
        <label for="bakerloo-checkbox">Bakerloo</label>
      </div>

      <div>
        <input           
          type="checkbox" 
          id="piccadilly-checkbox" 
          name="piccadilly" 
          checked={checkedLines.piccadilly}
          onChange={handleCheckboxChange} />
        <label for="piccadilly-checkbox">Piccadilly</label>
      </div>

      <div>
        <input           
          type="checkbox" 
          id="district-checkbox" 
          name="district" 
          checked={checkedLines.district}
          onChange={handleCheckboxChange} />
        <label for="district-checkbox">District</label>
      </div>

    </div>
  );
}

export default TrackList;
