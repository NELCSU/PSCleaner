export type EntityType = "keyword" | "regular expression";

export type CSVField = {
  label: string,
  enabled: boolean,
  rules: any,
  seq: number
};

export type CSVTemplate = {
  fields: CSVField[];
  header: boolean;
  trace: boolean;
};

export type ReadFileAction = {
  data?: string,
  fn?: string,
  status: TemplateFileResponse
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

export type TextMatch = {
  end: number,
  how: string,
  id: number,
  length: number,
  start: number,
  value: string
};

/**
 * discard = 1 - ignore this text if found
 * joinable = 1 - text will combine with neighbouring text
 * (if both discard and joinable = 1 - ignore text if it cant combine with neighbouring text)
 * order = n - determines sorting priority, lower number = higher priority
 * prefix = 1 - text cannot be last in text block
 * suffix = 1 - text cannot be first in text block
 */
export type Action = {
  discard: number;
  joinable: number;
  order: number;
  pos: number;
  prefix: number;
  midfix: number;
  suffix: number;
};

export type Evaluation = { 
  action: Action;
  entity: Entity, 
  matches: TextMatch[]
};

export type Entity = {
  color: string,
  description: string,
  domain: string,
  label: string,
  mask: string,
  type: EntityType
};

export type MatchedEntity = {
  action: Action,
  debug?: string,
  entity: Entity,
  match: TextMatch
};