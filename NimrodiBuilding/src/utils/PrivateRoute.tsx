import { ReactNode, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { RootState } from "../store/store";
import useIsVerified  from "./VerifyActivity";
import useBuildingData from "./BuildingDataProvider";

interface IPrivateRoute {
  component: ReactNode;
}

const PrivateRoute = ({ component }: IPrivateRoute) => {
  const { floor } = useParams();
  const { currentRole } = useSelector((state: RootState) => state.rolereducer);
  const { getListOfActivities, getFloorByIndex } = useBuildingData();
  const activity = getFloorByIndex(Number(floor))!;
  const { isRoleAboveActivity } = useIsVerified({
    activity:activity.activity ,
    role:currentRole,
    activities:getListOfActivities()}
  );
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { floors } = useSelector((state: RootState) => state.floorreducer);

  const navigate = useNavigate();

  useEffect(() => {
    if (floors[Number(floor)] && isRoleAboveActivity()) {
      setIsAuthenticated(true);
    } else {
      navigate("/forbidden");
    }
  }, []);
  return <>{isAuthenticated ? <>{component}</> : null}</>;
};

export default PrivateRoute;
