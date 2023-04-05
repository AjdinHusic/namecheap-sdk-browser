
const request = async (url: string, method: "GET" | "POST" = "GET") => {
  const response = await fetch(url, { method });
  const { status } = response;
  const body: string = await response.text();

  return { body, status };
};

export default request;
