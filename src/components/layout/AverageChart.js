import React from "react";
import AverageScores from "../data/AverageScores";
import { Bar, Line } from "react-chartjs-2";

class GraphJS extends React.Component {
  constructor(props) {
    super(props);

    let labels = AverageScores().map((item) => item.opdracht);
    const filterOpdrachten = Array.from(new Set(labels));

    let leukData = AverageScores().map((item) => item.leuk);
    const filterLeukScores = leukData.slice(0, 56); //Ik kreeg eerst een array van 560 items, dus moest dit toepassen om de goede set data te krijgen...

    let moeilijkData = AverageScores().map((item) => item.moeilijk);
    const filterMoeilijkScores = moeilijkData.slice(0, 56); //Ik kreeg eerst een array van 560 items, dus moest dit toepassen om de goede set data te krijgen...

    this.state = {
      chartData: {
        labels: filterOpdrachten,
        datasets: [
          {
            label: "Leuk",
            data: filterLeukScores,
            backgroundColor: "#73C2FB",
            borderColor: "#73C2FB",
            fill: false,
          },
          {
            label: "Moeilijkheid",
            data: filterMoeilijkScores,
            backgroundColor: "#0E4C92",
            borderColor: "#0E4C92",
            fill: false,
          },
        ],
      },
    };
  }
  render() {
    return (
      <div style={{ padding: "30px" }}>
        <p>
          Hier kun je een overzicht vinden van de gemiddelde score van alle
          opdrachten, zoals beoordeeld door de studenten van klas 1985. Om de
          scores van iedere student individueel te kunnen bekijken kun je op een
          van bovenstaande knoppen klikken. <br />
          <b>Nota: </b>Voor de lijngrafiek van dezelfde data scroll je naar
          beneden!
        </p>

        <div
          id="barChart"
          style={{
            display: "block",
          }}
        >
          <Bar
            data={this.state.chartData}
            options={{
              title: {
                display: true,
                text: "Overzicht van gemiddelde scores",
                fontSize: 25,
                maintainAspectRatio: true,
              },
              scales: {
                yAxes: [
                  {
                    ticks: {
                      beginAtZero: true,
                    },
                    scaleLabel: {
                      display: true,
                      labelString: "Score",
                      fontSize: 15,
                    },
                  },
                ],
                xAxes: [
                  {
                    scaleLabel: {
                      display: true,
                      labelString: "Opdracht",
                      fontSize: 15,
                    },
                  },
                ],
              },
            }}
          />
        </div>
        <br />
        <hr />
        <br />
        <div>
          <Line
            data={this.state.chartData}
            options={{
              title: {
                display: true,
                text: "Overzicht van gemiddelde scores",
                fontSize: 25,
                maintainAspectRatio: true,
              },
              scales: {
                yAxes: [
                  {
                    ticks: {
                      beginAtZero: true,
                    },
                    scaleLabel: {
                      display: true,
                      labelString: "Score",
                      fontSize: 15,
                    },
                  },
                ],
                xAxes: [
                  {
                    scaleLabel: {
                      display: true,
                      labelString: "Opdracht",
                      fontSize: 15,
                    },
                  },
                ],
              },
            }}
          />
        </div>
      </div>
    );
  }
}

export default GraphJS;
