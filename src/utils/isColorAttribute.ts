import { Color, Size, Weight } from "@/types";

export default function isColorAttribute (attribute: Color | Size | Weight) : attribute is Color {
    return 'color' in attribute
}
