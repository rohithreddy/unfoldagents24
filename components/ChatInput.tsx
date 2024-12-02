import { type ChangeEvent, useCallback } from 'react';
import SendSvg from './SendSvg';
;

type PremadeChatInputProps = {
  text: string;
  setUserInput: (input: string) => void;
};

function PremadeChatInput({ text, setUserInput }: PremadeChatInputProps) {
  return (
    <button
      type="submit"
      onClick={() => setUserInput(text)}
      className="w-full whitespace-nowrap rounded-sm border border-gray-500 px-2 py-1 text-start text-gray-500 transition-colors hover:bg-gray-800 hover:text-gray-300 lg:w-auto"
    >
      {text}
    </button>
  );
}

export type ChatInputProps = {
  handleSubmit: (e: React.FormEvent) => void;
  userInput: string;
  setUserInput: (input: string) => void;
  handleKeyPress: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void;
  disabled?: boolean;
};

export default function ChatInput({
  handleSubmit,
  userInput,
  setUserInput,
  handleKeyPress,
  disabled = false,
}: ChatInputProps) {
  const handleInputChange = useCallback(
    // TODO: sanitize
    (e: ChangeEvent<HTMLTextAreaElement>) => {
      setUserInput(e.target.value);
    },
    [setUserInput],
  );

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-auto flex w-full flex-col border-gray-500 border-t bg-black p-4 pb-2 md:mt-0"
    >
      <div className="flex flex-col gap-2">
        <div className="flex gap-2">
          <textarea
            value={userInput}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
            className="h-24 w-full bg-black p-2 pr-10 text-gray-300 placeholder-gray-500 placeholder-opacity-50 lg:h-36"
            placeholder="How can I help?"
            rows={1}
          />
          <button
            type="submit"
            disabled={!/[a-zA-Z]/.test(userInput)}
            className={`mt-auto rounded-sm p-1.5 transition-colors xl:hidden ${
              /[a-zA-Z]/.test(userInput)
                ? 'bg-gray-500 text-black hover:bg-gray-300'
                : 'cursor-not-allowed bg-gray-500 text-black opacity-50'
            }`}
          >
            <SendSvg />
          </button>
        </div>
        <div className="flex w-full items-center justify-between gap-4 py-2">
          <div className="flex grow flex-col flex-wrap gap-2 overflow-x-auto text-xs lg:flex-row lg:text-sm">
            <PremadeChatInput
              setUserInput={setUserInput}
              text="What actions can you take?"
            />
            <PremadeChatInput
              setUserInput={setUserInput}
              text="Deploy an NFT"
            />
          </div>
          <button
            type="submit"
            disabled={!/[a-zA-Z]/.test(userInput) || disabled}
            className={`rounded-sm p-1.5 transition-colors max-xl:hidden ${
              /[a-zA-Z]/.test(userInput) && !disabled
                ? 'bg-gray-500 text-black hover:bg-gray-300'
                : 'cursor-not-allowed bg-gray-500 text-black opacity-50'
            }`}
          >
            <SendSvg />
          </button>
        </div>
      </div>
    </form>
  );
}
