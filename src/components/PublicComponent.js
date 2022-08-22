function PublicComponent({ title, width, menu, under }) {
  return (
    <div
      className="wrapper-component-hover"
      style={{ width, right: menu && 0 }}
    >
      <div>{title}</div>
      {under ?
        <div className="arrow-under-component" /> :
        <div className={menu ? "arrow-sliders" : "arrow-component"} />
      }
    </div>
  );
}

export default PublicComponent;
