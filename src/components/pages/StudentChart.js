import React from "react";
import studentData from "../data/studentData";
import { useParams } from "react-router-dom";
import { Bar } from "react-chartjs-2";

const StudentChart = () => {
  const { naam } = useParams();

  const StudentChartData = studentData.filter((object) => object.naam === naam);

  let labels = StudentChartData.map((item) => item.opdracht);

  let leukData = StudentChartData.map((item) => item.leuk);

  let moeilijkData = StudentChartData.map((item) => item.moeilijk);

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: "Leuk",
        data: leukData,
        backgroundColor: "#73C2FB",
        borderColor: "#73C2FB",
        fill: false,
      },
      {
        label: "Moeilijkheid",
        data: moeilijkData,
        backgroundColor: "#0E4C92",
        borderColor: "#0E4C92",
        fill: false,
      },
    ],
  };

  return (
    <div style={{ padding: "30px" }}>
      <Bar
        data={chartData}
        options={{
          title: {
            display: true,
            text: `Overzicht van ${naam}'s reviews`,
            fontSize: 25,
            maintainAspectRatio: true,
          },
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                  max: 5,
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
  );
};

export default StudentChart;
