import React from 'react'

const Button = ({text,bgcolor,border,bordercolor,textcolor}) => {
  return(
    <button
className={`w-[184px] h-[43px] rounded-md text-sm ${border} ${bordercolor} mt-6 mx-2 px-5 py-3 hover:cursor-pointer font-bold hover:scale-105 transition-all duration-300`}
style={{ background: bgcolor,color:textcolor }}
>
      {text}
    </button>
  );
}

export default Button