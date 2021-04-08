import {Component, Vue} from 'vue-property-decorator';
import {Action, Getter} from 'vuex-class';
import {CURRENT_APP, CURRENT_APP_SIMILAR, GET_APP_BY_PACKAGE_NAME} from '@/types/app-store.types';
import {StoreNamespace} from '@/globals/store-namespace';
import {AppStoreItemModel} from '@/models/app-store-item.model';
import '@/assets/scss/app-item.scss';

@Component({})
export default class AppItemComponent extends Vue {

  @Action(GET_APP_BY_PACKAGE_NAME, StoreNamespace.APP_STORE) public getAppByPackageName: (packageName: string) => void;

  @Getter(CURRENT_APP, StoreNamespace.APP_STORE) public currentApp!: AppStoreItemModel;
  @Getter(CURRENT_APP_SIMILAR, StoreNamespace.APP_STORE) public currentAppSimilar!: AppStoreItemModel[];

  public mounted(): void {
    const packageName = this.$route.params['packageName'];
    if (!packageName) {
      this.$router.push('home');
    }
    this.getAppByPackageName(packageName);
  }
}
