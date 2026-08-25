'use client';

import React, { useEffect, useState, useMemo, useRef } from 'react';
import { Search, ZoomIn, ZoomOut, RotateCcw, BookOpen, ArrowRight, Compass } from 'lucide-react';
import { CoronaMark } from '@/components/Navigation';
import type { KnowledgeNode, KnowledgeEdge } from '@/lib/types';

interface KnowledgeGraphVisualizerProps {
  nodes: KnowledgeNode[];
  edges: KnowledgeEdge[];
  onSelectConcept?: (concept: string) => void;
  isLoading?: boolean;
}

/* The fire is blue: every category is a shade of the same flame,
   from deep marine to the palest corona. */
const CATEGORY_COLORS: Record<string, { bg: string; border: string; text: string; glow: string; pillBg: string; pillText: string }> = {
  core: { bg: '#1D4ED8', border: '#1E40AF', text: '#FFFFFF', glow: 'rgba(29, 78, 216, 0.35)', pillBg: '#DBEAFE', pillText: '#1E40AF' },
  technique: { bg: '#0891B2', border: '#0E7490', text: '#FFFFFF', glow: 'rgba(8, 145, 178, 0.35)', pillBg: '#CFFAFE', pillText: '#0E7490' },
  architecture: { bg: '#4F46E5', border: '#4338CA', text: '#FFFFFF', glow: 'rgba(79, 70, 229, 0.35)', pillBg: '#E0E7FF', pillText: '#4338CA' },
  formula: { bg: '#0284C7', border: '#0369A1', text: '#FFFFFF', glow: 'rgba(2, 132, 199, 0.35)', pillBg: '#E0F2FE', pillText: '#0369A1' },
  tradeoff: { bg: '#64748B', border: '#475569', text: '#FFFFFF', glow: 'rgba(100, 116, 139, 0.35)', pillBg: '#E2E8F0', pillText: '#475569' },
  concept: { bg: '#2563EB', border: '#1D4ED8', text: '#FFFFFF', glow: 'rgba(37, 99, 235, 0.35)', pillBg: '#DBEAFE', pillText: '#1D4ED8' },
};

