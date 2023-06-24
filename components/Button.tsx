interface ButtonProps{
    label:string;
    secondary?: boolean;
    onClick: ()=> void;
    large?:boolean;
    disabled?: boolean;
    outline?:boolean;
    fullwidth?:boolean;
}

const Button:React.FC<ButtonProps> = ({label, large,outline, onClick, fullwidth, secondary,disabled}) => {
  return (
    <button 
    disabled = {disabled}
    onClick={onClick}
    className={`
    disabled:opacity-70
    disabled:cursor-not-allowed
    rounded-full
    hover:opacity-80
    transition
    border-2
    ${fullwidth ? 'w-full' : 'w-fit'}
    ${secondary ? 'bg-white': 'bg-sky-500'}
    ${secondary ? 'text-black': 'text-white'}
    ${secondary ? 'border-black': 'border-sky-500'}
    ${large ? 'text-xl': 'text-md'}
    ${large ? 'p-5': 'p-4'}
    ${large ? 'py-3': 'py-2'}
    ${outline ? 'border-white': ''}
    ${outline ? 'text-white': ''}

    `} >
        {label}
    </button>
  )
}

export default Button
