import {Ideal} from "../ideal/ideal";
import {RadiantOrder} from "../radiant-order/radiant-order";

export class KnightRadiant {
  id: number;
  ideal: number;
  firstIdeal: string;
  secondIdeal: string;
  thirdIdeal: string;
  fourthIdeal: string;
  fifthIdeal: string;
  currentMissionId: number;
  missionsCompleted: number;
  radiantOrder?: RadiantOrder;
  constructor(id: number, ideal: number, firstIdeal: string, secondIdeal: string, thirdIdeal: string, fourthIdeal: string, fifthIdeal: string, currentMissionId: number, missionsCompleted: number, radiantOrder: RadiantOrder){
    this.id = id;
    this.ideal = ideal;
    this.firstIdeal = firstIdeal;
    this.secondIdeal = secondIdeal;
    this.thirdIdeal = thirdIdeal;
    this.fourthIdeal = fourthIdeal;
    this.fifthIdeal = fifthIdeal;
    this.currentMissionId = currentMissionId;
    this.missionsCompleted = missionsCompleted;
    this.radiantOrder = radiantOrder;
  }
}