export function KnowledgeGraphVisualizer({
  nodes = [],
  edges = [],
  onSelectConcept,
  isLoading = false,
}: KnowledgeGraphVisualizerProps) {
  const [selectedNode, setSelectedNode] = useState<KnowledgeNode | null>(null);
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // The golden-angle layout below calls Math.cos/Math.sin, whose last-ulp
  // results can differ between the server's Node V8 and the client's browser
  // V8. Rendering those floats during SSR produces a hydration mismatch on
  // SVG attributes. Defer the SVG until after mount: SSR serves the skeleton,
  // the client draws the constellation post-hydration.
  useEffect(() => {
    setMounted(true);
  }, []);

  // Filter nodes
  const filteredNodes = useMemo(() => {
    return nodes.filter((node) => {
      const matchCat = filterCategory === 'all' || node.category === filterCategory;
      const matchQuery =
        !searchQuery ||
        node.concept.toLowerCase().includes(searchQuery.toLowerCase()) ||
        node.summary.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCat && matchQuery;
    });
  }, [nodes, filterCategory, searchQuery]);

  // Compute node positions using physics distribution
  const nodePositions = useMemo(() => {
    const pos = new Map<string, { x: number; y: number }>();
    const total = filteredNodes.length;
    if (total === 0) return pos;

    const width = 800;
    const height = 500;
    const centerX = width / 2;
    const centerY = height / 2;

    filteredNodes.forEach((node, i) => {
      const angle = i * 2.39996323; // Golden angle in radians
      const radius = Math.min(centerX, centerY) * 0.75 * Math.sqrt((i + 1) / (total + 1));
      const x = centerX + radius * Math.cos(angle);
      const y = centerY + radius * Math.sin(angle);
      pos.set(node.concept.toLowerCase().trim(), { x, y });
      pos.set(node.id, { x, y });
    });

    return pos;
  }, [filteredNodes]);

  const activeEdges = useMemo(() => {
    const visibleConcepts = new Set(filteredNodes.map((n) => n.concept.toLowerCase().trim()));
    return edges.filter((e) => {
      const hasSource = visibleConcepts.has(e.sourceConcept.toLowerCase().trim());
      const hasTarget = visibleConcepts.has(e.targetConcept.toLowerCase().trim());
      return hasSource && hasTarget;
    });
  }, [edges, filteredNodes]);

  const handleNodeClick = (node: KnowledgeNode) => {
    setSelectedNode(node);
    if (onSelectConcept) onSelectConcept(node.concept);
  };

  return (
    <div className="overflow-hidden flex flex-col h-full rounded-xl border border-beacon-100 bg-white">
      {/* Header Controls */}
      <div className="p-4 border-b border-beacon-100 flex flex-wrap items-center justify-between gap-3 bg-beacon-50/50">
        <div className="flex items-center gap-3">
          <Compass className="w-5 h-5 text-beacon-600 animate-spin-slow" />
          <div>
            <h3 className="text-sm font-bold text-marine-900 flex items-center gap-2 flex-wrap">
              Star Chart
              <span className="chart-annotation px-2 py-0.5 rounded-full bg-white text-beacon-700 border border-beacon-200">
                {nodes.length} stars &bull; {edges.length} bearings
              </span>
            </h3>
            <p className="text-xs text-marine-500">
              Spreading like the fire along the masts of your unlocked curriculum
            </p>
          </div>
        </div>

        {/* Filters and Controls */}
        <div className="flex items-center gap-2">
          {/* Search */}
          <div className="relative">
            <Search className="w-3.5 h-3.5 absolute left-2.5 top-2.5 text-marine-400" />
            <input
              type="text"
              placeholder="Search concepts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-8 pr-3 py-1.5 bg-white border border-beacon-200 rounded-full text-xs text-marine-800 placeholder-marine-400 focus:outline-none focus:border-beacon-500 w-36 sm:w-44 transition"
            />
          </div>

          {/* Category Filter */}
          <select
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
            className="bg-white border border-beacon-200 rounded-full text-xs text-marine-700 px-3 py-1.5 focus:outline-none focus:border-beacon-500 font-medium"
          >
            <option value="all">All Categories</option>
            <option value="core">Core Pillars</option>
            <option value="architecture">Architectures</option>
            <option value="technique">Techniques</option>
            <option value="formula">Formulas / Proofs</option>
            <option value="tradeoff">Tradeoffs</option>
          </select>

          {/* Zoom controls */}
          <div className="flex items-center bg-white border border-beacon-200 rounded-full p-0.5">
            <button
              onClick={() => setZoomLevel((z) => Math.min(1.6, z + 0.15))}
              className="p-1.5 hover:text-beacon-700 text-marine-400 transition rounded-full"
              title="Zoom in"
            >
              <ZoomIn className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setZoomLevel((z) => Math.max(0.6, z - 0.15))}
              className="p-1.5 hover:text-beacon-700 text-marine-400 transition rounded-full"
              title="Zoom out"
            >
              <ZoomOut className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setZoomLevel(1)}
              className="p-1.5 hover:text-beacon-700 text-marine-400 transition rounded-full"
              title="Reset view"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Visual Canvas */}
      <div className="relative flex-1 min-h-[380px] bg-white overflow-hidden" ref={containerRef}>
        {isLoading ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/70 backdrop-blur-xs z-10">
            <div className="w-8 h-8 border-3 border-beacon-500 border-t-transparent rounded-full animate-spin mb-2" />
            <span className="text-xs text-beacon-700 font-semibold">Illuminating the constellation...</span>
          </div>
        ) : nodes.length === 0 ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
            <div className="w-16 h-16 rounded-full bg-beacon-50 border border-beacon-200 flex items-center justify-center mb-4 text-beacon-500">
              <CoronaMark className="w-8 h-8" />
            </div>
            <h4 className="font-display text-base font-semibold text-marine-900 mb-1">The sky is still overcast</h4>
            <p className="text-xs text-marine-500 max-w-sm mb-4 leading-relaxed">
              No stars have been sighted yet. Once your instructor triggers a release,
              the beacon will extract and fix each concept to your chart.
            </p>
          </div>
        ) : !mounted ? (
          // SSR placeholder: identical tree on server and client, no float
          // attributes. The SVG mounts after hydration (mounted=true).
          <div className="relative flex-1 min-h-[380px] bg-white overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center bg-white/70 backdrop-blur-xs">
              <div className="w-8 h-8 border-3 border-beacon-500 border-t-transparent rounded-full animate-spin" />
            </div>
          </div>
        ) : (
          <svg
            viewBox="0 0 800 500"
            className="w-full h-full cursor-grab active:cursor-grabbing transition-transform duration-200"
            style={{ transform: `scale(${zoomLevel})`, transformOrigin: 'center center' }}
          >
            {/* Background Grid Pattern */}
            <defs>
              <pattern id="graph-grid-light" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(29, 78, 216, 0.07)" strokeWidth="1" />
              </pattern>
              <marker
                id="arrowhead-light"
                markerWidth="8"
                markerHeight="6"
                refX="14"
                refY="3"
                orient="auto"
              >
                <polygon points="0 0, 8 3, 0 6" fill="#93C5FD" />
              </marker>
            </defs>
            <rect width="100%" height="100%" fill="url(#graph-grid-light)" />

            {/* Edges */}
            {activeEdges.map((edge) => {
              const src = nodePositions.get(edge.sourceConcept.toLowerCase().trim());
              const tgt = nodePositions.get(edge.targetConcept.toLowerCase().trim());
              if (!src || !tgt) return null;

              const isHighlighted =
                selectedNode &&
                (selectedNode.concept.toLowerCase() === edge.sourceConcept.toLowerCase() ||
                  selectedNode.concept.toLowerCase() === edge.targetConcept.toLowerCase());

              return (
                <g key={edge.id || `${edge.sourceConcept}-${edge.targetConcept}`}>
                  <line
                    x1={src.x}
                    y1={src.y}
                    x2={tgt.x}
                    y2={tgt.y}
                    stroke={isHighlighted ? '#2563EB' : 'rgba(147, 197, 253, 0.55)'}
                    strokeWidth={isHighlighted ? 2.5 : 1.2}
                    strokeDasharray={edge.relationshipType === 'prerequisite' ? '4 3' : undefined}
                    markerEnd="url(#arrowhead-light)"
                  />
                  {isHighlighted && (
                    <text
                      x={(src.x + tgt.x) / 2}
                      y={(src.y + tgt.y) / 2 - 4}
                      fill="#1D4ED8"
                      fontSize="9"
                      fontWeight="bold"
                      fontFamily="sans-serif"
                      textAnchor="middle"
                    >
                      {edge.relationshipType}
                    </text>
                  )}
                </g>
              );
            })}

            {/* Nodes */}
            {filteredNodes.map((node) => {
              const pos = nodePositions.get(node.concept.toLowerCase().trim());
              if (!pos) return null;

              const isSelected = selectedNode?.id === node.id;
              const style = CATEGORY_COLORS[node.category] || CATEGORY_COLORS.concept;
              const radius = 14 + (node.importance || 3) * 2.5;

              return (
                <g
                  key={node.id}
                  transform={`translate(${pos.x}, ${pos.y})`}
                  onClick={() => handleNodeClick(node)}
                  className="cursor-pointer transition-transform hover:scale-110"
                >
                  {/* Outer glow ring */}
                  {isSelected && (
                    <circle
                      r={radius + 7}
                      fill="none"
                      stroke={style.bg}
                      strokeWidth="2.5"
                      opacity="0.8"
                      className="animate-pulse"
                    />
                  )}

                  {/* Main circle */}
                  <circle
                    r={radius}
                    fill={style.bg}
                    stroke="#FFFFFF"
                    strokeWidth="2.5"
                    style={{ filter: `drop-shadow(0 4px 6px ${style.glow})` }}
                  />

                  {/* Concept Initials */}
                  <text
                    textAnchor="middle"
                    dy="4"
                    fill="#FFFFFF"
                    fontSize={radius > 20 ? '11' : '9'}
                    fontWeight="bold"
                    pointerEvents="none"
                  >
                    {node.concept.slice(0, 2).toUpperCase()}
                  </text>

                  {/* Label */}
                  <text
                    textAnchor="middle"
                    dy={radius + 14}
                    fill={isSelected ? '#1E3A8A' : '#475569'}
                    fontSize="10"
                    fontWeight={isSelected ? 'bold' : '600'}
                    pointerEvents="none"
                  >
                    {node.concept.length > 20 ? `${node.concept.slice(0, 18)}...` : node.concept}
                  </text>
                </g>
              );
            })}
          </svg>
        )}

        {/* Selected Node Details Card Overlay */}
        {selectedNode && (
          <div className="absolute bottom-3 left-3 right-3 sm:right-auto sm:w-96 bg-white/95 backdrop-blur-md border border-beacon-200 rounded-xl p-4 shadow-xl shadow-beacon-500/10 z-20 transition-all animate-in fade-in slide-in-from-bottom-2">
            <div className="flex items-start justify-between mb-2">
              <div>
                <span
                  className="chart-annotation px-2 py-0.5 rounded-full mr-2"
                  style={{
                    backgroundColor: CATEGORY_COLORS[selectedNode.category]?.pillBg,
                    color: CATEGORY_COLORS[selectedNode.category]?.pillText,
                  }}
                >
                  {selectedNode.category}
                </span>
                <span className="text-xs text-beacon-600 font-bold">
                  Magnitude: {'✦'.repeat(selectedNode.importance || 3)}
                </span>
                <h4 className="font-display text-sm font-semibold text-marine-900 mt-1">{selectedNode.concept}</h4>
              </div>
              <button
                onClick={() => setSelectedNode(null)}
                className="text-marine-400 hover:text-marine-800 text-xs p-1 rounded-md"
              >
                ✕
              </button>
            </div>

            <p className="text-xs text-marine-600 leading-relaxed mb-3">{selectedNode.summary}</p>

            <div className="flex items-center justify-between pt-2 border-t border-beacon-100 text-[11px] text-marine-500">
              <span className="flex items-center gap-1 font-medium text-beacon-700">
                <BookOpen className="w-3.5 h-3.5 text-beacon-500" />
                Lesson: {selectedNode.lessonId.slice(0, 8)}...
              </span>
              <button
                onClick={() => onSelectConcept && onSelectConcept(selectedNode.concept)}
                className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-beacon-50 hover:bg-beacon-100 text-beacon-700 font-bold transition"
              >
                Ask the beacon <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Legend Footer */}
      <div className="px-4 py-2.5 border-t border-beacon-100 bg-beacon-50/50 flex flex-wrap items-center justify-between text-[11px] text-marine-600 gap-2">
        <div className="flex items-center gap-3.5 flex-wrap">
          <span className="chart-annotation">Shades of the flame:</span>
          {Object.entries(CATEGORY_COLORS).map(([cat, colors]) => (
            <div key={cat} className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full ring-1 ring-black/10" style={{ backgroundColor: colors.bg }} />
              <span className="capitalize font-medium">{cat}</span>
            </div>
          ))}
        </div>
        <div className="chart-annotation flex items-center gap-2">
          <span>Dashed: prerequisite</span>
          <span>&bull;</span>
          <span>Solid: relational</span>
        </div>
      </div>
    </div>
  );
}
