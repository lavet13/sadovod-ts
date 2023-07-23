import React from 'react';
import { NumericFormat, NumericFormatProps } from 'react-number-format';

const DECIMAL_LIMIT = 2;

type Props = {
  name: string;
  onChange: (event: { target: { name: string; value: string } }) => void;
};

const PriceFormat = React.forwardRef<NumericFormatProps, Props>(
  (props, ref) => {
    const { onChange, name, ...otherProps } = props;

    return (
      <NumericFormat
        getInputRef={ref}
        onValueChange={({ value }) => {
          onChange({ target: { name, value } });
        }}
        thousandSeparator
        valueIsNumericString
        allowNegative={false}
        decimalScale={DECIMAL_LIMIT}
        suffix='₽'
        {...otherProps}
      />
    );
  }
);

export default PriceFormat;
