import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <div className="navbar bg-base-primary">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">
            {process.env.NEXT_PUBLIC_APP_NAME}
          </a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li tabIndex={0}>
              <a>
                Bots
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </a>
              <ul className="p-2 bg-base-100 z-10">
                <li>
                  <Link href="/bots/qa">Q & A</Link>
                </li>
                <li>
                  <Link href="/bots/chat">Chat</Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
