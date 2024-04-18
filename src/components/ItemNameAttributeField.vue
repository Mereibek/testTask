<template>
  <div class="field">
    <span class="title">name:</span>
    <input
        v-model="value"
        placeholder="Enter name"
    />
  </div>
</template>

<script setup lang="ts">
import { Color, Size, Weight } from "@/types";
import { computed } from "vue";
import { attributeId } from "@/values/symbols";

const props = defineProps<{
  attr: Color | Weight | Size;
}>()

const emit = defineEmits(['update:name'])

const value = computed({
  get: () => props.attr.name,
  set: value => emit('update:name', { newValue: value, id: props.attr[attributeId]}),
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
