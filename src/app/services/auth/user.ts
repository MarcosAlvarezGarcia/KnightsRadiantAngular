import {Role} from "../../classes/role/role";
import {KnightRadiant} from "../../classes/knight-radiant/knight-radiant";

export interface User {
  id:number;
  email:string;
  role:Role;
  knightRadiant:KnightRadiant;
}
