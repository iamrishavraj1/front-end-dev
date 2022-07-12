import Link from "next/link";
const Client = () => {
  const clientsProject = [
    {
      id: "Rishav",
      name: "Hello World",
    },
    {
      id: "Rashi",
      name: "Hello World 2",
    },
  ];
  return (
    <>
      <h1>Hello Clients</h1>
      <ul>
        {clientsProject.map((data) => {
          return (
            <>
              <li key={data.id}>
                <Link href={`/clients/${data.id}`}>{data.name}</Link>
                <Link
                  href={{
                    pathname: "/clients/[id]",
                    query: { id: data.id },
                  }}
                >
                  {data.name}
                </Link>
              </li>
            </>
          );
        })}
      </ul>
    </>
  );
};

export default Client;
