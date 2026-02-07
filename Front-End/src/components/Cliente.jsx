import './Cliente.css'

function Cliente(props){

    const data = props.data;

    return(
        <div className="card" onClick={props.menu} key={data.id}>
            <label className='cardLabel' >${data.nome}</label>
            <label className='cardLabel'>${data.email}</label>
            <label className='cardLabel'>${data.cidade}</label>
        </div>

    );

}

export default Cliente;