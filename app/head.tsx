export default function Head() {
  return (
    <>
      <title>{process.env.NEXT_PUBLIC_APP_NAME}</title>
      <meta name="description" content="app with different open ai fns" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </>
  );
}
