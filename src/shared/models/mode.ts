
import { MODE } from '../../shared/enums/mode';

export class Mode {

  private _currMode: string;
  public get currMode(): string {
    return this._currMode;
  }
  public set currMode(v: string) {
    this._currMode = v;
  }

  public get isNew(): boolean {
    return this.currMode === MODE.NEW;
  }

  public get isEdit(): boolean {
    return this.currMode === MODE.EDIT;
  }

  public get isView(): boolean {
    return this.currMode === MODE.VIEW;
  }

  public get isRemove(): boolean {
    return this.currMode === MODE.REMOVE;
  }

  public setNew() {
    this.currMode = MODE.NEW;
  }

  public setEdit() {
    this.currMode = MODE.EDIT;
  }

  public setView() {
    this.currMode = MODE.VIEW;
  }

  public setRemove() {
    this.currMode = MODE.REMOVE;
  }
}
