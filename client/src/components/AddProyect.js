import {useQuery, gql} from "@apollo/client";

const getProyectsQuery = gql`
    { 
        getProyectos {
            
            nombre_proyecto
            estado_proyecto
        }
    }
`
