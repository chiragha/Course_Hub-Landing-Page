const MarqueeText = () => {
  const text =
    "EduPro • SkillForge • CodeMaster • LearnHub • BrightFuture • NextGen Academy";

  return (
    <div className="relative overflow-hidden bg-white py-4">
      
    
      <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white to-transparent z-10"></div>

      
      <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white to-transparent z-10"></div>

     
      <div className="flex w-max animate-marquee gap-10 whitespace-nowrap text-blue-600 font-semibold text-3xl md:text-4xl">
        
       
        <span>{text}</span>
        <span>{text}</span>

      </div>
    </div>
  );
};

export default MarqueeText;