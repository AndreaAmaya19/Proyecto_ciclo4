import {useQuery, gql} from "@apollo/client";

const getProyectsQuery = gql`
    { 
        getProyectos {
            
            nombre_proyecto
            estado_proyecto
        }
    }
`

function ProyectList() {
    // if (error) return `Error! ${error.message}`;
    const {loading, error, data} = useQuery(getProyectsQuery);

    if (loading) return <div>Loading proyects...</div>;
    if (error) return `Error! ${error.message}`;
    // const displayProyects(){
    //     var data = this.props.data;
    //     if (data.loading){
    //         return (<p>Loading...</p>);
    //     } else {
    //         return data.getProyectos.map(proyect => {
    //             return (
    //                 <li>{proyect.nombre_proyecto}</li>
    //             );
    //         })
    //     }
    // }
    
    //console.log(data);
    return (     
      <div>
        <ul className="proyect-list">
            {data.getProyectos.map(proyecto => (
            <li key={proyecto.id}> {proyecto.nombre_proyecto} </li> 
            ))}
        </ul>
      </div>
    );
  }
  
  export default ProyectList;
  