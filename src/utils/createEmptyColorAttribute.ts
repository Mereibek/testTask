import { Color } from "@/types";
import { attributeId } from "@/values/symbols";
import { nanoid } from "nanoid";

export default function createEmptyColorAttribute (): Color {
    return {
        code: '',
        name: '',
        color: '',
        [attributeId]: nanoid(4)
    }
}
