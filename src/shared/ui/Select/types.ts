export interface ISelectOption {
    value: string;
    label: string;
    image?: string;
    boldText?: boolean;
    boldTextValue?: string;
}

export interface ISelectProps {
    label?: string;
    options: ISelectOption[];
    onSelect: (value: string) => void;
    defaultValue?: string;
}