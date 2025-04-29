import SobreTelhadoVerde from "../components/sobre/SobreTelhadoVerde";


function TelhadoVerde() {
  return (
    <>
    <SobreTelhadoVerde></SobreTelhadoVerde>
    <div style={{ height: "100vh", backgroundColor: "#c3debf" }}>
      <iframe
        src="Build Teste/index.html" // olhar o nome da build para evitar erros !!!!!!!!!!!!!!
        title="Telhado Verde"
        width="100%"
        height="100%"
        style={{ border: 'none', marginTop: '40px' }}
      ></iframe>
      </div>
    </>
  );
}

export default TelhadoVerde;
