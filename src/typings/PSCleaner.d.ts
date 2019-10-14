export type EntityType = "Regular expression" | "Word list";

export type Entity = {
  id: number,
  name: string,
  color: string,
  domain: string,
  type: EntityType,
  reg_ex: string
}

export type EntityRequest = "delete-entity" | "get-entities" | "save-entity";  
export type EntityResponse = "entity-deleted" | "entity-deletion-error" | "entity-list" | "entity-list-error" | "entity-saved" | "entity-save-error";

export type ExportRequest = "get-export-folder" | "export-file-count";
export type ExportResponse = "export-folder" | "export-file-count";

export type ImportRequest = "get-import-folder" | "import-file-count" | "start-import";
export type ImportResponse = "import-folder" | "import-file-count" | "imported" | "stop-import";

export type ProcessingRequest = "get-processing-folder" | "processing-file-count" | "start-processing";
export type ProcessingResponse = "processing-folder" | "processing-file-count" | "processed" | "stop-processing";

export type TrainingFileRequest = "delete-training-file" | "get-temp-training-file" | "get-training-file" | "rename-training-file" | "save-training-file";
export type TrainingFileResponse = "training-file-deleted" | "training-file-deletion-error" | "temp-training-filename" | "training-file" | "training-file-error" | "training-file-rename-error" | "training-file-rename-warning" | "training-file-renamed" | "training-file-save-error" | "training-file-saved";

export type TrainingFolderRequest = "get-training-folder" | "get-training-file-count";
export type TrainingFolderResponse = "training-folder" | "training-file-count";

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
