export default function BubbleIn({ children }: { children: React.ReactNode }) {
  return (
    <div className="chat chat-start w-full ml-2">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img src="https://cdn.dribbble.com/users/281679/screenshots/14897126/media/f52c47307ac2daa0c727b1840c41d5ab.png?compress=1&resize=192x192" />
        </div>
      </div>
      <div className="chat-bubble">{children}</div>
    </div>
  );
}
