import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Mifoto from './assets/mifoto.jpeg';

function Home() {
  const datosAlumno = {
    carrera: 'Estudio programación en la Facultad Regional Tucumán',
    lenguajes: ['C#', 'JavaScript', 'React'],
    imagen: Mifoto,
    descripcion: 'Mi nombre es Lucas Guerrero para abreviar, soy un instructor personal, adicto al gimnasio y mi stand es uno de los top 3 más fuertes del gym.'
  };

  return (
    <>
      <Header />
      <Main datos={datosAlumno} />
      <Footer />
    </>
  );
}

export default Home;
