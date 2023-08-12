import React from 'react';
import Typed from 'typed.js';

function Type() {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['<i>Software</i> Developer.', 'Full-stack Developer','& System Adminstrator; .'],
      typeSpeed: 50,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
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