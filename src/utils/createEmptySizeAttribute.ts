import { Size } from "@/types";
import { attributeId } from "@/values/symbols";
import { nanoid } from "nanoid";

export default function createEmptySizeAttribute () : Size {
    return {
        code: '',
        name: '',
        size: {
            height: 0,
            width: 0
        },
        [attributeId]: nanoid(4)
}}
