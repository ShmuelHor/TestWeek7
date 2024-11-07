import { useState, useEffect } from 'react';

interface Floor {
  name: string;
  soldiers: number;
  purpose: string;
  description: string;
  activity:string
}

const useBuildingData = () => {
  const [buildingData, setBuildingData] = useState<Floor[]>([]);
  useEffect(()=>{
   const ImportBuildingData = async() =>{
    const DataFromJSON:Floor[] = await import("../data/building.json") ;
    setBuildingData(DataFromJSON);
   }
   ImportBuildingData()
  },[])
  //FILL HERE LOGIC TO SET THE BUILDING DATA


  const getFloorByIndex = (floorIndex:number): Floor =>
  {

    return buildingData[floorIndex];
  }
  const getListOfActivities = ():string[]=>{
    return buildingData.map((p)=>(p.activity))
  }
  return {
    buildingData,
    getFloorByIndex,
    getListOfActivities
  };
};

export default useBuildingData;
