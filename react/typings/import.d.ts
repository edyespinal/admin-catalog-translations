interface ImportEntriesSettings {
  bucket: UploadBucket
  entryHeaders: EntryHeaders[]
  entryQueryFile: DocumentNode
  entryQueryName: string
  entryName: string
  fileName: string
  paramEntryName: string
  sheetHeaders?: string[]
  sheetName: string
  uploadMutationFile: DocumentNode
  uploadMutationName: string
}

interface ImportEntries extends ComponentProps {
  settings: ImportEntriesSettings
}
