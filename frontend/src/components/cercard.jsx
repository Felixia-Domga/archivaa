// Un composant React est une fonction JS qui retourne du JSX
function CerCard({ titre, auteur, description, image }) {
  return (
    <div className="col-12 col-md-6 col-lg-4">
      <div className="card h-100 shadow-sm">
        <img src={image} className="card-img-top" alt={titre} style={{ height: '180px', objectFit: 'cover' }} />
        <div className="card-body d-flex flex-column">
          <div className="d-flex justify-content-between align-items-center mb-2">
            <button type="button" className="btn btn-sm btn-outline-danger">♡</button>
            <small className="text-muted">par {auteur}</small>
          </div>
          <h5 className="card-title">{titre}</h5>
          <p className="card-text text-muted flex-grow-1">{description}</p>
          <button className="btn btn-outline-primary mt-auto">Consulter le CER</button>
        </div>
      </div>
    </div>
  );
}

export default CerCard;