import Button from '@restart/ui/esm/Button'
import Lottie from 'react-lottie'
import shopping_bag_error from './shopping-bag-error.json'
import { useHistory } from 'react-router'
import { Alert } from 'react-bootstrap'

const EmptyCart = () => {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: shopping_bag_error
    }

    const {push} = useHistory()

    return (
        <div className='empty-cart'style={{ width: '25rem', margin:'auto', padding:'2em' }}>
             <Alert variant='warning'>
               There are no products loaded in the cart yet
            </Alert>
            <Lottie 
            options={defaultOptions} 
            />
            <Button 
                className="btn btn-primary mx-4 my-2"
                onClick={() => push("/")}
                >
                Go to home
            </Button>
        </div>
    )
}

export default EmptyCart