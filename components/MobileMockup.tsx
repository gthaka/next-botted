function MobileMockup({ children }: { children: React.ReactNode }) {
  return (
    <div className="mockup-phone ">
      <div className="camera"></div>
      <div className="display max-h-screen">
        <div className="artboard phone-2 overflow-y-scroll">{children}</div>
      </div>
    </div>
  );
}

export default MobileMockup;
