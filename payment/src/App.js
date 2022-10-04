import './App.css';

var handler = window.ePayco.checkout.configure({
  key: process.env.REACT_APP_EPAYCO_PUBLIC_KEY,
  test: true
});

function App() {

  const handleClick = () => {
    handler.open({
      //Parametros compra (obligatorio)
      name: "Casa de campo en Bogotá",
      description: "Esta casa de campo se encuentra a las afueras de Bogotá",
      invoice: "asdcj9823uadv34t",
      currency: "cop",
      amount: "100000",
      tax_base: "0",
      tax: "0",
      country: "co",
      lang: "en",

      //Onpage="false" - Standard="true"
      external: "false",


      //Atributos opcionales
      extra1: "extra1",
      extra2: "extra2",
      extra3: "extra3",
      response: "http://localhost:3000/response",

      //Atributos cliente
      name_billing: "Jhon Doe",
      address_billing: "Calle false 123",
      type_doc_billing: "cc",
      mobilephone_billing: "3101234567",
      number_doc_billing: "1234567896",

      //atributo deshabilitación metodo de pago
      methodsDisable: ["SP"]

    })
  }


  return (
    <div className="App">
      <h1>Clase de pasarela de pagos</h1>
      <button onClick={handleClick}>Pagar</button>
    </div>
  );
}

export default App;
