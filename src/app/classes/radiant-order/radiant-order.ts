import { Surge } from "../surge/surge";

export class RadiantOrder {
    id: number;
    name: string;
    herald: string;
    archetype: string;
    gemstone: string;
    sprenType: string;
    attributes: string;
    color: String;
    oathTheme: string;
    description: string;
    surges: Surge[];
    constructor(id: number, name: string, herald: string, archetype: string, gemstone: string, sprenType: string, attributes: string, color: string, oathTheme: string, description: string, surges: Surge[]) {
        this.id = id;
        this.name = name;
        this.herald = herald;
        this.archetype = archetype;
        this.gemstone = gemstone;
        this.sprenType = sprenType;
        this.attributes = attributes;
        this.color = color;
        this.oathTheme = oathTheme;
        this.description = description;
        this.surges = surges;
    }
}
