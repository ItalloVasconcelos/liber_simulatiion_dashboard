// @ts-ignore
import React, { ChangeEvent } from 'react';
import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';

interface SelectInputProps {
    label: string;
    value: string;
    onChange: (event: ChangeEvent<{ value: unknown }>) => void;
    options: { label: string; value: string }[];
}

const SelectGroup: React.FC<SelectInputProps> = ({ label, value, onChange, options }) => {
    return (
        <FormControl fullWidth margin="normal">
            <InputLabel>{label}</InputLabel>
            <Select value={value} onChange={onChange} label={label}>
                {options.map((option, index) => (
                    <MenuItem key={index} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};

export default SelectGroup;
