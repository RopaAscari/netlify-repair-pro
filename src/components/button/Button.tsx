import React, { MouseEventHandler } from 'react';
import './button.scss'

interface Props {
    id?: string;
    disabled?: boolean;
    type?: string;
    ref?: any;
    classStyle?: string;
    text: string;
    isSubmit?: boolean;
    image?: any;
    form?: string;
    onclick?: MouseEventHandler<HTMLInputElement> | any;
}

export const Button: React.FC<Props> = ({classStyle, form, text, onclick, type, disabled, isSubmit}) => {
    return (
        <div>
            <input
                form={form}
                type={isSubmit ? "submit" : "button"}
                disabled={disabled}
                onClick={disabled ? () => ("") : onclick}
                className={`button ${type} ${[classStyle].join(" ")} ${disabled ? "disabled" : ""}`}
                value={text}
            />
        </div>
    );
};