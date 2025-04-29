function TelhadoVerde() {
  return (
    <div style={{ height: "100vh" }}>
      <iframe
        src="buildNova/index.html" // olhar o nome da build para evitar erros !!!!!!!!!!!!!!
        title="Telhado Verde"
        width="100%"
        height="100%"
        style={{ border: 'none' , backgroundColor: '#c3debf'}}
      ></iframe>
    </div>
  );
}

export default TelhadoVerde;
