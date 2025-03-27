import React, { useRef, useEffect } from 'react';
import ForceGraph3D from 'react-force-graph-3d';

// Minimal sample data to test labels and connections
const data = {
  nodes: [
    { id: 'La_Sape_Records', label: 'La Sape Records', type: 'label' },
    { id: 'GODTET', label: 'GODTET', type: 'artist' },
    { id: 'GODTET_Album1', label: 'GODTET (Selftitled)', type: 'album', parent: 'GODTET' }
  ],
  links: [
    { source: 'La_Sape_Records', target: 'GODTET' },
    { source: 'GODTET', target: 'GODTET_Album1' }
  ]
};

const App = () => {
  const fgRef = useRef();

  useEffect(() => {
    // Delay zoom-to-fit to ensure layout is stabilized
    setTimeout(() => {
      if (fgRef.current) {
        fgRef.current.zoomToFit(400);
      }
    }, 2000);
  }, []);

  return (
    <ForceGraph3D
      ref={fgRef}
      graphData={data}
      nodeLabel={node => node.label} // Ensure node.label is a simple, plain string
      nodeAutoColorBy="type"
      linkDirectionalParticles={2}
      linkDirectionalParticleSpeed={0.005}
      onNodeHover={node => {
        // Optionally, you can log to debug hover issues
        console.log('Hovering over:', node);
      }}
    />
  );
};

export default App;
