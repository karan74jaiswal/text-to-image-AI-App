export async function clipBoardAPI(prompt) {
  const {
    result: [imageURL],
  } = await fetch(`http://localhost:3001/api/convert`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ prompt }),
  }).then((res) => res.json());
  console.log("Hello");
  return imageURL;
}
