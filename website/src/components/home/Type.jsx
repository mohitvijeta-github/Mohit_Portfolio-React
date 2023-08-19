import React from 'react';
import Typed from 'typed.js';

function Type() {

  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['<i>Software Developer.', 'Full-stack Developer', ' System Adminstrator ','  </i> Software Developer.'],
      typeSpeed: 50,
    });

    return () => {

      typed.destroy();
    };
  }, []);

  return (
    <div className="home__type">
      <span ref={el} />
    </div>
  );
}
export default Type;