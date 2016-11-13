<template>
    <span class="fileupload-button">
  <i v-if='icon != null' v-bind:class='rendIcon'></i>
  {{label}}
  <input v-el:file-input type="file" name="file">
</span>
111
</template>


