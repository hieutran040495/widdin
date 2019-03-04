
import { ResponsiveSrceen } from '../utils/responsive-screen';

export class MenuModel {

  private _id: string;
  public get id(): string {
    return this._id;
  }
  public set id(v: string) {
    this._id = v;
  }

  private _name: string;
  public get name(): string {
    return this._name;
  }
  public set name(v: string) {
    this._name = v;
  }

  private _icon: string;
  public get icon(): string {
    return this._icon;
  }
  public set icon(v: string) {
    this._icon = v;
  }

  private _path: string;
  public get path(): string {
    return this._path;
  }
  public set path(v: string) {
    this._path = v;
  }

  private _tooltip: string;
  public get tooltip(): string {
    return this._tooltip;
  }
  public set tooltip(v: string) {
    this._tooltip = v;
  }

  private _placement: string;
  public get placement(): string {
    return this._placement;
  }
  public set placement(v: string) {
    this._placement = v;
  }

  constructor (data?: any) {
    this._displaytooltip();

    if (data) {
      this.id   = data.id;
      this.name = data.name;
      this.icon = data.icon;
      this.path = data.path;
      this._displaytooltip();
    }
  }

  private _displaytooltip() {
    // if (ResponsiveSrceen.isTablet()) {
    //   this.tooltip = this.name;
    //   this.placement = 'right';
    // } else if (ResponsiveSrceen.isSmallTablet() || ResponsiveSrceen.isSmartPhone()) {
    //   this.tooltip = this.name;
    //   this.placement = 'bottom';
    // } else {
    //   this.tooltip = '';
    //   this.placement = '';
    // }
  }
}
