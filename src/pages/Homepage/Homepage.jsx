
import mainImage from '../../assets/imgs/main-image.jpg'
import '../../assets/scss/basics/_helpers.scss';
import './Homepage.scss'

export const Homepage = (props) => {

    return (
        <section className="flex space-between homepage">
            <img className="main-image" src={mainImage} />
            <h1>Welcome to my bakery</h1>
        </section>
    )
}

