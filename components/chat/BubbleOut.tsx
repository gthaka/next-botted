export default function BubbleIn({ children }: { children: React.ReactNode }) {
  return (
    <div className="chat chat-end  w-full mr-2">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img src="https://picsum.photos/640/360" />
        </div>
      </div>
      <div className="chat-bubble">{children}</div>
    </div>
  );
}
