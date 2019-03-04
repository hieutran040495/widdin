import { BaseModel } from './base';
import { ROLES } from '../../shared/enums/roles';

export class User extends BaseModel {

  private _name: string;
  public get name(): string {
    return this._name;
  }
  public set name(v: string) {
    this._name = v;
  }

  private _image: string;
  public get image(): string {
    return this._image;
  }
  public set image(v: string) {
    this._image = v;
  }

  private _role: string;
  public get role(): string {
    return this._role;
  }
  public set role(v: string) {
    this._role = v;
  }
  public get isAdmin(): boolean {
    return this.role === ROLES.ADMIN;
  }
  public get isStudio(): boolean {
    return this.role === ROLES.STUDIO;
  }

  constructor(d?: any) {
    super(d);

    if (d) {
      this.name             = d.name;
      this.role             = d.role;
    }
  }
}
