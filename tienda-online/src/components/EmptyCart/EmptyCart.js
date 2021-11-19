import Button from '@restart/ui/esm/Button'
import Lottie from 'react-lottie'
import shopping_bag_error from './shopping-bag-error.json'
import { useHistory } from 'react-router'

const EmptyCart = () => {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: shopping_bag_error
    }

    const {push} = useHistory()

    return (
        <div className='empty-cart'style={{ width: '25rem', margin:'auto', padding:'2em' }}>
            <Lottie 
            options={defaultOptions} 
            />
            <Button 
                className="btn btn-secondary mx-4 my-2"
                onClick={() => push("/")}
                >
                Go to home
            </Button>
        </div>
    )
}

export default EmptyCart