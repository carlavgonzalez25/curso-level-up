export interface FilterElement {
  name: string;
  type: string;
  options: string[];
}

export class BaseFilter implements FilterElement {
  constructor(
    public name: string,
    public options: string[],
    public type: string
  ) {}
}

export class FilterFactory {
  protected createFilter(name: string, options: string[], type: string) {
    return new BaseFilter(name, options, type);
  }
}

export class SelectFilter extends FilterFactory {
  constructor() {
    super();
  }
  public createFilter(name: string, options: string[]): BaseFilter {
    const type = "select";
    return super.createFilter(name, options, type);
  }
}

export class InputFilter extends FilterFactory {
  constructor() {
    super();
  }
  public createFilter(name: string, options: string[]): BaseFilter {
    const type = "input";
    return super.createFilter(name, options, type);
  }
}
