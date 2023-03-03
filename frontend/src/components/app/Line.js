import React, { Component } from "react";
import "./Line.css";

function Line(props) {
  const { data } = props;

  if (!data) {
    return <div>Here comes the trains! CHOO CHOO!</div>;
  }
  

  const stationWalthamstow = data.map((station) => {
    if (station.stationName === "Walthamstow Central Underground Station") {
      setTimeout(() => {
        document.querySelector(".circle").remove();
      }, 5000);

      return (
        <>
          <div key={station.id}>
            <div className="circle"></div>
          </div>
        </>
      );
    } else {
      return null;
    }
  });

  const stationBlackhorse = data.map((station) => {
    if (station.stationName === "Blackhorse Road Underground Station") {
      setTimeout(() => {
        document.querySelector(".circle").remove();
      }, 5000);

      return (
        <>
          <div key={station.id}>
            <div className="circle"></div>
          </div>
        </>
      );
    } else {
      return null;
    }
  });

  const stationTottenham = data.map((station) => {
    if (station.stationName === "Tottenham Hale Underground Station") {
      setTimeout(() => {
        document.querySelector(".circle").remove();
      }, 5000);

      return (
        <>
          <div key={station.id}>
            <div className="circle"></div>
          </div>
        </>
      );
    } else {
      return null;
    }
  });

  const stationSevenSisters = data.map((station) => {
    if (station.stationName === "Seven Sisters Underground Station") {
      setTimeout(() => {
        document.querySelector(".circle").remove();
      }, 5000);

      return (
        <>
          <div key={station.id}>
            <div className="circle"></div>
          </div>
        </>
      );
    } else {
      return null;
    }
  });

  const stationFinsbury = data.map((station) => {
    if (station.stationName === "Finsbury Park Underground Station") {
      setTimeout(() => {
        document.querySelector(".circle").remove();
      }, 5000);

      return (
        <>
          <div key={station.id}>
            <div className="circle"></div>
          </div>
        </>
      );
    } else {
      return null;
    }
  });

  const stationHighbury = data.map((station) => {
    if (station.stationName === "Highbury & Islington Underground Station") {
      setTimeout(() => {
        document.querySelector(".circle").remove();
      }, 5000);

      return (
        <>
          <div key={station.id}>
            <div className="circle"></div>
          </div>
        </>
      );
    } else {
      return null;
    }
  });

  const stationKingsCross = data.map((station) => {
    if (
      station.stationName === "King's Cross St. Pancras Underground Station"
    ) {
      setTimeout(() => {
        document.querySelector(".circle").remove();
      }, 5000);

      return (
        <>
          <div key={station.id}>
            <div className="circle"></div>
          </div>
        </>
      );
    } else {
      return null;
    }
  });

  const stationEuston = data.map((station) => {
    if (station.stationName === "Euston Underground Station") {
      setTimeout(() => {
        document.querySelector(".circle").remove();
      }, 5000);

      return (
        <>
          <div key={station.id}>
            <div className="circle"></div>
          </div>
        </>
      );
    } else {
      return null;
    }
  });

  const stationWarren = data.map((station) => {
    if (station.stationName === "Warren Street Underground Station") {
      setTimeout(() => {
        document.querySelector(".circle").remove();
      }, 5000);

      return (
        <>
          <div key={station.id}>
            <div className="circle"></div>
          </div>
        </>
      );
    } else {
      return null;
    }
  });

  const stationOxford = data.map((station) => {
    if (station.stationName === "Oxford Circus Underground Station") {
      setTimeout(() => {
        document.querySelector(".circle").remove();
      }, 5000);

      return (
        <>
          <div key={station.id}>
            <div className="circle"></div>
          </div>
        </>
      );
    } else {
      return null;
    }
  });

  const stationGreen = data.map((station) => {
    if (station.stationName === "Green Park Underground Station") {
      setTimeout(() => {
        document.querySelector(".circle").remove();
      }, 5000);

      return (
        <>
          <div key={station.id}>
            <div className="circle"></div>
          </div>
        </>
      );
    } else {
      return null;
    }
  });

  const stationVictoria = data.map((station) => {
    if (station.stationName === "Green Park Underground Station") {
      setTimeout(() => {
        document.querySelector(".circle").remove();
      }, 5000);

      return (
        <>
          <div key={station.id}>
            <div className="circle"></div>
          </div>
        </>
      );
    } else {
      return null;
    }
  });

  const stationPimlico = data.map((station) => {
    if (station.stationName === "Pimlico Underground Station") {
      setTimeout(() => {
        document.querySelector(".circle").remove();
      }, 5000);

      return (
        <>
          <div key={station.id}>
            <div className="circle"></div>
          </div>
        </>
      );
    } else {
      return null;
    }
  });

  const stationVauxhall = data.map((station) => {
    if (station.stationName === "Vauxhall Underground Station") {
      setTimeout(() => {
        document.querySelector(".circle").remove();
      }, 5000);

      return (
        <>
          <div key={station.id}>
            <div className="circle"></div>
          </div>
        </>
      );
    } else {
      return null;
    }
  });

  const stationStockwell = data.map((station) => {
    if (station.stationName === "Stockwell Underground Station") {
      setTimeout(() => {
        document.querySelector(".circle").remove();
      }, 5000);

      return (
        <>
          <div key={station.id}>
            <div className="circle"></div>
          </div>
        </>
      );
    } else {
      return null;
    }
  });

  const stationBrixton = data.map((station) => {
    if (station.stationName === "Brixton Underground Station") {
      setTimeout(() => {
        document.querySelector(".circle").remove();
      }, 5000);

      return (
        <>
          <div key={station.id}>
            <div className="circle"></div>
          </div>
        </>
      );
    } else {
      return null;
    }
  });

  return (
    <div className="h_line">
<div class="table">
  <div class="row header"> 
  <div class="cell">Walthamstow Central</div>
    <div class="cell">Blackhorse Road</div>
    <div class="cell">Tottenham Hale</div>
    <div class="cell">Seven Sisters</div>
    <div class="cell">Finsbury Park</div>
    <div class="cell">Highbury & Islington</div>
    <div class="cell">King's Cross</div>
    <div class="cell">Euston</div>
    <div class="cell">Warren Street</div>
    <div class="cell">Oxford Circus</div>
    <div class="cell">Green Park</div>
    <div class="cell">Victoria</div>
    <div class="cell">Pimlico</div>
    <div class="cell">Vauxhall</div>
    <div class="cell">Stockwell</div>
    <div class="cell">Brixton</div>
    </div>
  <div class="row">
   <div class="cell">{stationWalthamstow}</div>
    <div class="cell">{stationBlackhorse}</div>
    <div class="cell">{stationTottenham}</div>
    <div class="cell">{stationSevenSisters}</div>
    <div class="cell">{stationFinsbury}</div>
    <div class="cell">{stationHighbury}</div>
    <div class="cell">{stationKingsCross}</div>
    <div class="cell">{stationEuston}</div>
    <div class="cell">{stationWarren}</div>
    <div class="cell">{stationOxford}</div>
    <div class="cell">{stationGreen}</div>
    <div class="cell">{stationVictoria}</div>
    <div class="cell">{stationPimlico}</div>
    <div class="cell">{stationVauxhall}</div>
    <div class="cell">{stationStockwell}</div>
    <div class="cell">{stationBrixton}</div>
  </div>
</div>
</div>

  );
}

export default Line;