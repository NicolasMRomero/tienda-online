import { Card, Button } from "react-bootstrap"
import { useHistory } from 'react-router'
import {FaGithubSquare} from 'react-icons/fa'
import { Link } from "react-router-dom"

export const Contact = () => {

    const {push} = useHistory()

    return (
        <>
        <section>
            <h1 className='my-3'>Contact</h1>  
            <Card style={{ width: '18rem',margin:'auto' }}>
            <Card.Img variant="top" src="https://firebasestorage.googleapis.com/v0/b/tienda-online-e39a3.appspot.com/o/Energica-66-2.jpg?alt=media&token=5b9abdd7-73ee-4553-a282-15d83d59e124" />
            <Card.Body>
                <Card.Title>Nicolás Romero</Card.Title>
                <Card.Text>
                    <p>
                        This is my first React Js project.
                    </p>
                    <p>
                        You can check the source code on my Github profile 👉
                        <Link to={{ pathname: "https://github.com/NicolasMRomero/tienda-online/tree/master"}} target="_blank" >
                            <FaGithubSquare size={22} className="widget"/>
                        </Link>
                    </p>
                
                </Card.Text>
                <Button 
                className="btn btn-primary mx-4 my-2"
                onClick={() => push("/")}
                >
                Go back
            </Button>
            </Card.Body>
            </Card>
        </section>
        </>
    )
}
