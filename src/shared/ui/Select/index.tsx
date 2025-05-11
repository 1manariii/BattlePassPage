import React, { useState } from 'react';
import { ArrowIcon, Dropdown, OptionImage, Option, SelectContainer, SelectLabel, SelectWrapper, TitleBold, TitleSelect } from './styles';
import { ISelectProps } from './types';



const Select: React.FC<ISelectProps> = ({ label, options, onSelect, defaultValue }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState(defaultValue || '');

    const selectedOption = options.find(option => option.value === selectedValue) || options[0];

    const handleSelect = (value: string) => {
        setSelectedValue(value);
        onSelect(value);
        setIsOpen(false);
    };

    return (
        <SelectWrapper>
            <TitleSelect>
                {label}
            </TitleSelect>
            <SelectContainer>
                <SelectLabel onClick={() => setIsOpen(!isOpen)}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        {selectedOption.image && <OptionImage src={selectedOption.image} alt={selectedOption.label} />}
                        {selectedOption.boldText ? (
                            <>
                                <TitleBold>{selectedOption.boldTextValue}</TitleBold>
                                {selectedOption.label}
                            </>
                        ) : (
                            <>
                                {selectedOption.label}
                            </>
                        )}
                    </div>
                    <ArrowIcon isOpen={isOpen}>
                        <img src="/Icon.svg" alt="▼" />
                    </ArrowIcon>
                </SelectLabel>

                {isOpen && (
                    <Dropdown>
                        {options.map((option) => (
                            <Option key={option.value} onClick={() => handleSelect(option.value)}>
                                {option.image && <OptionImage src={option.image} alt={option.label} />}
                                {option.boldText ? (
                                    <>
                                        <TitleBold>{option.boldTextValue}</TitleBold>
                                        {option.label}
                                    </>
                                ) : (
                                    <>
                                        {option.label}
                                    </>
                                )}
                            </Option>
                        ))}
                    </Dropdown>
                )}
            </SelectContainer>
        </SelectWrapper>
    );
};

export default Select;