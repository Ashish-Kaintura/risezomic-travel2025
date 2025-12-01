import React, { useState, useEffect } from 'react';
import { Plane } from 'lucide-react';

// Reusable Cursor Component
export function TravelCursor({ children }) {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [trail, setTrail] = useState([]);

    useEffect(() => {
        const handleMouseMove = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });

            setTrail(prev => [...prev.slice(-8), {
                x: e.clientX,
                y: e.clientY,
                id: Date.now()
            }]);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    useEffect(() => {
        const handleMouseEnter = () => setIsHovering(true);
        const handleMouseLeave = () => setIsHovering(false);

        // Add listeners to all interactive elements
        const interactiveElements = document.querySelectorAll(
            'a, button, input, textarea, select, [role="button"], .cursor-hover'
        );

        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', handleMouseEnter);
            el.addEventListener('mouseleave', handleMouseLeave);
        });

        return () => {
            interactiveElements.forEach(el => {
                el.removeEventListener('mouseenter', handleMouseEnter);
                el.removeEventListener('mouseleave', handleMouseLeave);
            });
        };
    }, [children]);

    return (
        <div className="cursor-none">
            {/* Custom Cursor */}
            <div
                className="fixed pointer-events-none z-[9999] transition-transform duration-150"
                style={{
                    left: `${position.x}px`,
                    top: `${position.y}px`,
                    transform: `translate(-50%, -50%) scale(${isHovering ? 1.5 : 1}) rotate(-45deg)`,
                }}
            >
                <Plane
                    className={`transition-all duration-300 ${isHovering ? 'text-blue-600' : 'text-blue-500'
                        }`}
                    size={28}
                    strokeWidth={2}
                />
            </div>

            {/* Trail Effect */}
            {trail.map((point, index) => (
                <div
                    key={point.id}
                    className="fixed pointer-events-none z-[9998]"
                    style={{
                        left: `${point.x}px`,
                        top: `${point.y}px`,
                        transform: 'translate(-50%, -50%)',
                        opacity: (index + 1) / trail.length * 0.3,
                    }}
                >
                    <div
                        className="w-2 h-2 bg-blue-400 rounded-full"
                        style={{
                            transform: `scale(${(index + 1) / trail.length})`,
                        }}
                    />
                </div>
            ))}

            {/* Your App Content */}
            {children}
        </div>
    );
}