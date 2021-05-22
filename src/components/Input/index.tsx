import { CSSProperties, useCallback, useRef } from 'react';
import { Container, Label, InnerInput, TextArea } from './styles';

interface onChangeProps {
  value: string;
  name: string;
}

type onChange = (props: onChangeProps) => void

interface InputProps {
  type?: string;
  label?: string;
  name: string;
  value: string;
  onChange: onChange;
  style?: CSSProperties;
}

function Input({ type = "text", label, value, name, onChange, style }: InputProps) {
  const ref = useRef(null);

  const handleChange = useCallback(e => {
    onChange({ value: e.target.value, name })
  }, [name])

  return (
    <Container style={style}>
      <Label htmlFor={ref.current}>{label}</Label>

      {
        type !== 'textarea' && <InnerInput
          ref={ref}
          type={type}
          name={name}
          value={value}
          onChange={handleChange}
        />
      }

      {type === 'textarea' && <TextArea
        ref={ref}
        name={name}
        value={value}
        onChange={handleChange}
      />}
    </Container>
  );
};

export default Input;
