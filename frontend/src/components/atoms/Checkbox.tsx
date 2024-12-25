import React from 'react';
import { FormControlLabel, Checkbox as MUICheckbox } from '@mui/material';

interface CheckboxProps {
    label: string;
    checked: boolean;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ label, checked, onChange }) => {
    return <FormControlLabel control={<MUICheckbox checked={checked} onChange={onChange} />} label={label} />;
};

export default Checkbox;
