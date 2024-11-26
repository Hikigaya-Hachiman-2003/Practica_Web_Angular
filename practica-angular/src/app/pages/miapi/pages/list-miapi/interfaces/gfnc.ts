// datos de manera general
export interface GfncAll {
    gfnc: GfncElement[];
}

export interface GfncElement {
    _id: string;
    Imagen: string;
    Nombre: string;
    Clase: string;
    Rareza: string;
    Stats_max: StatsM;
    Stats_min: StatsM;
    Skills: Skill[];
}

export interface Skill {
    Nombre: string;
    Descripcion: string;
    _id?: string;
}

export interface StatsM {
    HP: string;
    ATK: string;
    ATK_Speed: string;
    Power: string;
    DEF: string;
    DEF_Penetration: string;
    Crit_Rate: string;
    Crit_Damage: string;
    After_Battle_Recovery: string;
    _id?: string;
}

// datos de manera Individual
export interface Gfnc {
    ejemplo: Ejemplo;
}

export interface Ejemplo {
    Imagen: string;
    Nombre: string;
    Clase: string;
    Rareza: string;
    Stats_max: StatsM;
    Stats_min: StatsM;
    Skills: Skill[];
}

export interface StatsM {
    HP: string;
    ATK: string;
    ATK_Speed: string;
    Power: string;
    DEF: string;
    DEF_Penetration: string;
    Crit_Rate: string;
    Crit_Damage: string;
    After_Battle_Recovery: string;
}

export interface Skill {
    Nombre: string;
    Descripcion: string;
    _id?: string;
}
