import { ResponsiveBar } from "@nivo/bar";

const VisitorsBarChart = () => {
  const data = [
    { day: "Mon", visitors: 120 },
    { day: "Tue", visitors: 160 },
    { day: "Wed", visitors: 180 },
    { day: "Thu", visitors: 140 },
    { day: "Fri", visitors: 200 },
    { day: "Sat", visitors: 220 },
    { day: "Sun", visitors: 190 }
  ];

  return (
    <div className="h-[300px]">
      <ResponsiveBar
        data={data}
        keys={["visitors"]}
        indexBy="day"
        margin={{ top: 20, right: 20, bottom: 50, left: 60 }}
        padding={0.3}
        valueScale={{ type: "linear" }}
        colors={["#33C3F0"]}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        role="application"
        theme={{
          axis: {
            ticks: {
              text: {
                fill: "#8A898C"
              }
            }
          },
          grid: {
            line: {
              stroke: "#F1F0FB",
              strokeWidth: 1
            }
          }
        }}
      />
    </div>
  );
};

export default VisitorsBarChart;