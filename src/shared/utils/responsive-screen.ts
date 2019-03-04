export class ResponsiveSrceen {
  static isTablet(): boolean {
    return  window.innerWidth < 991 && window.innerWidth > 767;
  }

  static isSmallTablet(): boolean {
    return  window.innerWidth < 767 && window.innerWidth > 575;
  }

  static isPhone(): boolean {
    return  window.innerWidth < 575 && window.innerWidth > 480;
  }

  static isSmallPhone(): boolean {
    return  window.innerWidth < 480;
  }
}
