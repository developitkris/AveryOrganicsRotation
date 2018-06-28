function MyStyledComponent(props) {
  return (
   <div>
      <p className="brown-text">only this paragraph will get the style :)</p>
      <style jsx>{`
        .brown-text {
          color: green;
        }
    `}</style>
  </div>
  );
}

export default MyStyledComponent;
