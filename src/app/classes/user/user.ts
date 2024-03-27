import { Role } from "../role/role";
import {KnightRadiant} from "../knight-radiant/knight-radiant";

export class User {
    id: number;
    userName: string;
    userPassword: string;
    role: Role;
    knightRadiant: KnightRadiant;

    constructor(id: number, userName: string, userPassword: string, role: Role, knightRadiant: KnightRadiant) {
        this.id = id;
        this.userName = userName;
        this.userPassword = userPassword;
        this.role = role;
        this.knightRadiant = knightRadiant;
    }
}
