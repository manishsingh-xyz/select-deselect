export interface List {
    Available: listdata[];
    Current: listdata[];
}

export interface listdata {
    value: string;
    required: boolean;
}