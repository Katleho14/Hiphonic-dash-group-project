import { ResponsiveLine } from "@nivo/line";

const SalesChart = ({ data }) => (
  <div className="h-[300px]">
    <ResponsiveLine
      data={[
        {
          id: "sales",
          data: data.map(d => ({ x: d.name, y: d.value }))
        }
      ]}
      margin={{ top: 20, right: 20, bottom: 50, left: 60 }}
      xScale={{ type: "point" }}
      yScale={{ type: "linear", min: "auto", max: "auto" }}
      curve="cardinal"
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0
      }}
      pointSize={8}
      pointColor="#ffffff"
      pointBorderWidth={2}
      pointBorderColor="#1EAEDB"
      colors={["#1EAEDB"]}
      enableArea={true}
      areaOpacity={0.1}
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

export default SalesChart;