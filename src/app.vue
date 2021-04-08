<template>
  <div class="container-fluid">
    <router-view/>
    <notifications group="store"/>
  </div>
</template>

<script lang='ts'>
import {Component, Vue} from 'vue-property-decorator';

@Component({})
export default class App extends Vue {
}
</script>
