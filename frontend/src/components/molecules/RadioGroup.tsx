// @ts-ignore
import React from 'react';
import { FormControl, FormControlLabel, Radio, RadioGroup as MUIRadioGroup } from '@mui/material';

interface RadioGroupProps {
    options: { label: string; value: string }[];
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const RadioGroup: React.FC<RadioGroupProps> = ({ options, value, onChange }) => {
    return(
        <FormControl>
            <MUIRadioGroup value={value} onChange={onChange} row>
                {options.map((option) => (
                    <FormControlLabel key={option.value} value={option.value} control={<Radio />}  label={option.label} />
                ))}
            </MUIRadioGroup>
        </FormControl>
    );
};

export default RadioGroup;