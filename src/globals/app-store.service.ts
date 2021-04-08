import {Observable} from 'rxjs';
import {$httpClient} from '@/globals/http-client';
import {AppStoreItemModel} from '@/models/app-store-item.model';
import {map, pluck} from 'rxjs/operators';

export default class AppStoreService {
  private readonly baseApi: string;

  constructor() {
    this.baseApi = '../json/app_store.json';
  }

  public getAppStoreItems(): Observable<AppStoreItemModel> {
    return $httpClient.get(this.baseApi);
  }

  public getAppByPackageName(packageName: string): Observable<AppStoreItemModel> {
    return $httpClient.get(this.baseApi)
      .pipe(
        pluck('most_popular_apps'),
        map((arr) => arr.find((item) => item.package_name === packageName)),
      );
  }
}
