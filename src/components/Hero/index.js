import Logo from '../Logo'
import Card from '../UI/Card'
import './style.css'
import Navbar from '../Navbar'

const Hero = (props) => {
    return ( 
        <div>
            <Card>
                <div style={{padding:'50px 0'}}>
                    <Logo />
                </div>
                <Navbar />
            </Card>
        </div>
     );
}
 
export default Hero;