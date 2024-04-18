<template>
	<div class="main">
		<item-list
        class="sidebar"
        :items="products"
        :selected-item="selectedItem"
        @select-product="setProduct"
    />
		<item-content
        v-if="selectedItem"
        :item="selectedItem"
        v-on="itemContentEvents"
    />
	</div>
</template>

<script setup lang="ts">
import ItemList from './components/ItemList.vue';
import ItemContent from './components/ItemContent.vue';
import { ref, Ref } from "vue";
import { Product, ProductNumberBasedChanges, ProductStringBasedChanges } from "@/types";
import { prepareMockDataToUserFormat } from "@/utils";
import {
  addNewAttributeProperty,
  handleProductCodeChange,
  handleProductColorChange,
  handleProductHeightChange,
  handleProductNameChange,
  handleProductWeightChange,
  handleProductWidthChange
} from "@/productController";


const products : Ref<Product[]> = ref(prepareMockDataToUserFormat());
const selectedItem : Ref<Product | null> = ref(null);

function setProduct (value: Product) {
  selectedItem.value = value
}

const itemContentEvents = {
  updateCode: (value : ProductStringBasedChanges) => handleProductCodeChange(selectedItem, value),
  updateName: (value: ProductStringBasedChanges) => handleProductNameChange(selectedItem, value),
  updateColor: (value: ProductStringBasedChanges) => handleProductColorChange(selectedItem, value),
  updateHeight: (value: ProductNumberBasedChanges) => handleProductHeightChange(selectedItem, value),
  updateWidth: (value: ProductNumberBasedChanges) => handleProductWidthChange(selectedItem, value),
  updateWeight: (value: ProductNumberBasedChanges) => handleProductWeightChange(selectedItem, value),
  addProperty: (value: string | null) => addNewAttributeProperty(selectedItem, value)
}
</script>

<style scoped lang="css">
.main {
	display: flex;
	gap: 20px;
}
.sidebar {
	width: auto;
}
</style>
