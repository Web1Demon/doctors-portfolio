import { Code } from 'lucide-react';

const Trademark = () => (
  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-[#0f172a] bg-opacity-95 border border-amber-500/30 rounded-lg px-5 py-2 shadow-xl flex items-center space-x-3 text-xs font-mono text-amber-300 tracking-wider">
    {/* Optional Icon */}
    <Code size={14} className="text-amber-400" />

    <span className="text-gray-400">© {new Date().getFullYear()}</span>

    <h2>
      Crafted by <span className="text-amber-400 font-semibold">Web Demon</span>
    </h2>
  </div>
);

export default Trademark;
