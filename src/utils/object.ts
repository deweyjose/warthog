import { StringUtil } from './string';

export class ObjectUtil {
  static prefixKeys<T>(obj: { [key: string]: T }, prefix: string) {
    return Object.keys(obj).reduce((result: { [key: string]: T }, key: string) => {
      result[`${prefix}${key}`] = obj[key];
      return result;
    }, {});
  }

  static constantizeKeys<T>(obj: { [key: string]: T }): { [key: string]: T } {
    return Object.keys(obj).reduce((result: { [key: string]: T }, key: string) => {
      result[StringUtil.constantize(key)] = obj[key];
      return result;
    }, {});
  }
}
