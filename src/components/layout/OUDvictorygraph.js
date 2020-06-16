//Ik ben dit project begonnen met Victory voor de grafieken, maar kwam er gaandeweg achter dat ik het qua tijd niet ging redden...
//Ben daarom op maandagavond(!) overgestept naar Chart.js en dit werkte een stuk fijner!
//Zie hier de oude Victory graph, als ode aan mijn struggles hahah ;)

import React from "react";
import AverageScores from "../data/AverageScores";
import {
  VictoryBar,
  VictoryChart,
  VictoryAxis,
  VictoryTheme,
  VictoryLegend,
} from "victory";

class Graphic extends React.Component {
  render() {
    return (
      <div>
        <VictoryChart
          domainPadding={30}
          theme={VictoryTheme.material}
          height={250}
          width={600}
          style={{ parent: { maxWidth: "95%" } }}
        >
          <VictoryLegend
            x={30}
            y={10}
            orientation="horizontal"
            gutter={20}
            style={{ border: { stroke: "black" } }}
            colorScale={["green", "red"]}
            data={[{ name: "Hoe leuk?" }, { name: "Hoe moeilijk?" }]}
            fontSize="10"
          />
          <VictoryAxis
            label="Opdracht"
            style={{
              axisLabel: { padding: 30 },
              tickLabels: { angle: -90, fontSize: 6 },
            }}
            tickValues={AverageScores().opdracht}
          />
          <VictoryAxis
            dependentAxis
            label="Score"
            style={{
              axisLabel: { padding: 30 },
              tickLabels: { fontSize: 6 },
            }}
            tickValues={[1, 2, 3, 4]}
          />
          <VictoryBar
            name="leukBar"
            data={AverageScores()}
            barWidth={2}
            x="opdracht"
            y="leuk"
            alignment="start"
            style={{ data: { fill: "red" } }}
          />
          <VictoryBar
            name="moeilijkBar"
            data={AverageScores()}
            barWidth={2}
            x="opdracht"
            y="moeilijk"
            alignment="end"
            style={{ data: { fill: "green" } }}
          />
        </VictoryChart>
      </div>
    );
  }
}

export default Graphic;
