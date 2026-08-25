'use client';

import React, { useEffect, useState, useMemo, useRef } from 'react';
import { Network, Sparkles, Filter, Search, Info, ZoomIn, ZoomOut, RotateCcw, BookOpen, ArrowRight, Compass } from 'lucide-react';
import type { KnowledgeNode, KnowledgeEdge } from '@/lib/types';

interface KnowledgeGraphVisualizerProps {
  nodes: KnowledgeNode[];
  edges: KnowledgeEdge[];
  onSelectConcept?: (concept: string) => void;
  isLoading?: boolean;
}

const CATEGORY_COLORS: Record<string, { bg: string; border: string; text: string; glow: string; pillBg: string; pillText: string }> = {
  core: { bg: '#0284C7', border: '#0369A1', text: '#FFFFFF', glow: 'rgba(2, 132, 199, 0.3)', pillBg: '#E0F2FE', pillText: '#0369A1' },
  technique: { bg: '#0D9488', border: '#0F766E', text: '#FFFFFF', glow: 'rgba(13, 148, 136, 0.3)', pillBg: '#CCFBF1', pillText: '#0F766E' },
  architecture: { bg: '#4F46E5', border: '#4338CA', text: '#FFFFFF', glow: 'rgba(79, 70, 229, 0.3)', pillBg: '#EEF2FF', pillText: '#4338CA' },
  formula: { bg: '#D97706', border: '#B45309', text: '#FFFFFF', glow: 'rgba(217, 119, 6, 0.3)', pillBg: '#FEF3C7', pillText: '#B45309' },
  tradeoff: { bg: '#E11D48', border: '#BE123C', text: '#FFFFFF', glow: 'rgba(225, 29, 72, 0.3)', pillBg: '#FFE4E6', pillText: '#BE123C' },
  concept: { bg: '#0284C7', border: '#0369A1', text: '#FFFFFF', glow: 'rgba(2, 132, 199, 0.3)', pillBg: '#E0F2FE', pillText: '#0369A1' },
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
    <div className="bg-white rounded-2xl border border-sky-100 shadow-xl shadow-sky-500/5 overflow-hidden flex flex-col h-full">
      {/* Header Controls */}
      <div className="p-4 border-b border-sky-100 flex flex-wrap items-center justify-between gap-3 bg-gradient-to-r from-sky-50/70 via-white to-blue-50/50">
        <div className="flex items-center space-x-3">
          <div className="p-2 rounded-xl bg-sky-100 border border-sky-200 text-sky-700 shadow-2xs">
            <Compass className="w-4 h-4 animate-spin-slow" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
              Second Brain Knowledge Constellation
              <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-sky-100 text-sky-800 font-semibold border border-sky-200">
                {nodes.length} Nodes &bull; {edges.length} Edges
              </span>
            </h3>
            <p className="text-xs text-slate-500">
              Expands like St. Elmo&apos;s Fire across the masts of your unlocked curriculum
            </p>
          </div>
        </div>

        {/* Filters and Controls */}
        <div className="flex items-center space-x-2">
          {/* Search */}
          <div className="relative">
            <Search className="w-3.5 h-3.5 absolute left-2.5 top-2.5 text-slate-400" />
            <input
              type="text"
              placeholder="Search concepts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-8 pr-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:bg-white w-36 sm:w-44 transition"
            />
          </div>

          {/* Category Filter */}
          <select
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
            className="bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-700 px-2.5 py-1.5 focus:outline-none focus:border-sky-500 font-medium"
          >
            <option value="all">All Categories</option>
            <option value="core">Core Pillars</option>
            <option value="architecture">Architectures</option>
            <option value="technique">Techniques</option>
            <option value="formula">Formulas / Proofs</option>
            <option value="tradeoff">Tradeoffs</option>
          </select>

          {/* Zoom controls */}
          <div className="flex items-center bg-slate-50 border border-slate-200 rounded-lg p-0.5">
            <button
              onClick={() => setZoomLevel((z) => Math.min(1.6, z + 0.15))}
              className="p-1.5 hover:text-sky-700 text-slate-500 transition rounded"
              title="Zoom in"
            >
              <ZoomIn className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setZoomLevel((z) => Math.max(0.6, z - 0.15))}
              className="p-1.5 hover:text-sky-700 text-slate-500 transition rounded"
              title="Zoom out"
            >
              <ZoomOut className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setZoomLevel(1)}
              className="p-1.5 hover:text-sky-700 text-slate-500 transition rounded"
              title="Reset view"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Visual Canvas */}
      <div className="relative flex-1 min-h-[380px] bg-gradient-to-b from-sky-50/30 to-white overflow-hidden" ref={containerRef}>
        {isLoading ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/70 backdrop-blur-xs z-10">
            <div className="w-8 h-8 border-3 border-sky-500 border-t-transparent rounded-full animate-spin mb-2" />
            <span className="text-xs text-sky-800 font-semibold">Illuminating Second Brain Nodes...</span>
          </div>
        ) : nodes.length === 0 ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
            <div className="w-16 h-16 rounded-2xl bg-sky-50 border border-sky-200 flex items-center justify-center mb-4 text-sky-500 shadow-inner">
              <Sparkles className="w-8 h-8" />
            </div>
            <h4 className="text-sm font-bold text-slate-800 mb-1">Knowledge Constellation is Clear</h4>
            <p className="text-xs text-slate-500 max-w-sm mb-4 leading-relaxed">
              No course modules have been released yet. Once your instructor triggers a release, Gemini 3.7 Flash will automatically extract and illuminate conceptual nodes here.
            </p>
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
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(2, 132, 199, 0.06)" strokeWidth="1" />
              </pattern>
              <marker
                id="arrowhead-light"
                markerWidth="8"
                markerHeight="6"
                refX="14"
                refY="3"
                orient="auto"
              >
                <polygon points="0 0, 8 3, 0 6" fill="#94A3B8" />
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
                    stroke={isHighlighted ? '#0284C7' : 'rgba(148, 163, 184, 0.45)'}
                    strokeWidth={isHighlighted ? 2.5 : 1.2}
                    strokeDasharray={edge.relationshipType === 'prerequisite' ? '4 3' : undefined}
                    markerEnd="url(#arrowhead-light)"
                  />
                  {isHighlighted && (
                    <text
                      x={(src.x + tgt.x) / 2}
                      y={(src.y + tgt.y) / 2 - 4}
                      fill="#0369A1"
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
                    fill={isSelected ? '#0C4A6E' : '#334155'}
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
          <div className="absolute bottom-3 left-3 right-3 sm:right-auto sm:w-96 bg-white/95 backdrop-blur-md border border-sky-200 rounded-2xl p-4 shadow-xl shadow-sky-500/10 z-20 transition-all animate-in fade-in slide-in-from-bottom-2">
            <div className="flex items-start justify-between mb-2">
              <div>
                <span
                  className="text-[10px] uppercase px-2.5 py-0.5 rounded-full font-bold mr-2"
                  style={{
                    backgroundColor: CATEGORY_COLORS[selectedNode.category]?.pillBg,
                    color: CATEGORY_COLORS[selectedNode.category]?.pillText,
                  }}
                >
                  {selectedNode.category}
                </span>
                <span className="text-xs text-amber-600 font-bold">
                  Importance: {'★'.repeat(selectedNode.importance || 3)}
                </span>
                <h4 className="text-sm font-extrabold text-slate-900 mt-1">{selectedNode.concept}</h4>
              </div>
              <button
                onClick={() => setSelectedNode(null)}
                className="text-slate-400 hover:text-slate-700 text-xs p-1 rounded-md"
              >
                ✕
              </button>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed mb-3">{selectedNode.summary}</p>

            <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-[11px] text-slate-500">
              <span className="flex items-center gap-1 font-medium text-sky-700">
                <BookOpen className="w-3.5 h-3.5 text-sky-600" />
                Lesson: {selectedNode.lessonId.slice(0, 8)}...
              </span>
              <button
                onClick={() => onSelectConcept && onSelectConcept(selectedNode.concept)}
                className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-sky-50 hover:bg-sky-100 text-sky-800 font-bold transition"
              >
                Ask Tutor <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Legend Footer */}
      <div className="px-4 py-2.5 border-t border-sky-100 bg-sky-50/40 flex flex-wrap items-center justify-between text-[11px] text-slate-600 gap-2">
        <div className="flex items-center space-x-3.5">
          <span className="font-bold text-slate-700">Categories:</span>
          {Object.entries(CATEGORY_COLORS).map(([cat, colors]) => (
            <div key={cat} className="flex items-center space-x-1.5">
              <span className="w-2.5 h-2.5 rounded-full ring-1 ring-black/10" style={{ backgroundColor: colors.bg }} />
              <span className="capitalize font-medium">{cat}</span>
            </div>
          ))}
        </div>
        <div className="flex items-center space-x-2 text-slate-500 font-medium">
          <span>Dashed: Prerequisite</span>
          <span>&bull;</span>
          <span>Solid: Relational Edge</span>
        </div>
      </div>
    </div>
  );
}
