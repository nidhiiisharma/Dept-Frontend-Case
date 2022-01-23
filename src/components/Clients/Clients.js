import './Clients.css'

const Clients = ({ data }) => (
  <div className="client-container">
    <h2 className="client-title">Clients</h2>
    <p className="client-text">We value a great working relationship with our clients above all else. It’s why they often come to our parties. It’s also why we’re able to challenge and inspire them to reach for the stars.</p>
    <div className="client-logo-container">
      {data.map((client, index) => (
        <img 
          className="client-logo"
          src={`https://dept-assignment-victor.herokuapp.com/images/clients/${client}.png`} alt={client} key={index} />
      ))}
    </div>
  </div>
)

export default Clients