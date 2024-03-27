import { Surge } from "../surge/surge";

export class RadiantOrder {
    id: number;
    name: string;
    sprenType: string;
    description: string;
    attributes: string;
    surges: Surge[];
    constructor(id: number, name: string, sprenType: string, description: string, attributes: string, surges: Surge[]) {
        this.id = id;
        this.name = name;
        this.sprenType = sprenType;
        this.description = description;
        this.attributes = attributes;
        this.surges = surges;
    }
}
