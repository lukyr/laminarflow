export const LogoSmall = () => {
  return (
    <svg width="300" height="80" viewBox="0 0 300 80" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#1e40af" stopOpacity="1" />
          <stop offset="100%" stopColor="#3b82f6" stopOpacity="1" />
        </linearGradient>
        <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
          <stop offset="50%" stopColor="#60a5fa" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#93c5fd" stopOpacity="0.4" />
        </linearGradient>
      </defs>

      <circle cx="40" cy="40" r="35" fill="url(#blueGradient)" opacity="0.1" />

      <path
        d="M 15 25 Q 40 20 65 25"
        stroke="url(#flowGradient)"
        strokeWidth="2"
        fill="none"
        opacity="0.9"
      />
      <path d="M 15 35 Q 40 30 65 35" stroke="url(#flowGradient)" strokeWidth="2.5" fill="none" />
      <path d="M 15 45 Q 40 40 65 45" stroke="url(#flowGradient)" strokeWidth="2.5" fill="none" />
      <path
        d="M 15 55 Q 40 50 65 55"
        stroke="url(#flowGradient)"
        strokeWidth="2"
        fill="none"
        opacity="0.9"
      />

      <path d="M 20 40 Q 40 35 60 40" stroke="#1e40af" strokeWidth="3" fill="none" />

      <text
        x="85"
        y="35"
        fontFamily="'Segoe UI', Arial, sans-serif"
        fontSize="20"
        fontWeight="600"
        fill="#1e40af"
      >
        Laminar
      </text>
      <text
        x="85"
        y="55"
        fontFamily="'Segoe UI', Arial, sans-serif"
        fontSize="20"
        fontWeight="300"
        fill="#3b82f6"
      >
        Flow
      </text>

      <circle cx="275" cy="40" r="2" fill="#60a5fa" />
    </svg>
  );
};

export default LogoSmall;
