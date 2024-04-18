import { Weight } from "@/types";
import { attributeId } from "@/values/symbols";
import { nanoid } from "nanoid";

export default function createEmptyWeightAttribute () : Weight {
    return {
        code: '',
        name: '',
        weight: 0,
        [attributeId]: nanoid(4)
    }}
