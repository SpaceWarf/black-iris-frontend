<template>
  <select
    class="input-select"
    :class="{ disabled }"
    @change="handleChange($event.target.value)"
    :disabled="disabled"
  >
    <option
      v-for="(option, i) in optionProperties"
      :selected="selected && option === selected[property]"
      :key="i"
      :value="option"
    >
      {{ option }}
    </option>
  </select>
</template>

<script lang="ts">
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    options: Array,
    property: String,
    selected: undefined,
    disabled: false,
  },
  computed: {
    optionProperties() {
      return this.options.map((option: any) => option[this.property]);
    },
  },
})
export default class Select extends Vue {
  options!: Array<any>;
  property!: string;
  optionsMap: Map<string, any> = new Map();

  handleChange(value: any): void {
    this.$emit(
      "onChange",
      this.options.find((option) => option[this.property] === value)
    );
  }
}
</script>