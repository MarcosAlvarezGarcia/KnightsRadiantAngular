import { Ideal } from "../ideal/ideal";

export class Surge {
    id: number;
    name: string;
    description: string;
    ideal: number;
    constructor(id: number, name: string, description: string, ideal: number) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.ideal = ideal;
    }
}
