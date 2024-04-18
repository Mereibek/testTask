import { Product, ProductStringBasedChanges } from "@/types";
import { attributeId } from "@/values/symbols";
import { Ref } from "vue";
import { isColorAttribute } from "@/utils";

export default function handleProductColorChange (selectedItem: Ref<Product | null>, value: ProductStringBasedChanges) {
    const attribute = selectedItem.value?.attributes.find((attribute) => attribute[attributeId] === value.id)

    if (attribute && isColorAttribute(attribute)) {
        attribute.color = value.newValue
    }
}
