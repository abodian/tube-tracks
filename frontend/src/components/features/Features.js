function Features () {
  return (
    <div>
      <b>Ambience</b>
      <div>
        <br></br>
        <input type="checkbox" id="bg-one" className="feature-switch" checked></input>
        <label for="bg-one">Orchestron</label>
      </div>
      <div>
        <input id="bg-two" type="checkbox" className="feature-switch"></input>
        <label for="bg-two">Cosmic Waves</label>
      </div>
      <b>Instruments</b>
      <div>
        <br></br>
        <input id="piano" type="checkbox" className="feature-switch" checked></input>
        <label for="piano">Piano</label>
      </div>
      <div>
        <input id="pizzicato-strings" type="checkbox" className="feature-switch" checked></input>
        <label for="pizzicato-strings">Pizzicato Strings</label>
      </div>
      <div>
        <input id="marimba" type="checkbox" className="feature-switch" checked></input>
        <label for="marimba">Marimba</label>
      </div>
  </div>
  )
}

export default Features