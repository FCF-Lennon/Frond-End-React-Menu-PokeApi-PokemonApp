import { useState } from 'react'
import Input from '../Elementos/Input/Input'
import Button from '../Elementos/Button/Button'

function Buscador(props) {

    const [busqueda, setBusqueda] = useState('')

    const handleKeyDown = async (event) => {
        if (event.key === 'Enter') {
            event.preventDefault()
            setBusqueda(event.target.value)
            if (busqueda === '') {
                console.log(busqueda)
                return alert('Pokemon no existe o campo vacio.')
            }
        }
    }

    const handleOnClick = (event) => {
        event.preventDefault()
        setBusqueda(event.target.value)
        if (busqueda === '') {
            console.log(busqueda)
            return alert('Pokemon no existe o campo vacio.')
        }
        props.getPokemonOne(busqueda.toLowerCase())
    }

    return (
        <>
            <div onChange={(e) => setBusqueda(e.target.value)}>
                <div className='ctn-search  buscador'>
                    <Input onChange={handleKeyDown} type="text" name='Escoje a tu Campeon' required />
                    <Button onClick={handleOnClick} type="submit" name="go!" />
                </div>
            </div>

        </>
    )
}

export default Buscador