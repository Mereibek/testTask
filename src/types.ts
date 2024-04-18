import { attributeId } from "@/values/symbols";

export type ProductStringBasedChanges = {
    newValue: string,
    id: string | undefined
}

export type ProductNumberBasedChanges = {
    newValue: number,
    id: string | undefined
}

export interface Product {
    id: number;
    name: string;
    attributes: (Color | Size | Weight)[];
}

// Возможно выделить новые типы UserColor, UserWeight, and UserSize (при необходимости)
export interface Color {
    code: string;
    name: string;
    color: string;
    [attributeId]?: string;
}

export interface Size {
    code: string;
    name: string;
    size: {
        width: number;
        height: number;
    }
    [attributeId]?: string;
}

export interface Weight {
    code: string;
    name: string;
    weight: number
    [attributeId]?: string;
}
