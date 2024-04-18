import { Color, Size, Weight } from "@/types";

export default function isWeightAttribute (attribute: Color | Size | Weight) : attribute is Weight {
    return 'weight' in attribute
}
