import React, {Component} from 'react'
/*import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'*/
import './stylefooter.css'
import logo from './mintic.png'
class Ownfooter extends Component {
    
    render() {
        return (
            <footer>
                <div className="container_footer">
                    <div class="box_footer">
                        <div class="logo">
                            <img src={logo} alt="Mision TIC 2022 logo"/>
                        </div>
                        <div class="presentation">
                            <p> Web development project for MisionTIC2022, Universidad de Antioquia. This project is a
                                software application that allows you to track the sales of a product and/or service 
                                in a company and make the corresponding follow-up.
                            </p>
                        </div>
                    </div>
                    <div class="box_footer">
                        <h2>Members</h2>
                        <a href="https://github.com/AndreaAmaya19" target="_blank" rel="noreferrer">@AndreaAmaya19</a>
                    </div>
                    <div class="box_footer">
                        <h2>Proyect media</h2>
                        <a href="https://github.com/yepedraza/SoftwareDevelopment-G7" target="_blank" rel="noreferrer"><i class="fab fa-github"></i>GitHub</a>
                        <a href="https://trello.com/b/ozitnBEm" target="_blank" rel="noreferrer"><i class="fab fa-trello"></i>Trello</a>
                    </div>

                </div>
            </footer>
        )
    }
}
export default Ownfooter;