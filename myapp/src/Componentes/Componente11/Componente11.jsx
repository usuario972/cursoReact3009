import React from 'react'

export const Componente11 = ({atributo1, atributo2}) => {
  return (
    <div onClick={atributo2}>Este es el Componente11 con el atributo {atributo1} de la subcarpeta Componentes-Componente11</div>
  )
}

export const Componente111 = (props) => {
  return (
    <div>{props.etiqueta}</div>
  )
}

