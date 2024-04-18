import { Product, ProductNumberBasedChanges } from "@/types";
import { attributeId } from "@/values/symbols";
import { Ref } from "vue";
import { isSizeAttribute } from "@/utils";

export default function handleProductWidthChange (selectedItem: Ref<Product | null>, value: ProductNumberBasedChanges) {
    const attribute = selectedItem.value?.attributes.find((attribute) => attribute[attributeId] === value.id)

    if (attribute && isSizeAttribute(attribute)) {
        attribute.size.width = value.newValue
    }
}
