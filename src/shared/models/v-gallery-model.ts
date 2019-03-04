export class VImage {

  private _imgWidth: string;
  public get imgWidth(): string {
    return this._imgWidth;
  }
  public set imgWidth(v: string) {
    this._imgWidth = v;
  }

  private _imgHeight: string;
  public get imgHeight(): string {
    return this._imgHeight;
  }
  public set imgHeight(v: string) {
    this._imgHeight = v;
  }

  private _breakpoint: number;
  public get breakpoint(): number {
    return this._breakpoint;
  }
  public set breakpoint(v: number) {
    this._breakpoint = v;
  }

  private _imgUrl: string;
  public get imgUrl(): string {
    return this._imgUrl;
  }
  public set imgUrl(v: string) {
    this._imgUrl = v;
  }

  private _type: string;
  public get type(): string {
    return this._type;
  }
  public set type(v: string) {
    this._type = v;
  }

  constructor(d?: any) {
    if (d) {
      this.imgWidth = d.imgWidth;
      this.imgHeight = d.imgHeight;
      this.breakpoint = d.breakpoint;
      this.imgUrl = d.imgUrl;
      this.type = d.type;
    }
  }
}
