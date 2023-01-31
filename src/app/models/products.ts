
export interface IProducts {
  id: number,
  title: string,
  model: string,
  price: number,
  image?: string,
  configure: any,
  quantity?: number

}

export interface IProductsConfig {
  chip: string,
  SSD: string,
  memory: string,
  display: string
}
