import { Color, Size, Weight } from "@/types";

export default function isSizeAttribute (attribute: Color | Size | Weight) : attribute is Size {
    return 'size' in attribute
}
