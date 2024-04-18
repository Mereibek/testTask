import { Product, ProductNumberBasedChanges } from "@/types";
import { attributeId } from "@/values/symbols";
import { Ref } from "vue";
import { isWeightAttribute } from "@/utils";

export default function handleProductWeightChange (selectedItem: Ref<Product | null>, value: ProductNumberBasedChanges) {
    const attribute = selectedItem.value?.attributes.find((attribute) => attribute[attributeId] === value.id)

    if (attribute && isWeightAttribute(attribute)) {
        attribute.weight = value.newValue
    }
}
