<template>
  <div class="field">
    <span class="title">color:</span>
    <input
        v-model="value"
        placeholder="Enter color"
    />
  </div>
</template>

<script setup lang="ts">
import { Color } from "@/types";
import { computed } from "vue";
import { attributeId } from "@/values/symbols";

const props = defineProps<{
  attr: Color;
}>()

const emit = defineEmits(['update:color'])

const value = computed({
  get: () => props.attr.color,
  set: value => emit('update:color', { newValue: value, id: props.attr[attributeId] }),
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
