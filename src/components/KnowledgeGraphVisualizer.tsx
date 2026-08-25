'use client';

import React, { useEffect, useState, useMemo, useRef } from 'react';
import { Network, Sparkles, Filter, Search, Info, ZoomIn, ZoomOut, RotateCcw, BookOpen, ArrowRight } from 'lucide-react';
import type { KnowledgeNode, KnowledgeEdge } from '@/lib/types';

interface KnowledgeGraphVisualizerProps {
  nodes: KnowledgeNode[];
  edges: KnowledgeEdge[];
  onSelectConcept?: (concept: string) => void;
  isLoading?: boolean;
}

const CATEGORY_COLORS: Record<string, { bg: string; border: string; text: string; glow: string }> = {
  core: { bg: '#3B82F6', border: '#60A5FA', text: '#DBEAFE', glow: 'rgba(59, 130, 246, 0.4)' },
  technique: { bg: '#10B981', border: '#34D399', text: '#D1FAE5', glow: 'rgba(16, 185, 129, 0.4)' },
  architecture: { bg: '#8B5CF6', border: '#A78BFA', text: '#EDE9FE', glow: 'rgba(139, 92, 246, 0.4)' },
  formula: { bg: '#F59E0B', border: '#FBBF24', text: '#FEF3C7', glow: 'rgba(245, 158, 11, 0.4)' },
  tradeoff: { bg: '#EF4444', border: '#F87171', text: '#FEE2E2', glow: 'rgba(239, 68, 68, 0.4)' },
  concept: { bg: '#06B6D4', border: '#22D3EE', text: '#CFFAFE', glow: 'rgba(6, 182, 212, 0.4)' },
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
  const containerRef = useRef<HTMLDivElement>(null);

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

  // Compute node positions using a deterministic radial layout with physics distribution
  const nodePositions = useMemo(() => {
    const pos = new Map<string, { x: number; y: number }>();
    const total = filteredNodes.length;
    if (total === 0) return pos;

    const width = 800;
    const height = 500;
    const centerX = width / 2;
    const centerY = height / 2;

    filteredNodes.forEach((node, i) => {
      // Golden angle distribution
      const angle = i * 2.39996323; // Golden angle in radians
      const radius = Math.min(centerX, centerY) * 0.75 * Math.sqrt((i + 1) / (total + 1));
      const x = centerX + radius * Math.cos(angle);
      const y = centerY + radius * Math.sin(angle);
      pos.set(node.concept.toLowerCase().trim(), { x, y });
      pos.set(node.id, { x, y });
    });

    return pos;
  }, [filteredNodes]);

  // Connected edges for filtered nodes
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
    <div className="bg-slate-900/90 rounded-xl border border-slate-800 shadow-xl overflow-hidden flex flex-col h-full">
      {/* Header Controls */}
      <div className="p-4 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3 bg-slate-950/40">
        <div className="flex items-center space-x-2.5">
          <div className="p-1.5 rounded-lg bg-indigo-500/10 border border-indigo-500/30 text-indigo-400">
            <Network className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-slate-100 flex items-center gap-2">
              Second Brain Knowledge Graph
              <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-indigo-950/80 text-indigo-300 border border-indigo-800/60">
                {nodes.length} Nodes &bull; {edges.length} Edges
              </span>
            </h3>
            <p className="text-xs text-slate-400">
              Expands automatically as your courseware is progressively released
            </p>
          </div>
        </div>

        {/* Filters and Controls */}
        <div className="flex items-center space-x-2">
          {/* Search */}
          <div className="relative">
            <Search className="w-3.5 h-3.5 absolute left-2.5 top-2.5 text-slate-500" />
            <input
              type="text"
              placeholder="Search concepts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-8 pr-3 py-1 bg-slate-950 border border-slate-800 rounded-lg text-xs text-slate-200 focus:outline-none focus:border-indigo-500 w-36 sm:w-44"
            />
          </div>

          {/* Category Filter */}
          <select
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
            className="bg-slate-950 border border-slate-800 rounded-lg text-xs text-slate-300 px-2.5 py-1 focus:outline-none focus:border-indigo-500"
          >
            <option value="all">All Categories</option>
            <option value="core">Core Pillars</option>
            <option value="architecture">Architectures</option>
            <option value="technique">Techniques</option>
            <option value="formula">Formulas / Proofs</option>
            <option value="tradeoff">Tradeoffs</option>
          </select>

          {/* Zoom controls */}
          <div className="flex items-center bg-slate-950 border border-slate-800 rounded-lg p-0.5">
            <button
              onClick={() => setZoomLevel((z) => Math.min(1.6, z + 0.15))}
              className="p-1 hover:text-white text-slate-400 transition"
              title="Zoom in"
            >
              <ZoomIn className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setZoomLevel((z) => Math.max(0.6, z - 0.15))}
              className="p-1 hover:text-white text-slate-400 transition"
              title="Zoom out"
            >
              <ZoomOut className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setZoomLevel(1)}
              className="p-1 hover:text-white text-slate-400 transition"
              title="Reset view"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Visual Canvas */}
      <div className="relative flex-1 min-h-[380px] bg-[#070b14] overflow-hidden" ref={containerRef}>
        {isLoading ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-950/60 backdrop-blur-sm z-10">
            <div className="w-8 h-8 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin mb-2" />
            <span className="text-xs text-slate-400 font-mono">Syncing Second Brain Graph...</span>
          </div>
        ) : nodes.length === 0 ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
            <div className="w-14 h-14 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center mb-4 text-slate-500">
              <Sparkles className="w-7 h-7" />
            </div>
            <h4 className="text-sm font-semibold text-slate-200 mb-1">Knowledge Graph is Empty</h4>
            <p className="text-xs text-slate-400 max-w-sm mb-4">
              No course modules have been released yet. Once your instructor triggers a release, Gemini 3.7 Flash will automatically extract and link conceptual nodes here.
            </p>
          </div>
        ) : (
          <svg
            viewBox="0 0 800 500"
            className="w-full h-full cursor-grab active:cursor-grabbing transition-transform duration-200"
            style={{ transform: `scale(${zoomLevel})`, transformOrigin: 'center center' }}
          >
            {/* Background Grid Accent */}
            <defs>
              <pattern id="graph-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255, 255, 255, 0.03)" strokeWidth="1" />
              </pattern>
              <marker
                id="arrowhead"
                markerWidth="8"
                markerHeight="6"
                refX="14"
                refY="3"
                orient="auto"
              >
                <polygon points="0 0, 8 3, 0 6" fill="#64748B" />
              </marker>
            </defs>
            <rect width="100%" height="100%" fill="url(#graph-grid)" />

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
                    stroke={isHighlighted ? '#818CF8' : 'rgba(100, 116, 139, 0.35)'}
                    strokeWidth={isHighlighted ? 2.5 : 1.2}
                    strokeDasharray={edge.relationshipType === 'prerequisite' ? '4 3' : undefined}
                    markerEnd="url(#arrowhead)"
                  />
                  {/* Midpoint Label if highlighted */}
                  {isHighlighted && (
                    <text
                      x={(src.x + tgt.x) / 2}
                      y={(src.y + tgt.y) / 2 - 4}
                      fill="#C7D2FE"
                      fontSize="9"
                      fontFamily="monospace"
                      textAnchor="middle"
                      className="bg-slate-900"
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
                  {/* Glow halo if selected */}
                  {isSelected && (
                    <circle
                      r={radius + 8}
                      fill="none"
                      stroke={style.border}
                      strokeWidth="2"
                      opacity="0.8"
                      className="animate-pulse"
                    />
                  )}

                  {/* Outer circle */}
                  <circle
                    r={radius}
                    fill={style.bg}
                    stroke={isSelected ? '#FFFFFF' : style.border}
                    strokeWidth={isSelected ? 3 : 1.5}
                    opacity="0.9"
                    style={{ filter: `drop-shadow(0 0 8px ${style.glow})` }}
                  />

                  {/* Concept Initial */}
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

                  {/* Node Label Below */}
                  <text
                    textAnchor="middle"
                    dy={radius + 14}
                    fill={isSelected ? '#FFFFFF' : '#CBD5E1'}
                    fontSize="10"
                    fontWeight={isSelected ? 'bold' : 'normal'}
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
          <div className="absolute bottom-3 left-3 right-3 sm:right-auto sm:w-96 bg-slate-900/95 backdrop-blur-md border border-slate-700 rounded-xl p-4 shadow-2xl z-20 transition-all animate-in fade-in slide-in-from-bottom-2">
            <div className="flex items-start justify-between mb-2">
              <div>
                <span
                  className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-full font-semibold mr-2"
                  style={{
                    backgroundColor: CATEGORY_COLORS[selectedNode.category]?.bg + '33',
                    color: CATEGORY_COLORS[selectedNode.category]?.border,
                    border: `1px solid ${CATEGORY_COLORS[selectedNode.category]?.border}66`,
                  }}
                >
                  {selectedNode.category}
                </span>
                <span className="text-xs text-slate-400 font-mono">
                  Importance: {'★'.repeat(selectedNode.importance || 3)}
                </span>
                <h4 className="text-sm font-bold text-white mt-1">{selectedNode.concept}</h4>
              </div>
              <button
                onClick={() => setSelectedNode(null)}
                className="text-slate-400 hover:text-white text-xs p-1"
              >
                ✕
              </button>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed mb-3">{selectedNode.summary}</p>

            <div className="flex items-center justify-between pt-2 border-t border-slate-800 text-[11px] text-slate-400">
              <span className="flex items-center gap-1">
                <BookOpen className="w-3.5 h-3.5 text-indigo-400" />
                Lesson Source: {selectedNode.lessonId.slice(0, 8)}...
              </span>
              <button
                onClick={() => onSelectConcept && onSelectConcept(selectedNode.concept)}
                className="flex items-center gap-1 text-indigo-300 hover:text-indigo-200 font-medium"
              >
                Ask Tutor <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Legend Footer */}
      <div className="px-4 py-2 border-t border-slate-800 bg-slate-950/60 flex flex-wrap items-center justify-between text-[11px] text-slate-400 gap-2">
        <div className="flex items-center space-x-3">
          <span className="font-semibold text-slate-500">Categories:</span>
          {Object.entries(CATEGORY_COLORS).map(([cat, colors]) => (
            <div key={cat} className="flex items-center space-x-1">
              <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: colors.bg }} />
              <span className="capitalize">{cat}</span>
            </div>
          ))}
        </div>
        <div className="flex items-center space-x-3 text-slate-500">
          <span>Dashed line: Prerequisite</span>
          <span>&bull;</span>
          <span>Solid line: Relational edge</span>
        </div>
      </div>
    </div>
  );
}
