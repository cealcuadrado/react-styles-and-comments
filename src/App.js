import './App.css';

function App() {

  /* Mis estilos */
  var myStyle = {
    fontSize: 32,
    color: '#00ff00',
    backgroundColor: '#0000ff'
  };

  var anotherStyle = {
    fontSize: 40,
    color: '#0000ff',
    backgroundColor: '#00ff00'
  };

  var specialBorder = {
    fontSize: 32,
    border: '1px dotted #333',
    backgroundColor: '#eeeeee',
    color: '#333333'
  };

  /* ¿Respuesta correcta o equivocada? */
  var wrongAnswer = {
    fontSize: 40,
    backgroundColor: 'red',
    color: 'white'
  };

  var rightAnswer = {
    fontSize: 40,
    backgroundColor: 'white',
    color: 'green',
  };

  return (
    <div className="container-fluid my-4">
      <div className="card">
        { /* Título */ }
        <div className="card-header">
          <h4 className="card-title">
            <i className="fas fa-user fa-fw"></i> Styles and Comments
          </h4>
        </div>
        { /* Cuerpo */ }
        <div className="card-body">
          { /* Estilos de prueba */} 
          <p className="bg-danger text-white">This a text stylized with Bootstrap</p>
          <p style={myStyle}>This is a text with an inline style from an object</p>
          <p style={anotherStyle}>This is another inline style</p>
          <p style={specialBorder}>5 + 5 = {5 + 5}</p>
          <hr />
          { /* ¿Respuesta correcta o equivocada? */}
          <p style={2 + 2 === 5 ? rightAnswer : wrongAnswer}>2 + 2 = 5</p>
          <p style={2 + 2 === 4 ? rightAnswer : wrongAnswer}>2 + 2 = 4</p>
        </div>
      </div>
    </div>
  );
}

export default App;
