export type Serialize<Object extends object> = {
  [Property in keyof Object as Object[Property] extends Function ? never : Property]: Object[Property]
}
