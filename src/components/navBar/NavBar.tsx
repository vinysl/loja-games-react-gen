import { Link, useNavigate } from 'react-router-dom'
import gameLogo from '../../assets/game.svg'

function Navbar() {
    let navigate = useNavigate()

    return (
        <>
            <div className='w-full bg-purple-950 text-white flex justify-center py-4'>
                <div className="flex justify-center ">
                <img src={gameLogo} alt="" className='w-2/4' />
                </div>
                <div className="container flex justify-between text-lg">
                    <Link to='/home' className='text-2xl font-bold uppercase'>Loja de Games</Link>

                    <div className='flex gap-4'>
                        <div className='hover:underline'>Produtos</div>
                        <Link to='/categorias' className='hover:underline'>Categorias</Link>
                        <Link to='/cadastroCategoria' className='hover:underline'>Cadastrar categoria</Link>
                        <div className='hover:underline'>Perfil</div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
