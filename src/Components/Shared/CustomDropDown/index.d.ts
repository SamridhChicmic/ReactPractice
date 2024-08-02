export interface Option {
  label: string;
  icon?: string;
  path: string;
}
export interface DropDownProps {
  placeholder: string;
  options: Array<Option>;
  onChange: (value: Option) => void;
}
