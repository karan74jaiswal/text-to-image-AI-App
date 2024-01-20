export async function clipBoardAPI(prompt) {
  console.log(prompt);
  const {
    result: [imageURL],
  } = await fetch(
    `https://text-to-image-ai-app-backend.vercel.app/api/convert`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt }),
    }
  ).then((res) => res.json());
  console.log("Hello");
  return imageURL;
}
