<template>
	<div class="content">
		<span class="header"> {{ item.name }}</span>

		<div class="detail"
         v-for="attr in attributes"
         :key="attr[attributeId] ?? nanoid(4)"
    >

			<ItemCodeAttributeField
          :attr="attr"
          @update:code="emitProductCodeChanges"
      />

			<ItemNameAttributeField
          :attr="attr"
          @update:name="emitProductNameChanges"
      />

      <ItemColorAttributeField
          v-if="isColorAttribute(attr)"
          :attr="attr"
          @update:color="emitProductColorChanges"
      />

      <ItemSizeAttributeField
          v-if="isSizeAttribute(attr)"
          :attr="attr"
          @update:height="emitProductHeightChanges"
          @update:width="emitProductWidthChanges"
      />

      <ItemWeightAttributeField
          v-if="isWeightAttribute(attr)"
          :attr="attr"
          @update:weight="emitProductWeightChanges"
      />
		</div>

		<div class="add">
			<label>
				type
				<select ref="selectRef">
					<option value="color">color</option>
					<option value="size">size</option>
					<option value="weight">weight</option>
				</select>
			</label>

			<button @click="emit('addProperty', selectRef?.value)">
				Add
			</button>
		</div>

	</div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { Product, ProductNumberBasedChanges, ProductStringBasedChanges } from "@/types";
import { isColorAttribute, isSizeAttribute, isWeightAttribute } from "@/utils";
import ItemColorAttributeField from "@/components/ItemColorAttributeField.vue";
import ItemSizeAttributeField from "@/components/ItemSizeAttributeField.vue";
import ItemWeightAttributeField from "@/components/ItemWeightAttributeField.vue";
import ItemCodeAttributeField from "@/components/ItemCodeAttributeField.vue";
import ItemNameAttributeField from "@/components/ItemNameAttributeField.vue";
import { nanoid } from "nanoid";
import { attributeId } from "@/values/symbols";

const props = defineProps<{
	item: Product | null
}>();

const emit = defineEmits([
    'addProperty', 'updateCode', 'updateName',
    'updateColor', 'updateHeight', 'updateWidth',
    'updateWeight'
]);

const selectRef = ref<HTMLSelectElement | null>(null);
const attributes = computed(() => props.item ? props.item.attributes : [])

function emitProductCodeChanges (value: ProductStringBasedChanges) {
  emit('updateCode', value)
}
function emitProductNameChanges (value: ProductStringBasedChanges) {
  emit('updateName', value)
}
function emitProductColorChanges (value: ProductStringBasedChanges) {
  emit('updateColor', value)
}
function emitProductHeightChanges (value: ProductNumberBasedChanges) {
  emit('updateHeight', value)
}
function emitProductWidthChanges (value: ProductNumberBasedChanges) {
  emit('updateWidth', value)
}
function emitProductWeightChanges (value: ProductNumberBasedChanges) {
  emit('updateWeight', value)
}
</script>

<style scoped lang="css">
.header {
	font-weight: bold;
}
.content {
	display: flex;
	flex-direction: column;
	padding: 20px;
	gap: 20px;
}
.detail {
	padding: 10px;
	display: flex;
	flex-direction: column;
	gap: 10px;
}
.add {
	display: flex;
	gap: 10px;
}
</style>
