export type Items = {
  id: number;
  description: string;
  quantity: number;
  packed: boolean;
};

export type SortingValues = 'input' | 'description' | 'packed';
