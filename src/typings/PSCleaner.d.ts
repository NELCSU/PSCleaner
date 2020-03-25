export type EntityType = "keyword" | "regular expression";

export type CSVField = [string, boolean];

export type CSVTemplate = {
  header: boolean;
  fields: CSVField[]
};

export type ReadFileAction = {
  data?: string,
  fn?: string,
  status: TrainingFileResponse | TemplateFileResponse
};

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

export type TemplateFileRequest = "clear-templete-file | delete-template-file" | "get-template-file" | "get-template-files" | "save-template-file";
export type TemplateFileResponse = "template-file-deleted" | "template-file-deletion-error" | "template-file" | "template-files" | "template-file-error" | "template-file-save-error" | "template-file-saved";

export type TemplateFolderRequest = "get-template-folder" | "set-template-folder";
export type TemplateFolderResponse = "template-folder" | "template-file-count" | "template-folder-error";

export type TrainingFileRequest = "delete-training-file" | "get-temp-training-file" | "get-training-file" | "rename-training-file" | "save-training-file";
export type TrainingFileResponse = "training-file-deleted" | "training-file-deletion-error" | "temp-training-filename" | "training-file" | "training-file-error" | "training-file-rename-error" | "training-file-rename-warning" | "training-file-renamed" | "training-file-save-error" | "training-file-saved";

export type TrainingFolderRequest = "get-training-folder" | "set-training-folder";
export type TrainingFolderResponse = "training-folder" | "training-file-count" | "training-folder-error";

export type TextMatch = {
  end: number,
  id: number,
  length: number,
  start: number,
  value: string
};

export type Entity = {
  color: string,
  discard: number,
  domain: string,
  joinable: number,
  label: string,
  mask: string,
  order: number,
  prefix: number,
  suffix: number,
  type: EntityType
};

export type MatchedEntity = {
  entity: Entity,
  match: TextMatch
};