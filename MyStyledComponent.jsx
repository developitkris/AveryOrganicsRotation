function MyStyledComponent(props) {
  return (
   <div>
      <p className="grey-text">only this paragraph will get the style :)</p>
      <style jsx>{`
        .grey-text {
          color: green;
        }
    `}</style>
  </div>
  );
}

export default MyStyledComponent;
