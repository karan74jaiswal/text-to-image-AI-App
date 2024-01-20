export async function clipBoardAPI(prompt) {
  console.log(prompt);
  const {
    result: [imageURL],
  } = await fetch(
    `http://sdxlv1test-env.eba-ktgw7t88.ap-south-1.elasticbeanstalk.com/api/convert`,
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
