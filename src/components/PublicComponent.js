function PublicComponent({ title, width, menu }) {
  return (
    <div
      className="wrapper-component-hover"
      style={{ width, right: menu && 0 }}
    >
      <div>{title}</div>
      <div className={menu ? "arrow-sliders" : "arrow-component"} />
    </div>
  );
}

export default PublicComponent;
