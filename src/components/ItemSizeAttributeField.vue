<template>
  <div class="field">
    <span class="title">size:</span>
    <span>
        <input
            v-model="heightValue"
            type="number"
            placeholder="Enter width"
        />
        x
        <input
            v-model="widthValue"
            type="number"
            placeholder="Enter height"
        />
		</span>
  </div>
</template>

<script setup lang="ts">
import { Size } from "@/types";
import { computed } from "vue";
import { attributeId } from "@/values/symbols";

const props = defineProps<{
  attr: Size;
}>()

const emit = defineEmits(['update:width','update:height'])

const heightValue = computed({
  get: () => props.attr.size.height,
  set: value => emit('update:height', { newValue: value, id: props.attr[attributeId]}),
})

const widthValue = computed({
  get: () => props.attr.size.width,
  set: value => emit('update:width', { newValue: value, id: props.attr[attributeId]}),
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
