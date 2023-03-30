import data from "./planets";

const mockFetch = () => Promise.resolve({
  status: 200,
  ok: true,
  json: () => Promise.resolve(data),
});

export default mockFetch;
