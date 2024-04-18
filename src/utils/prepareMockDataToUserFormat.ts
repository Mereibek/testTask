import mockData from "@/components/mockData";
import { attributeId } from "@/values/symbols";
import { nanoid } from "nanoid";
import { Product } from "@/types";

// Добавление нового поля в аттрибуты для идентификации полей без применения порядкового индекса
function augmentAttributesWithId(attributes: Product['attributes']) {
    return attributes.map(attribute => ({
        ...attribute,
        [attributeId]: nanoid(4)
    }))
}

export default function prepareMockDataToUserFormat() : Product[] {
    return mockData.map(data => ({
        ...data,
        attributes: augmentAttributesWithId(data.attributes)
    }))
}
