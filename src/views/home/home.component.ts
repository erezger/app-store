import {Component, Vue} from 'vue-property-decorator';
import {Action, Getter} from 'vuex-class';
import {APP_STORE_LIST, GET_APP_STORE_LIST} from '@/types/app-store.types';
import {StoreNamespace} from '@/globals/store-namespace';
import {AppStoreItemModel} from '@/models/app-store-item.model';

@Component({})
export default class HomeComponent extends Vue {

  @Action(GET_APP_STORE_LIST, StoreNamespace.APP_STORE) public getAppStoreList: () => void;

  @Getter(APP_STORE_LIST, StoreNamespace.APP_STORE) public appStoreList!: AppStoreItemModel[];

  public mounted(): void {
    this.getAppStoreList();
  }

  public goToAppItemPage(appitem: AppStoreItemModel): void {
    this.$router.push({name: 'app-item', params: {packageName: appitem.package_name}})
  }
}
