import React, { useEffect, useRef } from 'react';
import ForceGraph3D from 'force-graph';

const App = () => {
  const containerRef = useRef(null);
  const graphRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const Graph = ForceGraph3D()(containerRef.current);

    graphRef.current = Graph;

    const nodes = [
      { id: 'La Sape Records', group: 'label' },
      { id: 'GODTET', group: 'artist' },
      { id: 'GODTET III', group: 'album' },
      { id: 'Godriguez', group: 'artist' },
      { id: "Vol. 1 '14-18", group: 'album' },
      { id: 'Horatio Luna', group: 'artist' },
      { id: 'Yes Doctor', group: 'album' },
      { id: 'David Versace', group: 'artist' },
      { id: 'Okra', group: 'album' },
      { id: 'On-Ly', group: 'artist' },
      { id: 'Broth', group: 'album' }
    ];

    const links = [
      { source: 'La Sape Records', target: 'GODTET' },
      { source: 'GODTET', target: 'GODTET III' },
      { source: 'La Sape Records', target: 'Godriguez' },
      { source: 'Godriguez', target: "Vol. 1 '14-18" },
      { source: 'La Sape Records', target: 'Horatio Luna' },
      { source: 'Horatio Luna', target: 'Yes Doctor' },
      { source: 'La Sape Records', target: 'David Versace' },
      { source: 'David Versace', target: 'Okra' },
      { source: 'La Sape Records', target: 'On-Ly' },
      { source: 'On-Ly', target: 'Broth' }
    ];

    Graph
      .graphData({ nodes, links })
      .nodeLabel('id')
      .nodeAutoColorBy('group')
      .backgroundColor('#000011')
      .d3Force('charge').strength(-250);

    // Wait a moment and zoom to fit after rendering begins
    setTimeout(() => {
      Graph.zoomToFit(400, 100);
    }, 1500);

    return () => {
      Graph._destructor?.();
    };
  }, []);

  return <div ref={containerRef} style={{ width: '100vw', height: '100vh' }} />;
};

export default App;
