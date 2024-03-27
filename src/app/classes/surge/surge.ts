import { Ideal } from "../ideal/ideal";

export class Surge {
    id: number;
    name: string;
    description: string;
    ideal: Ideal;
    constructor(id: number, name: string, description: string, ideal: Ideal) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.ideal = ideal;
    }
}
