import {Ideal} from "../ideal/ideal";
import {RadiantOrder} from "../radiant-order/radiant-order";

export class KnightRadiant {
  id: number;
  ideal: Ideal;
  currentMissionId: number;
  missionsCompleted: number;
  radiantOrder?: RadiantOrder;
  constructor(id: number, ideal: Ideal, currentMissionId: number, missionsCompleted: number, radiantOrder: RadiantOrder){
    this.id = id;
    this.ideal = ideal;
    this.currentMissionId = currentMissionId;
    this.missionsCompleted = missionsCompleted;
    this.radiantOrder = radiantOrder;
  }
}
