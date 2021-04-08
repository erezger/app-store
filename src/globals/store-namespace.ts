import {BindingOptions} from 'vuex-class/lib/bindings';

export class StoreNamespace {

  // manager namespaces
  public static readonly APP_STORE_MODULE: string = 'appStore';

  public static readonly APP_STORE: BindingOptions = {namespace: StoreNamespace.APP_STORE_MODULE};
}
