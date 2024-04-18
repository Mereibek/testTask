<template>
  <div class="field">
    <span class="title">weight:</span>
    <input
        v-model="value"
        placeholder="Enter weight"
        type="number"
    />
  </div>
</template>

<script setup lang="ts">
import { Weight } from "@/types";
import { computed } from "vue";
import { attributeId } from "@/values/symbols";

const props = defineProps<{
  attr: Weight;
}>()

const emit = defineEmits(['update:weight'])

const value = computed({
  get: () => props.attr.weight,
  set: value => emit('update:weight', { newValue: value, id: props.attr[attributeId]}),
})
</script>

<style lang="css" scoped>
.field {
  display: grid;
  grid-template-columns: 70px auto;
  column-gap: 10px;
}
.title {
  font-weight: bold;
}
</style>
