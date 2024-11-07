import roels from "../data/roles.json";

interface IuseActivityParams {
  activity: string;
  role: string;
  activities: string[];
}

const useIsVerified = ({ activity, role, activities }: IuseActivityParams) => {
  const isRoleAboveActivity  = ()=>{
    const indexActivity:number = activities.findIndex((a) =>a === activity)
    const indexRoel:number = roels.findIndex((r)=>r === role)
   return indexActivity <= indexRoel;
  }
  return {isRoleAboveActivity };
};

export default useIsVerified;
