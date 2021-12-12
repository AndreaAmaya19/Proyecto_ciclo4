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
                            <p> Web development project for MisionTIC2022, Universidad de Antioquia. This is a
                                software application that allows you to manage research projects.
                            </p>
                        </div>
                    </div>
                    <div class="box_footer">
                        <h2>Members</h2>
                        <a href="https://github.com/AndreaAmaya19" target="_blank" rel="noreferrer">@AndreaAmaya19</a>
                    </div>
                    <div class="box_footer">
                        <h2>Proyect media</h2>
                        <a href="https://github.com/DiegoRR192/MintiCiclo4Proyecto/tree/Proyecto_aa" target="_blank" rel="noreferrer"><i class="fab fa-github"></i>GitHub</a>
                        <a href="https://trello.com/b/iaa9VPd7/minticiclo4proyecto" target="_blank" rel="noreferrer"><i class="fab fa-trello"></i>Trello</a>
                    </div>

                </div>
            </footer>
        )
    }
}
export default Ownfooter;