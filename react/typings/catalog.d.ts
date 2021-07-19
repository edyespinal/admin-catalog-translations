interface CategoriesData {
  category: Category
}

interface Category extends CategoryInputTranslation {
  id: string
}

interface CategoryInputTranslation {
  description: string
  linkId: string
  name: string
  title: string
}
interface SKUData {
  sku: SKU
}
interface SKU extends SKUInputTranslation {
  id: string
}
interface SKUInputTranslation {
  name: string
}
interface BrandData {
  brand: Brand
}
interface Brand extends BrandInputTranslation {
  id: string
}
interface BrandInputTranslation {
  name: string
  text: string
  siteTitle: string
}

interface ProductData {
  product: Product
}

interface Product extends ProductInputTranslation {
  id: string
}

interface ProductInputTranslation {
  name: string
  description: string
  shortDescription: string
  metaTagDescription: string
  title: string
  linkId: string
}

interface SpecificationsData {
  field: Specifications
}
interface Specifications extends FieldInputTranslation {
  fieldId: string
}
interface FieldInputTranslation {
  name: string
  description: string
  fieldTypeId: string
  fieldTypeName: string
}
interface CategoriesNameAndId {
  getCategoriesName: Array<{ id: string; name: string }>
}

interface TranslationRequestByCategoryId {
  requestId: string
  requestedBy: string
  categoryId: string
  error: boolean
  createdAt: string
  locale: string
  completedAt: string
  estimatedTime: number
}

interface ProductTranslationRequest {
  productTranslations: TranslationRequestByCategoryId
}

interface ProdTranslationRequests {
  productTranslationRequests: string[]
}

interface ProdTransInfoReq {
  productTranslationRequestInfo: TranslationRequestByCategoryId
}

interface ProductTranslationDownload {
  downloadProductTranslation: Product[]
}

interface SkuTranslationRequest {
  skuTranslations: TranslationRequestByCategoryId
}

interface SkuTranslationRequests {
  skuTranslationRequests: string[]
}

interface SkuTranslationDownload {
  downloadSKUTranslation: SKU[]
}
