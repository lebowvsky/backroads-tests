const Service = ({ service }) => {
  const { icon, title, text } = service;
  return (
    <article className="service">
      <span className="service-icon">
        <i className={`fas fa-${icon} fa-fw`}></i>
      </span>
      <div className="service-info">
        <h4 className="service-title">{title}</h4>
        <p className="service-text">{text}</p>
      </div>
    </article>
  );
};

export default Service;
