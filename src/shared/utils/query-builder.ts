export class QueryBuilder {
  private _currentPage = 1;
  public get currentPage(): number {
    return this._currentPage;
  }
  public set currentPage(v: number) {
    this._currentPage = v;
  }

  private _perPage = 20;
  public get perPage(): number {
    return this._perPage;
  }
  public set perPage(v: number) {
    this._perPage = v;
  }
  public get firstOrder(): number {
    return (this.currentPage - 1) * this.perPage + 1;
  }
  public get lastOrder(): number {
    return this.currentPage * this.perPage;
  }

  private _total: number;
  public get total(): number {
    return this._total;
  }
  public set total(v: number) {
    this._total = v;
  }

  private _firstPage = 1;
  public get firstPage(): number {
    return this._firstPage;
  }
  public set firstPage(v: number) {
    this._firstPage = v;
  }

  private _lastPage: number;
  public get lastPage(): number {
    return this._lastPage;
  }
  public set lastPage(v: number) {
    this._lastPage = v;
  }

  private _search: string;
  public get search(): string {
    return this._search;
  }
  public set search(v: string) {
    this._search = v;
  }

  private _from: number;
  public get from(): number {
    return this._from;
  }
  public set from(v: number) {
    this._from = v;
  }
  public get loadmore(): number {
    return this.total - this.currentPage * this.perPage;
  }

  constructor() {}

  public isFirstPage(): boolean {
    return this.currentPage === 1;
  }

  public nextPage(): void {
    this._currentPage++;
  }

  public prevPage(): number {
    return this._currentPage--;
  }

  public hasNextPage(): boolean {
    return this.currentPage < this.lastPage;
  }

  public hasPrevPage(): boolean {
    return this.currentPage > this.perPage;
  }

  public setPagination(data: any) {
    this.currentPage = data.current_page;
    this.lastPage = data.last_page;
    this.perPage = data.per_page;
    this.total = data.total;
    this.from = data.from;
  }

  public hasPaginate() {
    return this.total > this.perPage;
  }

  public paginateJSON() {
    let query: any = {
      page: this.currentPage,
      // limit: this.perPage,
    };

    if (this.search) {
      query = {
        ...query,
        search: this.search,
      };
    }

    return query;
  }

  public reset() {
    this.currentPage = 1;
    this.perPage = 20;
    this.search = undefined;
  }
}
