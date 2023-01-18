export default function BubbleIn({ children }: { children: React.ReactNode }) {
  return (
    <div className="chat chat-start w-full ml-2">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img src="https://placeimg.com/192/192/people" />
        </div>
      </div>
      <div className="chat-bubble">{children}</div>
    </div>
  );
}
