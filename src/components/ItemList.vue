<template>
	<div class="list">
		<span
        v-for="(item, i) in items"
        :key="i" class="item"
        :class="{ itemSelected: item === selectedItem }"
        @click="onClick(item)"
    >
			{{ item.name }}
		</span>
	</div>

</template>

<script setup lang="ts">
import { Product } from "@/types";

defineProps<{
	items: Product[];
  selectedItem: Product | null;
}>();

const emit = defineEmits(['selectProduct']);

function onClick (product: Product) {
  emit('selectProduct', product)
}
</script>

<style lang="css">
.list {
	display: flex;
	flex-direction: column;
	border: 1px solid lightblue;
}

.item {
	padding: 10px;
	cursor: pointer;
	font-size: 20px;
	font-weight: bold;
	min-width: 250px;
}

.itemSelected {
	padding: 10px;
	cursor: pointer;
	font-size: 20px;
	font-weight: bold;
	min-width: 250px;
	background: lightskyblue;
}

.item:hover {
	background: #f0f0ff;
}
</style>
