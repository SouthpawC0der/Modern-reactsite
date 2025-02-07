import React from 'react'

type ButtonProps = {
    type: 'button' | 'submit';
    title: string;
    icon?: string,
    variant: 'btn_dar_green'
}

const Button = ( {type, title, icon, variant }: ButtonProps) => {
  return (
    <button type="button">
        Log In
    </button>
  )
}

export default Button