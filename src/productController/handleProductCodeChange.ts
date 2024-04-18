import { Product, ProductStringBasedChanges } from "@/types";
import { attributeId } from "@/values/symbols";
import { Ref } from "vue";

export default function handleProductCodeChange (selectedItem: Ref<Product | null>, value: ProductStringBasedChanges) {
    const attribute = selectedItem.value?.attributes.find((attribute) => attribute[attributeId] === value.id)
    if (attribute) {
        attribute.code = value.newValue
    }
}
