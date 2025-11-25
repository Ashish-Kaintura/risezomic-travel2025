export const AirlineCursor = ({
    cursorPos,
    isHovering,
    trails,
    planes,
    cursorSize = 24,
    cursorColor = 'white',
    trailColor = 'white',
    trailOpacity = 0.6
}) => {
    return (
        <>
            <style>{`
        * {
          cursor: none !important;
        }

        /* Smooth spring-like cursor movement */
        .cursor-smooth {
          transition:
            transform 180ms cubic-bezier(0.25, 0.85, 0.35, 1.2),
            filter 250ms ease;
        }

        /* Hover glow */
        .cursor-hover-glow {
          filter: drop-shadow(0 0 10px rgba(255,255,255,0.7))
                  drop-shadow(0 0 20px rgba(255,255,255,0.3));
        }

        /* Trail fade + scale smooth */
        .trail-dot {
          transition:
            opacity 0.35s ease-out,
            transform 0.35s ease-out;
        }

        /* Flying plane animation */
        @keyframes flyToTarget {
          0% {
            transform: translate(0, 0) scale(1) rotate(-45deg);
            opacity: 1;
          }
          100% {
            transform: translate(var(--fly-x), var(--fly-y)) scale(0.25) rotate(-45deg);
            opacity: 0;
            filter: blur(3px);
          }
        }
      `}</style>

            {/* Main Cursor */}
            <div
                className={`fixed pointer-events-none z-[9999] cursor-smooth ${isHovering ? 'cursor-hover-glow' : ''
                    }`}
                style={{
                    left: cursorPos.x,
                    top: cursorPos.y,
                    transform: `translate(-50%, -50%) scale(${isHovering ? 1.55 : 1}) rotate(-45deg)`
                }}
            >
                <Plane
                    className="drop-shadow-2xl"
                    size={isHovering ? cursorSize * 1.25 : cursorSize}
                    color={cursorColor}
                    style={{
                        filter: 'blur(0.3px)'
                    }}
                />
            </div>

            {/* Trails */}
            {trails.map((trail, index) => (
                <div
                    key={trail.id}
                    className="fixed pointer-events-none rounded-full trail-dot"
                    style={{
                        left: trail.x,
                        top: trail.y,
                        width: '7px',
                        height: '7px',
                        backgroundColor: trailColor,
                        opacity: (index / trails.length) * trailOpacity,
                        transform: `translate(-50%, -50%) scale(${0.6 + index / trails.length})`,
                        zIndex: 9998
                    }}
                />
            ))}

            {/* Flying Planes */}
            {planes.map((plane) => {
                const deltaX = plane.endX - plane.startX;
                const deltaY = plane.endY - plane.startY;

                return (
                    <div
                        key={plane.id}
                        className="fixed pointer-events-none"
                        style={{
                            left: plane.startX,
                            top: plane.startY,
                            animation: 'flyToTarget 2s cubic-bezier(0.3, 0.9, 0.4, 1) forwards',
                            '--fly-x': `${deltaX}px`,
                            '--fly-y': `${deltaY}px`,
                            zIndex: 9997
                        }}
                    >
                        <Plane
                            className="drop-shadow-xl"
                            size={20}
                            color="#fbbf24"
                        />
                    </div>
                );
            })}
        </>
    );
};
