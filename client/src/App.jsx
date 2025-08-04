import { useEffect, useState } from 'react';

function App() {
  // const [mensaje, setMensaje] = useState('');

  // useEffect(() => {
  //   fetch('http://localhost:5000/api/mensaje')
  //     .then(res => res.json())
  //     .then(data => setMensaje(data.mensaje));
  // }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>App React + Node</h1>
      {/* <p>{mensaje}</p> */}
      <h2>Hola bienvenido</h2>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Alfonso</td>
            <td>Martinez</td>
          </tr>
        </tbody>
      </table>

    </div>
  );
}

export default App;
