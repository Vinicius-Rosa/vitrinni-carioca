import { useAnimation } from 'framer-motion';
import { CSSProperties, useCallback, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
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

  const { ref: containerRef, inView } = useInView({ threshold: 0.8 });
  const animation = useAnimation();

  const handleChange = useCallback(e => {
    onChange({ value: e.target.value, name })
  }, [name])

  useEffect(() => {
    if (!!inView) animation.start({ y: 0, opacity: 1, });
  }, [inView]);

  return (
    <Container
      style={style}
      ref={containerRef}
      animate={animation || { y: 0, opacity: 1 }}
      initial={{ y: 50, opacity: 0, }}
      transition={{
        type: "inerttia",
        duration: 0.4,
        delay: 1,
      }}
    >
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
