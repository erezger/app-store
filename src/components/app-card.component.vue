<template>
  <div class="card-container" @click="goToAppItemPage">
    <div class="profile-img">
      <img :src="appItem.icon" :alt="appItem.title"/>
      <div class="img-background"></div>
    </div>
    <div class="card-title">
      {{ appItem.title }}
    </div>
    <div class="description">
      {{ appItem.short_desc }}
    </div>
    <footer>
      <div class="projects">
        <p>Downloads</p>
        <p>{{ appItem.downloads }}</p>
      </div>
    </footer>
  </div>
</template>
<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';
import {AppStoreItemModel} from '@/models/app-store-item.model';

@Component({})
export default class AppCardComponent extends Vue {
  @Prop() public appItem!: AppStoreItemModel;

  public goToAppItemPage(): void {
    this.$emit('on-item-clicked', this.appItem);
  }
}
</script>
<style scoped lang="scss">
</style>
