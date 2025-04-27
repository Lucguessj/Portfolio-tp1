function Main({ datos }) {
    return (
        <main>
      <div className="card">
        <img src={datos.imagen} alt="Perfil" />
        <p>{datos.descripcion}</p>
        <h2>{datos.nombre}</h2>
        <p>{datos.carrera}</p>
        <p>Me defiendo un poco en: {datos.lenguajes.join(', ')}</p>
        
      </div>
      </main>
    );
  }
  
  export default Main;
  