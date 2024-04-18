import { Product } from "@/types";
import { Ref } from "vue";
import { createEmptyColorAttribute, createEmptySizeAttribute, createEmptyWeightAttribute } from "@/utils";

export default function addNewAttributeProperty (selectedItem: Ref<Product | null>, value: string | null) {
    switch (value) {
        case 'color': {
            selectedItem.value?.attributes.push(createEmptyColorAttribute());
            break;
        }
        case 'size': {
            selectedItem.value?.attributes.push(createEmptySizeAttribute());
            break;
        }
        case 'weight': {
            selectedItem.value?.attributes.push(createEmptyWeightAttribute());
            break;
        }
    }
}
