import { Role } from "../role/role";
import {KnightRadiant} from "../knight-radiant/knight-radiant";

export class User {
    id: number;
    name: string;
    email: string;
    userPassword: string;
    role: Role;
    knightRadiant: KnightRadiant;

    constructor(id: number, name: string, email: string, userPassword: string, role: Role, knightRadiant: KnightRadiant) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.userPassword = userPassword;
        this.role = role;
        this.knightRadiant = knightRadiant;
    }
}
