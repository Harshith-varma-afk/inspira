export default function NetworkBackground({ className = '' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 800 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <g stroke="#2563EB" strokeWidth="1" opacity="0.35">
        <line x1="80" y1="120" x2="220" y2="90" />
        <line x1="220" y1="90" x2="340" y2="160" />
        <line x1="340" y1="160" x2="480" y2="110" />
        <line x1="480" y1="110" x2="620" y2="180" />
        <line x1="220" y1="90" x2="180" y2="260" />
        <line x1="340" y1="160" x2="300" y2="320" />
        <line x1="480" y1="110" x2="520" y2="280" />
        <line x1="180" y1="260" x2="300" y2="320" />
        <line x1="300" y1="320" x2="520" y2="280" />
        <line x1="300" y1="320" x2="420" y2="420" />
        <line x1="520" y1="280" x2="640" y2="380" />
        <line x1="420" y1="420" x2="640" y2="380" />
        <line x1="80" y1="120" x2="60" y2="340" />
        <line x1="60" y1="340" x2="180" y2="260" />
        <line x1="620" y1="180" x2="720" y2="300" />
        <line x1="720" y1="300" x2="640" y2="380" />
        <line x1="420" y1="420" x2="280" y2="500" />
        <line x1="640" y1="380" x2="520" y2="520" />
      </g>
      <g fill="#4F46E5">
        <circle cx="80" cy="120" r="4" opacity="0.5" />
        <circle cx="220" cy="90" r="5" opacity="0.6" />
        <circle cx="340" cy="160" r="4.5" opacity="0.55" />
        <circle cx="480" cy="110" r="4" opacity="0.5" />
        <circle cx="620" cy="180" r="5" opacity="0.6" />
        <circle cx="180" cy="260" r="4" opacity="0.5" />
        <circle cx="300" cy="320" r="6" opacity="0.7" />
        <circle cx="520" cy="280" r="4.5" opacity="0.55" />
        <circle cx="60" cy="340" r="3.5" opacity="0.45" />
        <circle cx="720" cy="300" r="4" opacity="0.5" />
        <circle cx="420" cy="420" r="5" opacity="0.6" />
        <circle cx="640" cy="380" r="4" opacity="0.5" />
        <circle cx="280" cy="500" r="3.5" opacity="0.45" />
        <circle cx="520" cy="520" r="4" opacity="0.5" />
      </g>
    </svg>
  )
}
