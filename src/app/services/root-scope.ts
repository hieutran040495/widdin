import { Injectable } from '@angular/core';
import { BaseRootScope } from '../../shared/utils/base.root-scope';

@Injectable()
export class RootScopeService extends BaseRootScope {

  constructor() {
    super();
  }
}
