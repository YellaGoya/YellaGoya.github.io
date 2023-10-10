import RecentSix from "components/content/main/RecentSix";
import LatestProject from "components/content/main/LatestProject";

const Main = ({ data }) => {
  return (
    <div>
      <RecentSix data={data} />
      <LatestProject />
    </div>
  );
};

export default Main;
