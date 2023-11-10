interface ButtonProps {
  text: string;
  onClick: () => void;
}

export default function Button({ text, onClick }: ButtonProps) {
  return (
    <button type='button' className='btn' onClick={onClick}>
      {text}
    </button>
  );
}
