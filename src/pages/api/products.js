const products = [
  {
    id: 1,
    name: "Product 1",
    price: 10.0,
  },
  {
    id: 2,
    name: "Product 2",
    price: 20.0,
  },
];

// export const prerender = false;

export function GET() {
  return Response.json(products);
}
