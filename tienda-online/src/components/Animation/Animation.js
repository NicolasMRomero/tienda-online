import Lottie from 'react-lottie'
import loader from './loader.json'
import'./Animation.scss'

const Animation = () => {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: loader
    }

    return (
        <div className='Animation'>
            <Lottie options={defaultOptions} />
        </div>
    )
}

export default Animation