const SocialLink = ({ id, link, icon, itemClass }) => {
  return (
    <li key={id}>
      <a href={link} target="_blank" className={itemClass}>
        <i className={`fab fa-${icon}`}></i>
      </a>
    </li>
  );
};

export default SocialLink;
