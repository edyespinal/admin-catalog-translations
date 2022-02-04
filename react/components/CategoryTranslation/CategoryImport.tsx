import React from 'react'

import ImportEntriesModal from '../ImportEntriesModal'
import uploadMutationFile from '../../graphql/uploadBrandTranslation.gql'
import entryQueryFile from '../../graphql/brandUploadRequests.gql'

const bucket = 'brand-translation'
const entryHeaders: EntryHeadersCategory[] = [
  'id',
  'name',
  'description',
  'linkId',
  'title',
]
const entryQueryName = 'brandTranslationsUploadRequests'
const entryName = 'Brand'
const fileName = 'brand_translate_model'
const paramEntryName = 'brands'
const sheetName = 'brands_data'
const uploadMutationName = 'uploadBrandTranslations'

const settings: ImportEntriesSettings = {
  bucket,
  entryHeaders,
  entryQueryFile,
  entryQueryName,
  entryName,
  fileName,
  paramEntryName,
  sheetName,
  uploadMutationFile,
  uploadMutationName,
}

const CategoryImport = ({
  isImportOpen = false,
  handleOpenImport = () => {},
}: ComponentProps) => {
  return (
    <>
      <ImportEntriesModal
        isImportOpen={isImportOpen}
        handleOpenImport={handleOpenImport}
        settings={settings}
      />
    </>
  )
}

export default CategoryImport
