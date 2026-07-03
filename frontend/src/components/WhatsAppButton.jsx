import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    // Apna number yahan replace karein (Country code ke saath, bina + ke)
    window.open('https://wa.me/919935923658?text=Hi,%20I%20want%20to%20know%20more%20about%20investments.', '_blank');
  };

  return (
    <motion.button
      initial={{ scale: 0 }}
      animate={{ 
        scale: 1,
        boxShadow: ["0px 0px 0px rgba(37, 211, 102, 0.4)", "0px 0px 20px rgba(37, 211, 102, 0)"]
      }}
      transition={{ 
        scale: { delay: 1, type: 'spring', stiffness: 260, damping: 20 },
        boxShadow: { duration: 1.5, repeat: Infinity, repeatType: "loop" }
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 bg-[#25D366] hover:bg-[#20bd5a] text-white p-4 rounded-full shadow-2xl z-50 flex items-center gap-2 group border-2 border-white/20"
    >
      <MessageCircle className="h-7 w-7 fill-white text-white" />
      
      {/* Text reveals on hover */}
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out whitespace-nowrap font-bold text-sm">
        <span className="pl-2 pr-1">Chat with Expert</span>
      </span>
    </motion.button>
  );
}