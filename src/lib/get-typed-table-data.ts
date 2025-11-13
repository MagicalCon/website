type Table = {
  rows: string[][];
  columns: Column[];
};

type Column = {
  type: string;
  label: string;
  required: boolean;
};

export function getTypedTableData(data: Record<string, unknown>) {
  return data as Table;
}
