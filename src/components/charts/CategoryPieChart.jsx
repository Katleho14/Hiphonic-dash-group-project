import { ResponsivePie } from "@nivo/pie";

const CategoryPieChart = () => {
  const data = [
    { id: "Electronics", value: 35 },
    { id: "Clothing", value: 25 },
    { id: "Food", value: 20 },
    { id: "Books", value: 15 },
    { id: "Other", value: 5 }
  ];

  return (
    <div className="h-[300px]">
      <ResponsivePie
        data={data}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        colors={{ scheme: "nivo" }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#333333"
        arcLabelsSkipAngle={10}
        arcLabelsTextColor="#ffffff"
      />
    </div>
  );
};

export default CategoryPieChart;