"use client";

import { Key, useEffect, useRef, useState } from "react";
import BubbleIn from "../../../components/chat/BubbleIn";
import BubbleOut from "../../../components/chat/BubbleOut";
import { chatQa } from "../../../utils/chatGpt";
import "../page.css";
import { LineWobble } from "@uiball/loaders";
import useWindowWidth from "../../../hooks/useWindowWidth";

type IConvoProps = {
  user?: string;
  ai?: string;
}[];

export default function QA() {
  const [conversation, setConversation] = useState<IConvoProps>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const calcWidth = useWindowWidth();
  const qnaInput = useRef<null | HTMLInputElement>(null);

  useEffect(() => {
    qnaInput?.current?.focus();
  }, [isLoading]);

  async function handleSubmit(e: { preventDefault: () => void }) {
    e.preventDefault();
    setIsLoading(true);
    const response = await chatQa(input);
    setConversation([
      ...conversation,
      { user: input, ai: response.aiResponse },
    ]);
    setIsLoading(false);
    setInput("");
  }

  return (
    <>
      <h3>
        <u>Q&A Bot</u>
      </h3>
      <div className="pb-20">
        {conversation?.map((c: any, i: Key | null | undefined) => (
          <span key={i}>
            <BubbleOut>{c.user}</BubbleOut>
            <BubbleIn>{c.ai}</BubbleIn>
          </span>
        ))}
      </div>
      <div className="w-screen h-5/6 px-6">
        <div className="fixed bottom-0 left-0 right-0">
          <form onSubmit={handleSubmit}>
            <div className="form-control">
              {isLoading && (
                <div>
                  <LineWobble
                    size={calcWidth}
                    lineWeight={6}
                    speed={1.75}
                    color="white"
                  />
                </div>
              )}
              <label className="input-group input-group-vertical">
                <span>Q&A Bot: Ask me a question.</span>
                <input
                  ref={qnaInput}
                  type="text"
                  value={input}
                  disabled={isLoading}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="...."
                  className="input input-bordered"
                />
              </label>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
