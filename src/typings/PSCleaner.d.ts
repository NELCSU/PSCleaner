export type EntityType = "Regular expression" | "Single term" | "Multiple term";

export type Entity = {
  id: number,
  label: string,
  color: string,
  domain: string,
  type: EntityType,
  reg_ex: string
}

export type EntityRequest = "delete-entity" | "get-entities" | "save-entity";  
export type EntityResponse = "entity-deleted" | "entity-deletion-error" | "entity-list" | "entity-list-error" | "entity-saved" | "entity-save-error";

export type ExportFolderRequest = "get-export-folder" | "export-file-count" | "set-export-folder";
export type ExportFolderResponse = "export-folder" | "export-file-count" | "export-folder-error";

export type ImportRequest = "start-import";
export type ImportResponse = "imported" | "stop-import";
export type ImportFolderRequest = "get-import-folder" | "import-file-count" | "set-import-folder";
export type ImportFolderResponse = "import-folder" | "import-folder-error" | "import-file-count";

export type ProcessingRequest = "start-processing";
export type ProcessingResponse = "processed" | "stop-processing";

export type ProcessingFolderRequest = "get-processing-folder" | "processing-file-count" | "set-processing-folder";
export type ProcessingFolderResponse = "processing-folder" | "processing-folder-error" | "processing-file-count";

export type TrainingFileRequest = "delete-training-file" | "get-temp-training-file" | "get-training-file" | "rename-training-file" | "save-training-file";
export type TrainingFileResponse = "training-file-deleted" | "training-file-deletion-error" | "temp-training-filename" | "training-file" | "training-file-error" | "training-file-rename-error" | "training-file-rename-warning" | "training-file-renamed" | "training-file-save-error" | "training-file-saved";

export type TrainingFileAction = {
  data?: string,
  fn?: string,
  status: TrainingFileResponse
}

export type TrainingFolderRequest = "get-training-folder" | "get-training-file-count" | "set-training-folder";
export type TrainingFolderResponse = "training-folder" | "training-file-count" | "training-folder-error";

export type SearchTermResult = {
  keyword: string,
  start: number
}

export type MatchedEntity = {
  entity: string,
  entityId: number,
  entityDomain: string,
  value: string,
  start: number,
  end: number,
  length: number
}

export type WordPosition = {
  start: number,
  end: number,
  length: number
}
