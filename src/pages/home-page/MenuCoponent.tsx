const MenuComponent: React.FC<{src: string | undefined; title: string}> = ({src, title}) => {
    let styleUnique = "";
    if (title === "Caldera") styleUnique = "menu__image-container--house";
    return (
      <div className="menu__item">
        <div>{title}</div>
        <div className={`menu__image-container ${styleUnique}`}>
          <img
            className="menu__image"
            src={src}
            alt={`${title} section`}
          />
        </div>
      </div>
    );
};

export default MenuComponent;