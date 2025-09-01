const AnimatedBackground = () => {
  const shapes = Array.from({ length: 10 });

  return (
    <div className="shapes-container">
      <ul className="shapes">
        {shapes.map((_, i) => (
          <li key={i}></li>
        ))}
      </ul>
    </div>
  );
};

export default AnimatedBackground;
