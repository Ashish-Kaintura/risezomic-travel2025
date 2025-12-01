import React, { useState, useEffect } from 'react';
import { Sparkles, Zap, Heart, Star, Circle } from 'lucide-react';

// 1. Magnetic Cursor with Glow
export function MagneticCursor({ children }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => setPosition({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const handleEnter = () => setIsHovering(true);
    const handleLeave = () => setIsHovering(false);
    const elements = document.querySelectorAll('a, button, input, textarea, select, [role="button"], .cursor-hover');
    elements.forEach(el => {
      el.addEventListener('mouseenter', handleEnter);
      el.addEventListener('mouseleave', handleLeave);
    });
    return () => elements.forEach(el => {
      el.removeEventListener('mouseenter', handleEnter);
      el.removeEventListener('mouseleave', handleLeave);
    });
  }, [children]);

  return (
    <div className="cursor-none">
      <div
        className="fixed pointer-events-none z-[9999] transition-all duration-300 ease-out"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) scale(${isHovering ? 2 : 1})`,
        }}
      >
        <div className={`w-5 h-5 rounded-full ${isHovering ? 'bg-gradient-to-r from-purple-500 to-pink-500' : 'bg-black'} transition-all duration-300`} />
        <div className={`absolute inset-0 w-5 h-5 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 blur-md opacity-${isHovering ? '70' : '0'} transition-all duration-300`} />
      </div>
      <div
        className="fixed pointer-events-none z-[9998] transition-all duration-500 ease-out"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) scale(${isHovering ? 1.5 : 1})`,
        }}
      >
        <div className={`w-10 h-10 rounded-full border-2 ${isHovering ? 'border-purple-500' : 'border-gray-400'} transition-all duration-300`} />
      </div>
      {children}
    </div>
  );
}

// 2. Particle Explosion Cursor
export function ParticleCursor({ children }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState([]);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (Math.random() > 0.7) {
        const newParticle = {
          id: Date.now() + Math.random(),
          x: e.clientX,
          y: e.clientY,
          vx: (Math.random() - 0.5) * 4,
          vy: (Math.random() - 0.5) * 4,
          life: 1,
        };
        setParticles(prev => [...prev.slice(-15), newParticle]);
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setParticles(prev => prev.map(p => ({
        ...p,
        x: p.x + p.vx,
        y: p.y + p.vy,
        life: p.life - 0.02,
      })).filter(p => p.life > 0));
    }, 16);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleEnter = () => setIsHovering(true);
    const handleLeave = () => setIsHovering(false);
    const elements = document.querySelectorAll('a, button, input, textarea, select, [role="button"], .cursor-hover');
    elements.forEach(el => {
      el.addEventListener('mouseenter', handleEnter);
      el.addEventListener('mouseleave', handleLeave);
    });
    return () => elements.forEach(el => {
      el.removeEventListener('mouseenter', handleEnter);
      el.removeEventListener('mouseleave', handleLeave);
    });
  }, [children]);

  return (
    <div className="cursor-none">
      {particles.map(p => (
        <div
          key={p.id}
          className="fixed pointer-events-none z-[9998] w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-500"
          style={{
            left: `${p.x}px`,
            top: `${p.y}px`,
            transform: 'translate(-50%, -50%)',
            opacity: p.life,
          }}
        />
      ))}
      <div
        className="fixed pointer-events-none z-[9999]"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) scale(${isHovering ? 1.5 : 1})`,
        }}
      >
        <Sparkles className={`${isHovering ? 'text-yellow-500' : 'text-blue-500'} transition-colors duration-300`} size={24} />
      </div>
      {children}
    </div>
  );
}

// 3. Neon Trailing Cursor
export function NeonCursor({ children }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState([]);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setTrail(prev => [...prev.slice(-20), { x: e.clientX, y: e.clientY, id: Date.now() }]);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const handleEnter = () => setIsHovering(true);
    const handleLeave = () => setIsHovering(false);
    const elements = document.querySelectorAll('a, button, input, textarea, select, [role="button"], .cursor-hover');
    elements.forEach(el => {
      el.addEventListener('mouseenter', handleEnter);
      el.addEventListener('mouseleave', handleLeave);
    });
    return () => elements.forEach(el => {
      el.removeEventListener('mouseenter', handleEnter);
      el.removeEventListener('mouseleave', handleLeave);
    });
  }, [children]);

  return (
    <div className="cursor-none">
      {trail.map((point, index) => (
        <div
          key={point.id}
          className="fixed pointer-events-none z-[9998]"
          style={{
            left: `${point.x}px`,
            top: `${point.y}px`,
            transform: 'translate(-50%, -50%)',
            opacity: (index + 1) / trail.length * 0.5,
          }}
        >
          <div 
            className="rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 blur-sm"
            style={{
              width: `${8 + (index / trail.length) * 12}px`,
              height: `${8 + (index / trail.length) * 12}px`,
            }}
          />
        </div>
      ))}
      <div
        className="fixed pointer-events-none z-[9999]"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) scale(${isHovering ? 1.3 : 1})`,
        }}
      >
        <div className="relative">
          <div className={`w-4 h-4 rounded-full ${isHovering ? 'bg-cyan-400' : 'bg-white'} transition-all duration-300`} />
          <div className={`absolute inset-0 w-4 h-4 rounded-full bg-cyan-400 blur-md ${isHovering ? 'opacity-100' : 'opacity-50'} transition-all duration-300`} />
        </div>
      </div>
      {children}
    </div>
  );
}
